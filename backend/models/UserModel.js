import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  refreshToken: { type: String },
});

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
