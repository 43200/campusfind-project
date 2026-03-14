import { useEffect, useState } from "react";
import axios from "axios";
import profilebg from "../assets/homepage.jpg";

function Profile() {

  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");

  const storedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const res = await axios.get(
          `https://campusfind-backend-tj4j.onrender.com/api/users/profile/${storedUser._id}`
        );

        setUser(res.data);
        setName(res.data.name);

      } catch (error) {

        console.error(error);

      }

    };

    fetchProfile();

  }, []);

  const updateName = async () => {

    try {

      await axios.post(
        "https://campusfind-backend-tj4j.onrender.com/api/users/update-name",
        {
          userId: storedUser._id,
          name
        }
      );

      setUser({ ...user, name });
      setEditing(false);

    } catch (error) {

      console.error(error);

    }

  };

  if (!user) {
    return <p className="text-center mt-20 text-white">Loading...</p>;
  }

  return (

    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${profilebg})` }}
    >

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Profile Card */}
      <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-7 w-full max-w-md transition hover:scale-[1.02]">

        {/* Avatar */}
        <div className="flex justify-center mb-5">

          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            {user.name.charAt(0)}
          </div>

        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Profile
        </h1>

        {/* Name */}
        <div className="mb-4">

          <p className="text-sm text-gray-200 mb-1">
            Name
          </p>

          {editing ? (

            <div className="flex gap-2">

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border px-3 py-1.5 rounded-lg w-full text-sm focus:ring-2 focus:ring-indigo-400 outline-none"
              />

              <button
                onClick={updateName}
                className="bg-green-500 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-green-600"
              >
                Save
              </button>

            </div>

          ) : (

            <div className="flex justify-between items-center">

              <p className="text-white font-medium">
                👤 {user.name}
              </p>

              <button
                onClick={() => setEditing(true)}
                className="text-indigo-300 text-sm hover:text-white"
              >
                Edit
              </button>

            </div>

          )}

        </div>

        {/* Email */}
        <div className="mb-4">

          <p className="text-sm text-gray-200">
            Email
          </p>

          <p className="text-white font-medium">
            📧 {user.email}
          </p>

        </div>

        {/* Saved count */}
        <div className="mb-6">

          <p className="text-sm text-gray-200">
            Saved Colleges
          </p>

          <p className="text-pink-300 font-medium">
            ❤️ {user.savedColleges?.length || 0}
          </p>

        </div>

        {/* Divider */}
        <div className="border-t border-white/30 mb-4"></div>

        {/* Saved Colleges */}
        <h2 className="text-white font-semibold mb-3">
          Saved Colleges
        </h2>

        <div className="space-y-3">

          {user.savedColleges?.map((college) => (

            <div
              key={college._id}
              className="bg-white/20 border border-white/30 p-3 rounded-xl hover:bg-white/30 transition"
            >

              <p className="text-white font-medium text-sm">
                {college.name}
              </p>

              <p className="text-gray-200 text-xs">
                {college.location}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default Profile;