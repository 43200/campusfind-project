import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ugimage from "../assets/ugimage.jpg";

function Colleges() {

  const { type } = useParams();
  const navigate = useNavigate();

  const [colleges, setColleges] = useState([]);

  const [filters, setFilters] = useState({
    search: "",
    domain: "",
    minRating: "",
    maxFees: ""
  });

  const fetchColleges = async () => {

    let queryType = type;

    if (type === "abroad") {
      queryType = "Study Abroad";
    } else {
      queryType = type.toUpperCase();
    }

    let url = `http://localhost:5000/api/institutions?type=${queryType}`;
    if (filters.domain) url += `&domain=${filters.domain}`;
    if (filters.minRating) url += `&minRating=${filters.minRating}`;
    if (filters.maxFees) url += `&maxFees=${filters.maxFees}`;

    const res = await axios.get(url);
    setColleges(res.data);
  };

  useEffect(() => {
    fetchColleges();
  }, [type]);

  const resetFilters = () => {
    setFilters({
      search: "",
      domain: "",
      minRating: "",
      maxFees: ""
    });
  };

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(filters.search.toLowerCase())
  );

  return (

    <div className="min-h-screen relative">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ugimage})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative p-6 md:p-10">

        <h1 className="text-2xl md:text-4xl font-bold text-white mb-10">
          {type.toUpperCase()} Colleges
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* FILTER PANEL */}

          <div className="col-span-12 md:col-span-3 mb-6 md:mb-0 bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/20">

            <h2 className="text-xl font-semibold mb-6 text-white">
              🔎 Filters
            </h2>

            {/* Search */}

            <div className="mb-5">
              <label className="text-sm text-white">
                Search College
              </label>

              <input
                type="text"
                placeholder="Type college name..."
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
                className="w-full mt-1 border rounded-lg p-2"
              />
            </div>

            {/* Course */}

            <div className="mb-5">
              <label className="text-sm text-white">
                Course
              </label>

              <select
                value={filters.domain}
                onChange={(e) =>
                  setFilters({ ...filters, domain: e.target.value })
                }
                className="w-full mt-1 border rounded-lg p-2"
              >
                <option value="">All</option>
                <option value="Engineering">Engineering</option>
                <option value="AI">Artificial Intelligence</option>
                <option value="Medical">Medical</option>
                <option value="Business">Business</option>
              </select>
            </div>

            {/* Rating */}

            <div className="mb-5">
              <label className="text-sm text-white">
                Minimum Rating
              </label>

              <select
                value={filters.minRating}
                onChange={(e) =>
                  setFilters({ ...filters, minRating: e.target.value })
                }
                className="w-full mt-1 border rounded-lg p-2"
              >
                <option value="">All</option>
                <option value="4">⭐ 4+</option>
                <option value="3">⭐ 3+</option>
                <option value="2">⭐ 2+</option>
              </select>
            </div>

            {/* Fees */}

            <div className="mb-6">
              <label className="text-sm text-white">
                Max Fees
              </label>

              <select
                value={filters.maxFees}
                onChange={(e) =>
                  setFilters({ ...filters, maxFees: e.target.value })
                }
                className="w-full mt-1 border rounded-lg p-2"
              >
                <option value="">Any</option>
                <option value="300000">Below ₹3L</option>
                <option value="500000">Below ₹5L</option>
                <option value="1000000">Below ₹10L</option>
              </select>
            </div>

            <div className="flex gap-3">

              <button
                onClick={fetchColleges}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Apply
              </button>

              <button
                onClick={resetFilters}
                className="flex-1 bg-white text-gray-800 py-2 rounded-lg hover:bg-gray-200"
              >
                Reset
              </button>

            </div>

          </div>

          {/* COLLEGE LIST */}

          <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8">

            {filteredColleges.map((college) => (

              <div
                key={college._id}
                onClick={() => navigate(`/college/${college._id}`)}
                className="bg-white rounded-xl border border-gray-200 p-6 md:p-7 shadow-lg hover:shadow-2xl transition cursor-pointer"
              >

                <h2 className="text-lg font-semibold text-gray-800">
                  {college.name}
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  📍 {college.location}
                </p>

                <p className="text-blue-600 font-medium text-sm mt-3 hover:underline">
                  View Details →
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );
}

export default Colleges;