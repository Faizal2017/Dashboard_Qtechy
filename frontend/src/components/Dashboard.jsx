import { useContext, useState } from "react";
import { AppContext } from "../context/appContext";

const Dashboard = () => {
  const { header, setHeader, navbar, setNavbar, footer, setFooter } =
    useContext(AppContext);
  const [preview, setPreview] = useState(null); // For image preview

  const handleImageUpload = async (e) => {
  const file = e.target.files[0];
  setPreview(URL.createObjectURL(file));

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "fez_upload"); // ✅ Must match exactly

  try {
    const res = await fetch("https://api.cloudinary.com/v1_1/dxibilbg9/image/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log("Upload result:", data);

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
    <div className="bg-white p-6 rounded-lg shadow-lg mt-10 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠️ Dashboard</h2>

      {/* Header Title */}
      <div>
        <label className="block font-medium mb-1">Header Title</label>
        <input
          type="text"
          value={header.title}
          onChange={(e) => setHeader({ ...header, title: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Image Upload */}
      <div>
        <label className="block font-medium mb-1">Header Image</label>
        <input type="file" onChange={handleImageUpload} />
        {preview && (
          <img src={preview} alt="Preview" className="mt-2 max-h-40 rounded" />
        )}
      </div>

      {/* Navbar Links */}
      <div>
        <h3 className="font-semibold text-lg mt-4">Navigation Links</h3>
        {navbar.map((link, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Label"
              value={link.label}
              onChange={(e) => {
                const updated = [...navbar];
                updated[index].label = e.target.value;
                setNavbar(updated);
              }}
              className="p-2 border rounded w-1/2"
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
              className="p-2 border rounded w-1/2"
            />
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div>
        <h3 className="font-semibold text-lg mt-4">Footer Info</h3>
        <input
          type="email"
          placeholder="Email"
          value={footer.email}
          onChange={(e) => setFooter({ ...footer, email: e.target.value })}
          className="p-2 border rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Phone"
          value={footer.phone}
          onChange={(e) => setFooter({ ...footer, phone: e.target.value })}
          className="p-2 border rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Address"
          value={footer.address}
          onChange={(e) => setFooter({ ...footer, address: e.target.value })}
          className="p-2 border rounded w-full"
        />
      </div>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={async () => {
          await fetch("http://localhost:5000/api/components", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ header, navbar, footer }),
          });
          alert("Saved to database!");
        }}
      >
        Save Changes
      </button>
    </div>
  );
};

export default Dashboard;
