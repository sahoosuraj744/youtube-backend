import fs from "fs";
import multer from "multer";
import path from "path";
const uploadDir = path.join(process.cwd(), "public/temp");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, "../public/temp");
    // cb(null, path.resolve("../public/temp"));
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage,
});
