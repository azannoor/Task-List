import cors from "cors";

// Define whitelist of allowed origins
const whitelist = ["http://localhost:3000", "*"];

// Configure CORS options
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

export default cors(corsOptions);
