import React, { useRef, useEffect } from "react";
import { Box, ButtonGroup, Button, VStack } from "@chakra-ui/react";
import { Bold, Italic, Underline, X } from "lucide-react";

interface SimpleEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const SimpleEditor: React.FC<SimpleEditorProps> = ({
  value,
  onChange,
}) => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleFormat = (command: string) => {
    document.execCommand(command, false);
    handleInput();
    editorRef.current?.focus();
  };

  const handleClearFormat = () => {
    document.execCommand("removeFormat", false);
    handleInput();
    editorRef.current?.focus();
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
    handleInput();
  };

  return (
    <VStack align="stretch">
      <ButtonGroup size="sm">
        <Button onClick={() => handleFormat("bold")}>
          <Bold size={16} />
        </Button>
        <Button onClick={() => handleFormat("italic")}>
          <Italic size={16} />
        </Button>
        <Button onClick={() => handleFormat("underline")}>
          <Underline size={16} />
        </Button>
        <Button onClick={handleClearFormat}>
          <X size={16} />
        </Button>
      </ButtonGroup>
      <Box
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onPaste={handlePaste}
        border="1px solid"
        borderColor="gray.200"
        borderRadius="md"
        p={2}
        height="200px"
        overflowY="auto"
        _focus={{
          outline: "none",
          boxShadow: "outline",
        }}
        dangerouslySetInnerHTML={{ __html: value }}
        css={{
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            width: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(0,0,0,0.2)",
            borderRadius: "24px",
          },
        }}
      />
    </VStack>
  );
};
