import React from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Skeleton, Box } from "@chakra-ui/react";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => (
    <Skeleton>
      <Box h="100px" />
    </Skeleton>
  ),
});

interface QuillEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ value, onChange }) => {
  const modules = {
    toolbar: [["bold", "italic", "underline", "clean"]],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = ["bold", "italic", "underline"];

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      theme="snow"
    />
  );
};

export default QuillEditor;
