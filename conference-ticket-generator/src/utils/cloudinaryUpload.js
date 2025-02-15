import toast from "react-hot-toast";
const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${
  import.meta.env.VITE_CLOUDINARY_NAME
}/image/upload`;
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET;

export const uploadToCloudinary = async (file, setUploading ,setValue,trigger) => {
  setUploading(true);
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  try {
    const response = await fetch(CLOUDINARY_UPLOAD_URL, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error("Error Uploading image");
    }
    const data = await response.json();
    setUploading(false);

    if (data.secure_url) {
      setValue("image", data.secure_url, { shouldValidate: true });
      trigger("image");
      toast.success("Image successfully uploaded👌👌");
    }
  } catch (error) {
    setUploading(false);
    toast.error("Error uploading Image");
    console.error("Cloudinary Upload Error:", error);
  }
};