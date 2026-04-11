import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadOnCloudinary = async (localFilepath) => {
  try {
    if (!localFilepath) return null;
    const response = await cloudinary.uploader.upload(localFilepath, {
      resource_type: "auto",
    });
    console.log("file upload to cloud:", response.url);
    // if (fs.existsSync(localFilepath)) {
    //   fs.unlinkSync(localFilepath);
    // }
    fs.unlinkSync(localFilepath);

    //file has been uploaded
    console.log("fil hasd been uploaded successfully", response.url);
    return response;
  } catch (error) {
    if (fs.existsSync(localFilepath)) {
      fs.unlinkSync(localFilepath);
    }
    //remove the localy saved temporary file as the upload operation got failed
    return null;
  }
};

export { uploadOnCloudinary };
