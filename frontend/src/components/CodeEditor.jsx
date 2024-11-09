import { useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
import LeetCodeQuestion from "./LeetCodeQuestion";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <ResizablePanelGroup direction="horizontal" className="max-w-full max-h-[50%] rounded-lg border">
      {/* Left Panel containing Editor and Output stacked vertically */}
      <ResizablePanel defaultSize={50} wi>
        <div className="flex flex-col p-4 space-y-4">
          {/* Language Selector and Editor */}
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{
              minimap: { enabled: false },
            }}
            height="30vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
          
          {/* Output Component */}
          <Output editorRef={editorRef} language={language} />
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle />

      {/* Right Panel containing LeetCodeQuestion */}
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-4">
          <LeetCodeQuestion />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default CodeEditor;
