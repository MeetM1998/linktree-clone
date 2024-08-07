import LinkModel from "../models/LinkModel.js";

export const createLink = async (req, res) => {
  const { title, url } = req.body.data;

  try {
    const newLink = new LinkModel({ title, url, userId: req.body._id });
    await newLink.save();
    res.status(201).json(newLink);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteLink = async (req, res) => {
  const { id } = req.params;
  try {
    const link = await LinkModel.findById(id);
    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }
    if (link.userId.toString() !== req.body._id) {
      return res.status(403).json({ message: "Forbidden" });
    }
    await LinkModel.deleteOne({ _id: id });
    res.json({ message: "Link deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
