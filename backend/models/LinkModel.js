import { Schema, model } from "mongoose";

const linkSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "Users" },
});

const Link = model("Link", linkSchema);

export default Link;
