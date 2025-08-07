const About = () => {
  return (
    <div className="bg-white p-6 rounded shadow mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
      <p className="text-gray-700">
        This is a dynamic dashboard app built using React, Tailwind CSS, and Cloudinary.
        You can update the header, navigation, and footer in real-time. Images are
        uploaded to Cloudinary using an unsigned preset. The goal is to demonstrate
        frontend and backend skills for a software engineering internship assignment.
      </p>
    </div>
  );
};

export default About;
