import UserModel from "../models/userModel.js";
import LinkModel from "../models/LinkModel.js";

export const getProfile = async (req, res) => {
  try {
    const user = await UserModel.findById(req.body._id).select("-password");
    const links = await LinkModel.find({ userId: req.body._id });
    res.json({ profile: user, links });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
