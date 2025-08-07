import ComponentModel from "../model/componentModel.js";

// Save content
export const createContent = async (req, res) => {
  try {
    await ComponentModel.deleteMany(); // Clear old data
    const newData = new ComponentModel(req.body); // Create new document with the request body
    // Validate the request body
    await newData.save();
    res.status(200).json({ message: "Saved successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error saving", error: err.message });
  }
};

// Get content
export const getContent = async (req, res) => {
  try {
    const data = await ComponentModel.findOne(); // Fetch the first document
    res.status(200).json(data); // Return the first document
  } catch (err) {
    res.status(500).json({ message: "Error fetching", error: err.message });
  }
};
