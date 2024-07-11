import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { FileSymlink, FileX2 } from "lucide-react";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";

export function DropZone() {
  const { setValue, getValues } = useFormContext();
  const [activeImage, setActiveImage] = React.useState<FileList | null>(null);
  const [isActive, setIsActive] = React.useState(false);
  const image: FileList | null = getValues("image");

  React.useEffect(() => {
    setActiveImage(image);
  }, [image]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsActive(false);
    setValue("image", e.dataTransfer.files);
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

  return (
    <Box
      className={clsx(
        "w-full h-32 mb-4 flex flex-col items-center justify-center border-4 border-dashed rounded-lg",
        {
          "border-primary": isActive,
          "border-gray-400": !isActive,
        },
      )}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDragEnter={(e) => {
        e.preventDefault();

        setIsActive(true);
      }}
      onDragLeave={handleLeave}
      onDrop={handleDrop}
    >
      {activeImage ? (
        <div
          onClick={() => {
            setValue("image", null);
            setActiveImage(null);
          }}
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
    </Box>
  );
}
