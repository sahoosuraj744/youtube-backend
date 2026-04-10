import { asyncHandler } from "../utils/asyncHandler.js";
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    messsage:"Suraj sahooo son of Santosh"
  });
});
export { registerUser };
