"use client";
import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
import "@syncfusion/ej2-splitbuttons/styles/material.css";
import "@syncfusion/ej2-react-richtexteditor/styles/material.css";

interface TextEditorProps {
  setContent: (content: string) => void;
}

// @ts-ignore
window.SyncfusionLicense = process.env.SYNCFUTION_LICENCE_KEY;

const TextEditor: React.FC<TextEditorProps> = ({ setContent }) => {
  const toolbarSettings = {
    items: [
      "Bold",
      "Italic",
      "Underline",
      "StrikeThrough",
      "FontName",
      "FontSize",
      "FontColor",
      "BackgroundColor",
      "LowerCase",
      "UpperCase",
      "|",
      "Formats",
      "Alignments",
      "OrderedList",
      "UnorderedList",
      "Outdent",
      "Indent",
      "|",
      "CreateLink",
      "Image",
      "|",
      "ClearFormat",
      "Print",
      "SourceCode",
      "FullScreen",
      "|",
      "Undo",
      "Redo",
    ],
  };

  const quickToolbarSettings = {
    image: [
      "Replace",
      "Align",
      "Caption",
      "Remove",
      "InsertLink",
      "OpenImageLink",
      "-",
      "EditImageLink",
      "RemoveImageLink",
      "Display",
      "AltText",
      "Dimension",
    ],
    link: ["Open", "Edit", "UnLink"],
  };

  const handleEditorChange = (event: any) => {
    setContent(event.value);
  };

  return (
    <div className="min-h-screen h-screen m-4 ">
      <RichTextEditorComponent
        height="100%"
        toolbarSettings={toolbarSettings}
        quickToolbarSettings={quickToolbarSettings}
        change={handleEditorChange}
      >
        <p>Write something...</p>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default TextEditor;
