import * as React from "react";
import { Button, Text } from "@chakra-ui/react";
import { FileSymlink, FileX2 } from "lucide-react";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";

export function DropZone({ name }: { name: string }) {
  const { setValue, getValues } = useFormContext();
  const [activeImage, setActiveImage] = React.useState<FileList | null>(null);
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    setActiveImage(getValues(name));
  }, [getValues, name]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsActive(false);
    const files = e.dataTransfer.files;
    setValue(name, files);
    setActiveImage(files);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setValue(name, e.target.files);
      setActiveImage(e.target.files);
    }
  };

  const handleLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (
      e.currentTarget &&
      (e.relatedTarget instanceof Node
        ? !e.currentTarget.contains(e.relatedTarget)
        : true)
    ) {
      setIsActive(false);
    }
  };

  const handleRemoveImage = () => {
    setValue(name, null);
    setActiveImage(null);
    const fileInput = document.getElementById(
      `file-input-${name}`,
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <div className="w-full">
      <div
        className={clsx(
          "hidden md:flex w-full h-32 mb-4 flex-col items-center justify-center border-4 border-dashed rounded-lg",
          {
            "border-primary": isActive,
            "border-gray-400": !isActive,
          },
        )}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e) => {
          e.preventDefault();
          setIsActive(true);
        }}
        onDragLeave={handleLeave}
        onDrop={handleDrop}
      >
        {activeImage && activeImage.length > 0 ? (
          <div
            onClick={handleRemoveImage}
            className={clsx(
              "flex flex-col items-center justify-center text-primary cursor-pointer",
              {
                "text-gray-400": isActive,
              },
            )}
          >
            <FileX2 size={40} strokeWidth={1} />
            <Text>Удалить изображение</Text>
          </div>
        ) : (
          <div
            className={clsx(
              "flex flex-col items-center justify-center text-primary cursor-default",
              {
                "text-gray-400": isActive,
              },
            )}
          >
            <FileSymlink size={40} strokeWidth={1} />
            <Text>Перетащите изображение</Text>
          </div>
        )}
      </div>
      <Button
        onClick={() => document.getElementById(`file-input-${name}`)?.click()}
        className="w-full md:w-auto"
      >
        <span className="md:hidden">Выбрать изображение</span>
        <span className="hidden md:inline">Выбрать файл</span>
      </Button>
      <input
        id={`file-input-${name}`}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
