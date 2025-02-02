import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

export default function Description({ data, handleData }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
    const contentState = editorState.getCurrentContent();
    const content = contentState.getPlainText(); // O usa `convertToRaw` para obtener el contenido en formato raw
    handleData("description", content);
  };

  return (
    <section className="flex flex-col gap-3 bg-white border p-4 rounded-xl h-full">
      <h1 className="font-semibold">Description</h1>
      <Editor
        editorState={editorState}
        onChange={handleEditorChange}
        placeholder="Enter your description here..."
      />
    </section>
  );
}