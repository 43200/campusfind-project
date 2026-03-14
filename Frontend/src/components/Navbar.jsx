import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (

    <nav className="sticky top-0 bg-white shadow-md z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <h1 className="text-xl font-bold text-blue-600">
          CampusFind
        </h1>

        {/* Links */}

        <div className="space-x-6">

          <Link
            to="/home"
            className="text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/profile"
            className="text-gray-700 hover:text-blue-600"
          >
            Profile
          </Link>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;