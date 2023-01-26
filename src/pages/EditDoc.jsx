import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateDoc } from "../features/docs/docSlice";
import { FaEdit } from "react-icons/fa";

const EditDoc = ({ match }) => {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [note, setNote] = useState("");
  const [upload, setUpload] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { docs, isLoading, isError, message } = useSelector(
    (state) => state.docs
  );

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(updateDoc({ text, url, note, upload, company, category }));
    setText("");
    setUrl("");
    setNote("");
    setUpload("");
    setCompany("");
    setCategory("");
  };
  return (
    <>
      <section className="heading">
        <h1>
          <FaEdit /> Edit Document
        </h1>
        <p>Please make changes</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="text">Document Current Information</label>
            <input
              type="text"
              name="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <input
              type="text"
              name="company"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              type="url"
              name="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />

            <input
              type="text"
              name="note"
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />

            <input
              type="text"
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              type="file"
              name="upload"
              id="upload"
              value={upload}
              onChange={(e) => setUpload(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Update Document
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditDoc;
