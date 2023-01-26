import { useState } from "react";
import { useDispatch } from "react-redux";
import { createDoc } from "../features/docs/docSlice";

function DocForm() {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [note, setNote] = useState("");
  const [upload, setUpload] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createDoc({ text, url, note, upload, company, category }));
    setText("");
    setUrl("");
    setNote("");
    setUpload("");
    setCompany("");
    setCategory("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Add Document Information</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            placeholder="Enter your Document Title/Name"
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="text"
            name="company"
            id="company"
            value={company}
            placeholder="Enter Company Name"
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="url"
            name="url"
            id="url"
            value={url}
            placeholder="Enter URL"
            onChange={(e) => setUrl(e.target.value)}
          />

          <input
            type="text"
            name="note"
            id="note"
            value={note}
            placeholder="Enter Note/Description about this Document"
            onChange={(e) => setNote(e.target.value)}
          />

          <input
            type="text"
            name="category"
            id="category"
            value={category}
            placeholder="Enter Category Name"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="file"
            name="upload"
            id="upload"
            value={upload}
            placeholder="Upload a Document"
            onChange={(e) => setUpload(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Document
          </button>
        </div>
      </form>
    </section>
  );
}

export default DocForm;
