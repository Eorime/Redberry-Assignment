import "./createBlog.css";
import Logo from "../components//navbar/logo.png";
import BackArrow from "./backArrow.png";
import { useState } from "react";

const Create = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const change = (e) => {
    const file = e.target.files[0];
    if (file && file.type.includes("image")) {
      setUploadedFile(file);
    } else {
      setUploadedFile(null);
      //aq errori pls select an image
      console.log("select an image");
    }
  };

  return (
    <div className="zhuzhu">
      <img src={Logo} className="logo" alt="Redberry Logo"></img>
      <img src={BackArrow} className="back-arrow" alt="back-arrow" />
      <h1 className="form-name">ბლოგის დამატება</h1>
      <form></form>
    </div>
  );
};

export default Create;
