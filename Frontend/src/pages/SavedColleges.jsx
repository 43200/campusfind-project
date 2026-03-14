import { useEffect, useState } from "react";
import axios from "axios";
import ugimage from "../assets/ugimage.jpg"; // background image

function SavedColleges() {

  const [colleges, setColleges] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const fetchSaved = async () => {

    try {

      const res = await axios.get(
        `http://localhost:5000/api/users/profile/${user._id}`
      );

      setColleges(res.data.savedColleges);

    } catch (error) {

      console.error("Error fetching saved colleges", error);

    }

  };

  useEffect(() => {
    fetchSaved();
  }, []);


  const removeCollege = async (collegeId) => {

    try {

      await axios.post(
        "http://localhost:5000/api/users/remove-college",
        {
          userId: user._id,
          collegeId
        }
      );

      // update UI instantly
      setColleges(colleges.filter(c => c._id !== collegeId));

    } catch (error) {

      console.error("Remove error", error);

    }

  };

  return (

    <div
      className="min-h-screen bg-cover bg-center p-10"
      style={{ backgroundImage: `url(${ugimage})` }}
    >

      <div className="bg-black/60 min-h-screen p-10">

        <h1 className="text-3xl font-bold mb-8 text-white">
          Saved Colleges
        </h1>

        {colleges.length === 0 ? (

          <p className="text-white">
            No saved colleges yet
          </p>

        ) : (

          <div className="grid md:grid-cols-2 gap-6">

            {colleges.map((college) => (

              <div
                key={college._id}
                className="bg-white p-6 rounded-xl shadow-lg flex justify-between items-center"
              >

                <div>

                  <h2 className="text-xl font-semibold">
                    {college.name}
                  </h2>

                  <p>{college.location}</p>

                  <p>Rating: {college.rating}</p>

                </div>

                <button
                  onClick={() => removeCollege(college._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );

}

export default SavedColleges;