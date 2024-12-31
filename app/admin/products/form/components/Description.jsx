import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function Description({ data, handleData }) {
  const handleEditorChange = (content) => {
    handleData("description", content);
  };

  return (
    <section className="flex flex-col gap-3 bg-white border p-4 rounded-xl h-full">
      <h1 className="font-semibold">Description</h1>
      <Editor
        apiKey="2rqnze2s788pvpf8sk2benwtnj41ce8jaewvm12i3mfx1dav"
        value={data?.description}
        init={{
          plugins: [
            'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
            'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown', 'importword', 'exportword', 'exportpdf'
          ],
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Author name',
          mergetags_list: [
            { value: 'First.Name', title: 'First Name' },
            { value: 'Email', title: 'Email' },
          ],
          ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
        }}
        onEditorChange={handleEditorChange}
        placeholder="Enter your description here..."
      />
    </section>
  );
}
