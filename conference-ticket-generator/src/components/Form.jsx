import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { saveToStorage, getFromStorage } from "../utils/storage";
import ImageUpload from "./ImageUpload";
import { ToastContainer, toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const Form = ({ setMoveToStep, moveToStep }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();

  const [imgPreview, setImagePreview] = useState("");

  const [loading, setLoading] = useState(false);

  // Load saved data
  useEffect(() => {
    const savedData = getFromStorage("ticketData");
    if (savedData) {
      Object.keys(savedData).forEach((key) => {
        return setValue(key, savedData[key]);
      });
    }
  }, [setValue]);

  function handleImgClick() {
    const hiddenFileInput = document.getElementById("file-input");
    if (!hiddenFileInput) return;

    hiddenFileInput.click();
  }

  const handleImgConversion = async (event) => {
    let res;

    const file = event.target.files[0];

    if (!file) return;

    if (file) {
      const maxSize = 1 * 1024 * 1024;
      if (file.size > maxSize) {
        toast.warning("Image too large");
        return;
      }
    }

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "ticket-user-img");
    data.append("cloud_name", "dwnf42p5d");
    !res && toast("Uploading Image...");
    res = await fetch(
      "https://api.cloudinary.com/v1_1/dwnf42p5d/image/upload",
      {
        method: "POST",
        body: data
      }
    );

    let uploadImageURL = await res.json();

    setImagePreview(uploadImageURL.url);
    !uploadImageURL && toast("Please try again");
    uploadImageURL = "";
  };

  const submitHandler = (data) => {
    console.log({ data });
    if (!data.img) {
      toast("Please upload image");
    }

    setLoading(true);
    toast("Creating ticket...");
    setTimeout(() => {
      saveToStorage("ticketData", { ...data, img: imgPreview });
      setMoveToStep(3);
      setLoading(false);
    }, 5000);

    setTimeout(() => {
      toast("Ticket created ✅");
    }, 4000);
  };

  return (
    <div className="attendee-detais-container">
      <ToastContainer />
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="profile-photo-upload-wrapper">
          <p>Upload Profile Photo</p>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            className="file-input"
            id="file-input"
            {...register("img", { required: true })}
            onChange={(e) => handleImgConversion(e)}
          />

          <div>
            <div className="img-uploader" onClick={handleImgClick}>
              <ImageUpload />

              {(getFromStorage("ticketData").img || imgPreview) && (
                <img
                  src={imgPreview || getFromStorage("ticketData").img}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>

        <hr />
        <div className="inputs-container">
          {" "}
          <label htmlFor="fullname">Enter your name</label>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            {...register("fullName", { required: true })}
          />
          {errors.fullName && <p style={{ color: "red" }}>Name is required</p>}
          <label htmlFor="email">Enter you email *</label>
          <div className="email-input-wrapper">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 0.00012207H2C0.897 0.00012207 0 0.897122 0 2.00012V14.0001C0 15.1031 0.897 16.0001 2 16.0001H18C19.103 16.0001 20 15.1031 20 14.0001V2.00012C20 0.897122 19.103 0.00012207 18 0.00012207ZM18 2.00012V2.51112L10 8.73412L2 2.51212V2.00012H18ZM2 14.0001V5.04412L9.386 10.7891C9.56111 10.9267 9.77733 11.0014 10 11.0014C10.2227 11.0014 10.4389 10.9267 10.614 10.7891L18 5.04412L18.002 14.0001H2Z"
                fill="white"
              />
            </svg>

            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+\.\S+$/
              })}
            />
          </div>
          {errors.email && <p style={{ color: "red" }}>Valid email required</p>}
          <label htmlFor="Special request?">Special request?</label>
          <textarea
            name="special-request"
            id="form-special-request"
            cols="60"
            rows="6"
            {...register("specialRequest", { required: false })}
          ></textarea>
          {/* <input
          type="url"
          placeholder="Avatar URL (Cloudinary)"
          {...register("avatar", { required: true })}
        />
        {errors.avatar && (
          <p style={{ color: "red" }}>Valid image URL required</p>
        )} */}
        </div>

        <div className="btns">
          <Button
            btnText="Cancel"
            type="transparent"
            action={() => setMoveToStep(moveToStep - 1)}
          />
          <button
            type="submit"
            disabled={loading}
            onClick={() => {
              !imgPreview && toast.error("Please upload an Image");
            }}
          >
            {loading ? "Generating Ticket..." : "Get My Free Ticket"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
