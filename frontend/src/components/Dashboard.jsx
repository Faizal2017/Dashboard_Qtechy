import { useContext, useState } from "react";
import { AppContext } from "../context/appContext";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { header, setHeader, navbar, setNavbar, footer, setFooter } =
    useContext(AppContext); // Access context values for header, navbar, and footer

  const [preview, setPreview] = useState(null); // For image preview

  // Function to handle image upload
  // It uploads the image to Cloudinary and updates the header with the image URL
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setPreview(URL.createObjectURL(file));

    // Prepare form data for Cloudinary upload
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "fez_upload"); //

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dxibilbg9/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json(); // Check if the upload was successful

      if (data.secure_url) {
        setHeader((prev) => ({ ...prev, imageUrl: data.secure_url }));
      } else {
        console.error("Upload failed. No secure_url.");
      }
    } catch (err) {
      console.error("Image upload failed:", err);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl mt-10 space-y-8 border border-gray-200">
      <h2 className="text-3xl font-bold text-indigo-600 mb-2">
        🛠️ Dashboard Settings
      </h2>

      {/* Header Title */}
      <div className="space-y-2">
        <label className="block text-gray-700 font-semibold">
          Header Title
        </label>
        <input
          type="text"
          value={header.title}
          onChange={(e) => setHeader({ ...header, title: e.target.value })}
          className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* Image Upload */}
      <div className="space-y-2">
        <label className="block text-gray-700 font-semibold">
          Header Image
        </label>
        <input
          type="file"
          onChange={handleImageUpload}
          className="block w-fit text-sm text-gray-600"
        />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-3 max-h-40 rounded-md shadow-md border border-gray-300"
          />
        )}
      </div>

      {/* Navbar Links */}
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-gray-800">Navigation Links</h3>
        <div className="space-y-3">
          {navbar.map((link, index) => (
            <div key={index} className="flex gap-4">
              <input
                type="text"
                placeholder="Label"
                value={link.label}
                onChange={(e) => {
                  const updated = [...navbar];
                  updated[index].label = e.target.value;
                  setNavbar(updated);
                }}
                className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm"
              />
              <input
                type="text"
                placeholder="URL"
                value={link.url}
                onChange={(e) => {
                  const updated = [...navbar];
                  updated[index].url = e.target.value;
                  setNavbar(updated);
                }}
                className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-800">Footer Info</h3>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-gray-700 font-semibold">
              📧 Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={footer.email}
              onChange={(e) => setFooter({ ...footer, email: e.target.value })}
              className="p-2 border border-gray-300 rounded-md shadow-sm w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700 font-semibold">
              📞 Phone
            </label>
            <input
              type="text"
              placeholder="Phone"
              value={footer.phone}
              onChange={(e) => setFooter({ ...footer, phone: e.target.value })}
              className="p-2 border border-gray-300 rounded-md shadow-sm w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700 font-semibold">
              🏠 Address
            </label>
            <input
              type="text"
              placeholder="Address"
              value={footer.address}
              onChange={(e) =>
                setFooter({ ...footer, address: e.target.value })
              }
              className="p-2 border border-gray-300 rounded-md shadow-sm w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="pt-4">
        <button
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-200 shadow-sm"
          onClick={async () => {
            await fetch("http://localhost:5000/api/components", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ header, navbar, footer }),
            });
            toast.success("Saved to database!");
          }}
        >
          💾 Save Changes
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
