import mongoose from "mongoose";

// MongoDB schema
const ComponentSchema = new mongoose.Schema({
  header: {
    title: String,
    imageUrl: String,
  },
  navbar: [
    {
      label: String,
      url: String,
    },
  ],
  footer: {
    email: String,
    phone: String,
    address: String,
  },
});

const ComponentModel = mongoose.model("Component", ComponentSchema);
export default ComponentModel;