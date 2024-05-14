import multer from "multer";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/"); // Specify the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname); // Generate a unique filename
    },
  });
  const upload = multer({ storage: storage });
  export default upload