import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import abroad from "../assets/abroad.jpg";

function CollegeDetails() {

  const { id } = useParams();
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // FETCH COLLEGE
  useEffect(() => {

    const fetchCollege = async () => {

      try {

        const res = await axios.get(
          `https://campusfind-backend-tj4j.onrender.com/api/institutions/${id}`
        );

        setCollege(res.data);

      } catch (error) {

        console.error("Error fetching college:", error);

      } finally {

        setLoading(false);

      }

    };

    fetchCollege();

  }, [id]);


  // SAVE COLLEGE
  const saveCollege = async () => {
    try {

      setSaving(true);

      const user = JSON.parse(localStorage.getItem("user"));

      console.log("USER:", user);
      console.log("USER ID:", user?._id);
      console.log("COLLEGE:", college);
      console.log("COLLEGE ID:", college?._id);

      const res = await axios.post(
        "https://campusfind-backend-tj4j.onrender.com/api/users/save-college",
        {
          userId: user._id,
          collegeId: college._id
        }
      );

      console.log("RESPONSE:", res.data);

      alert("College Saved ❤️");

    } catch (error) {
      console.error("Save error:", error?.response?.data || error?.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (!college) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        College not found
      </div>
    );
  }

  return (

    <div className="min-h-screen relative">

      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${abroad})` }}
      ></div>

      <div className="absolute inset-0 bg-black/60"></div>


      <div className="relative p-6 md:p-10">

        <div className="max-w-4xl mx-auto bg-white/95 p-8 md:p-10 rounded-2xl shadow-2xl">

          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            {college.name}
          </h1>


          {/* Basic Info */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

            <p>📍 Location: {college.location}</p>
            <p>🎓 Type: {college.type}</p>
            <p>💰 Fees: ₹{college.fees}</p>
            <p>⭐ Rating: {college.rating}</p>

          </div>


          {/* Placement */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            <div className="bg-blue-50 border p-6 rounded-xl text-center">
              <p className="text-sm">Highest Package</p>
              <h2 className="text-2xl font-bold text-blue-700">
                ₹{college.highestPackage}
              </h2>
            </div>

            <div className="bg-green-50 border p-6 rounded-xl text-center">
              <p className="text-sm">Average Package</p>
              <h2 className="text-2xl font-bold text-green-700">
                ₹{college.averagePackage}
              </h2>
            </div>

          </div>


          {/* Courses */}

          <h2 className="text-xl font-semibold mb-3">
            Courses Offered
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">

            {college.courses?.map((course, index) => (

              <div
                key={index}
                className="bg-gray-100 px-3 py-2 rounded-lg text-sm"
              >
                🎓 {course}
              </div>

            ))}

          </div>


          {/* Description */}

          <h2 className="text-xl font-semibold mb-3">
            About College
          </h2>

          <p className="text-gray-700 mb-8">
            {college.description}
          </p>


          {/* Buttons */}

          <div className="flex gap-4 flex-wrap">

            {college.website && (
              <a
                href={college.website}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Visit Website
              </a>
            )}

            {college.applyLink && (
              <button
                onClick={() => window.open(college.applyLink, "_blank")}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              >
                Apply Now
              </button>
            )}

            <button
              onClick={saveCollege}
              disabled={saving}
              className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save College"}
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default CollegeDetails;