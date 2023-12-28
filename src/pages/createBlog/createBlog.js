import "./createBlog.css";
import Logo from "./logo.png";
import BackArrow from "./backArrow.png";
import { useState } from "react";
import InputIcon from "./upload.png";
import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";
import Form from "../../components/form/Form";

const Create = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);

  const change = (e) => {
    const file = e.target.files[0];
    if (file && file.type.includes("image")) {
      setUploadedFile(file);
      setFileUploaded(true);
    } else {
      setUploadedFile(null);
      setFileUploaded(false);
    }
  };

  return (
    <div className="full-container">
      <img src={Logo} className="logo" alt="Redberry Logo" />
      <Link className="arrow-Link" to={routes.Home}>
        <img
          src={BackArrow}
          className="back-arrow"
          alt="back-arrow"
          style={{ position: "fixed" }}
        />
      </Link>
      <h1 className="form-name">ბლოგის დამატება</h1>
      <h1 className="custom-upload-text">ატვირთეთ ფოტო</h1>
      <label htmlFor="image-input" className="custom-upload">
        <span>
          {!fileUploaded && (
            <img className="input-icon" src={InputIcon} alt="Upload Icon" />
          )}
          {fileUploaded ? (
            <span style={{ marginLeft: "10px" }}>{uploadedFile.name} </span>
          ) : (
            <>
              ჩააგდეთ ფაილი აქ ან{" "}
              <span style={{ textDecoration: "underline" }}>აირჩიეთ ფაილი</span>
            </>
          )}
        </span>
        <input
          id="image-input"
          type="file"
          accept="image/*"
          onChange={change}
        />
      </label>
      <Form />
    </div>
  );
};

export default Create;
