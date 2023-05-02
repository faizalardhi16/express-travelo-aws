import apiUser from "../config/apiUser.js";
import apiResponse from "../../Travelo.BE.Library/helper/apiResponse.js";

const getUserData = async (req, res) => {
  try {
    const response = await apiUser.get("/");
    res.send(apiResponse(200, response.data, true, null));
  } catch (error) {
    res.send(apiResponse(500, error.message, false, null));
  }
};

export { getUserData };
