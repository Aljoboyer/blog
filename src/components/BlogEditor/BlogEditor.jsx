import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import draftToHtml from "draftjs-to-html";

const BlogEditor = ({ value, onChange, readOnly }) => {
  // console.log('readOnly', readOnly);

  return (
    <div className="mt-2 mb-7 w-full">
      <ReactQuill
        style={{ height: '144px' }}
        theme="snow"
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        modules={{
          toolbar: [
            // [{ header: "1" }, { header: "2" }, { font: [] }],
            // [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike'],
            // [{ align: [] }],
            // [{ color: [] }, { background: [] }],
            [
              { list: 'ordered' },
              { list: 'bullet' },
              // { indent: "-1" },
              // { indent: "+1" },
            ],
            // ["link", "video", "image", "code-block"],
            // ["clean"],
          ],
        }}
      />
      <div
        style={{ height: '30px' }}
        className="post__description"
        // dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  );
};

export default BlogEditor;
