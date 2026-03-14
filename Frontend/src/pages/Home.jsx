import { useNavigate, Link } from "react-router-dom";

import homepage from "../assets/homepage.jpg";

function Home() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <nav className="bg-black text-white px-6 md:px-10 py-4 flex justify-between items-center shadow-md">

        <h1 className="text-xl md:text-2xl font-bold">
          CampusFind
        </h1>

        <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">

          <button
            onClick={() => navigate("/home")}
            className="hover:text-gray-300"
          >
            Home
          </button>

          <Link
            to="/saved-colleges"
            className="hover:text-gray-300"
          >
            Saved Colleges
          </Link>

          <button
            onClick={() => navigate("/profile")}
            className="hover:text-gray-300"
          >
            Profile
          </button>

          <button
            onClick={logout}
            className="bg-red-500 px-3 md:px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>

        </div>

      </nav>

      {/* HERO */}
      <div
        className="h-60 md:h-80 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${homepage})` }}
      >
        <div className="bg-black/50 w-full h-full flex items-center justify-center px-4 text-center">

          <h2 className="text-white text-2xl md:text-4xl font-bold">
            Find Your Perfect College
          </h2>

        </div>
      </div>

      {/* CARDS */}
      <div className="p-6 md:p-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* UG */}
          <div
            onClick={() => navigate("/colleges/ug")}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition cursor-pointer text-center"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-indigo-600">
              UG Colleges
            </h2>
            <p className="text-gray-600">
              Find top undergraduate colleges
            </p>
          </div>

          {/* PG */}
          <div
            onClick={() => navigate("/colleges/pg")}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition cursor-pointer text-center"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-indigo-600">
              PG Universities
            </h2>
            <p className="text-gray-600">
              Explore postgraduate programs
            </p>
          </div>

          {/* Abroad */}
          <div
            onClick={() => navigate("/colleges/abroad")}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition cursor-pointer text-center"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-indigo-600">
              Study Abroad
            </h2>
            <p className="text-gray-600">
              Discover global universities
            </p>
          </div>

        </div>

      </div>
      {/* TOP COLLEGES */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-20 px-6 md:px-16">

        <h2 className="text-4xl font-bold text-center mb-14 text-indigo-600 tracking-wide">
          Top Colleges
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white/70 backdrop-blur-lg border border-gray-200 p-7 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">IIT Delhi</h3>
            <p className="text-gray-600">Delhi</p>
            <p className="text-yellow-500 font-medium mt-2">⭐ Rating: 4.8</p>
          </div>

          <div className="bg-white/70 backdrop-blur-lg border border-gray-200 p-7 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">BITS Pilani</h3>
            <p className="text-gray-600">Rajasthan</p>
            <p className="text-yellow-500 font-medium mt-2">⭐ Rating: 4.7</p>
          </div>

          <div className="bg-white/70 backdrop-blur-lg border border-gray-200 p-7 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Stanford University</h3>
            <p className="text-gray-600">California, USA</p>
            <p className="text-yellow-500 font-medium mt-2">⭐ Rating: 4.9</p>
          </div>

        </div>

      </section>



      {/* WHY CAMPUSFIND */}
      <section className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 py-20 px-6 md:px-16">

        <h2 className="text-4xl font-bold text-center mb-14 text-indigo-700">
          Why Choose CampusFind
        </h2>

        <div className="grid md:grid-cols-3 gap-12 text-center">

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Smart Search</h3>
            <p className="text-gray-600">
              Find colleges based on courses, fees, and ratings.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold mb-2">Save Colleges</h3>
            <p className="text-gray-600">
              Save your favorite colleges and view them anytime.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold mb-2">Global Options</h3>
            <p className="text-gray-600">
              Explore universities from India and around the world.
            </p>
          </div>

        </div>

      </section>



      {/* HOW IT WORKS */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-20 px-6 md:px-16">

        <h2 className="text-4xl font-bold text-center mb-14 text-indigo-600">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-12 text-center">

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="text-6xl mb-4">1️⃣</div>
            <h3 className="text-xl font-semibold mb-2">Browse Colleges</h3>
            <p className="text-gray-600">
              Explore UG, PG, and abroad universities easily.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="text-6xl mb-4">2️⃣</div>
            <h3 className="text-xl font-semibold mb-2">View Details</h3>
            <p className="text-gray-600">
              Check courses, ratings, placements, and fees.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="text-6xl mb-4">3️⃣</div>
            <h3 className="text-xl font-semibold mb-2">Save Favorites</h3>
            <p className="text-gray-600">
              Save colleges to review later in your profile.
            </p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-10 mt-10">

        <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              CampusFind
            </h2>
            <p className="text-gray-400 text-sm">
              Helping students discover the best colleges in India
              and around the world.
            </p>
          </div>

          {/* QUICK LINKS */}
          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">

              <li>
                <Link to="/home" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/saved-colleges" className="hover:text-white">
                  Saved Colleges
                </Link>
              </li>

              <li>
                <Link to="/profile" className="hover:text-white">
                  Profile
                </Link>
              </li>

            </ul>
          </div>


          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Contact
            </h3>

            <p className="text-gray-400 text-sm">
              📧 Email: support@campusfind.com
            </p>

            <p className="text-gray-400 text-sm">
              📞 Phone: +91 9876543210
            </p>

            <p className="text-gray-400 text-sm">
              📍 Bangalore, India
            </p>

          </div>

        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-center text-gray-400 text-sm">
          © 2026 CampusFind | Helping students find the right college
        </div>

      </footer>

    </div>
  );
}

export default Home;