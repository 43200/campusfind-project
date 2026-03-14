function Footer() {

  return (

    <footer className="bg-gray-900 text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}

        <div>

          <h2 className="text-lg font-semibold mb-3">
            Smart College Finder
          </h2>

          <p className="text-gray-400 text-sm">
            Helping students discover the best colleges for their
            future.
          </p>

        </div>

        {/* Contact */}

        <div>

          <h2 className="text-lg font-semibold mb-3">
            Contact
          </h2>

          <p className="text-gray-400 text-sm">
            Email: support@collegefinder.com
          </p>

          <p className="text-gray-400 text-sm">
            Phone: +91 9876543210
          </p>

        </div>

        {/* Address */}

        <div>

          <h2 className="text-lg font-semibold mb-3">
            Address
          </h2>

          <p className="text-gray-400 text-sm">
            Bangalore, India
          </p>

        </div>

      </div>

      {/* Bottom */}

      <div className="text-center text-gray-500 text-sm pb-6">
        © 2026 Smart College Finder
      </div>

    </footer>

  );

}

export default Footer;