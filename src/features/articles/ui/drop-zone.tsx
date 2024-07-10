import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { FolderPlus } from "lucide-react";
import { UseFormSetValue } from "react-hook-form";
import { TFormData } from "./article-form";
import clsx from "clsx";

export function DropZone({
  setValue,
}: {
  setValue: UseFormSetValue<TFormData>;
}) {
  const [isActive, setIsActive] = React.useState(false);

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
      onDragLeave={(e) => {
        e.preventDefault();

        if (
          e.currentTarget &&
          (e.relatedTarget instanceof Node
            ? !e.currentTarget.contains(e.relatedTarget)
            : true)
        ) {
          setIsActive(false);
        }
      }}
      onDrop={(e) => {
        e.preventDefault();

        const files = e.dataTransfer.files;

        setValue("image", files);
        setIsActive(false);
      }}
    >
      <FolderPlus
        size={40}
        strokeWidth={1}
        className={clsx("text-primary", {
          "text-gray-400": isActive,
        })}
      />
      <Text
        className={clsx("text-primary", {
          "text-gray-400": isActive,
        })}
      >
        Перетащите изображение
      </Text>
    </Box>
  );
}
