import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  HStack,
  Icon,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import { FileText, Image } from "lucide-react";
import { useFormContext, Controller } from "react-hook-form";
import dynamic from "next/dynamic";
import { UIFormErrorMessage } from "@/shared/ui/ui-form-error-message";
import { messages } from "@/features/auth/constants";
import { DropZone } from "@/shared/ui/drop-zone";
import { useColors } from "@/shared/hooks/useColors";
import { useProfile } from "@/features/profile/hooks/useProfile";

// Динамический импорт React Quill (чтобы избежать ошибок SSR)
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // Импорт стилей Quill

export const CommonArticleFields: React.FC = () => {
  const colors = useColors();
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const user = useProfile();

  const modules = {
    toolbar: [
      [{ header: [2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
  };

  return (
    <>
      <FormControl>
        <FormLabel>
          <HStack>
            <Icon as={FileText} color={colors.primaryColor} />
            <Text fontWeight="bold">Название статьи</Text>
          </HStack>
        </FormLabel>
        <Input
          type="text"
          placeholder="Введите название статьи"
          {...register("title", {
            required: messages.ERROR_FORM_REQUIRED,
          })}
          borderColor={colors.borderColor}
          _focus={{ borderColor: colors.primaryColor }}
        />
        <UIFormErrorMessage>
          {errors.title?.message?.toString() || ""}
        </UIFormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel>
          <HStack>
            <Icon as={FileText} color={colors.primaryColor} />
            <Text fontWeight="bold">Текст статьи</Text>
          </HStack>
        </FormLabel>
        <Controller
          name="content"
          control={control}
          rules={{ required: messages.ERROR_FORM_REQUIRED }}
          render={({ field }) => (
            <ReactQuill
              theme="snow"
              modules={modules}
              {...field}
              style={{
                height: "200px",
                marginBottom: "50px",
              }}
            />
          )}
        />
        <UIFormErrorMessage>
          {errors.content?.message?.toString() || ""}
        </UIFormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel>
          <HStack>
            <Icon as={Image} color={colors.primaryColor} />
            <Text fontWeight="bold">Изображение</Text>
          </HStack>
        </FormLabel>
        <DropZone name="image" />
        <input
          type="file"
          {...register("image")}
          style={{
            width: 0,
            height: 0,
            opacity: 0,
            position: "absolute",
            zIndex: -1,
          }}
        />
      </FormControl>

      <FormControl>
        <FormLabel>
          <HStack>
            <Icon as={FileText} color={colors.primaryColor} />
            <Text fontWeight="bold">Премиум статья</Text>
          </HStack>
        </FormLabel>
        <Checkbox
          {...register("isPremium")}
          colorScheme="blue"
          disabled={!user.data?.isPremium}
        >
          Сделать статью премиум
        </Checkbox>
      </FormControl>
    </>
  );
};
