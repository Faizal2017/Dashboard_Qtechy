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

// Create a model from the schema
// This model will be used to interact with the 'components' collection in MongoDB
const ComponentModel = mongoose.model("Component", ComponentSchema);
export default ComponentModel;