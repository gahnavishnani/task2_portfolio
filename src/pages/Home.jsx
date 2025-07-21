// ✅ Step 2.1: Import navigate hook
import { useNavigate } from "react-router-dom";
import myPhoto from "../assets/myphoto.jpg";

function Home() {
  // ✅ Step 2.2: useNavigate hook to handle button clicks
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 px-6 bg-gray-900 text-white text-center">
      {/* ✅ Step 2.3: Your profile image */}
      <img
        src={myPhoto}
        alt="Gahna Vishnani"
        className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
      />

      {/* ✅ Step 2.4: Your name & role */}
      <h1 className="text-3xl font-bold mb-2">Gahna Vishnani</h1>
      <p className="text-lg text-gray-400">Full Stack AI Web Developer</p>

      {/* ✅ Step 2.5: 3 buttons for routing */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => navigate("/projects")}
          className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition"
        >
          View Projects
        </button>

        <button
          onClick={() => navigate("/about")}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition"
        >
          About Me
        </button>

        <button
          onClick={() => navigate("/contact")}
          className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded transition"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Home;