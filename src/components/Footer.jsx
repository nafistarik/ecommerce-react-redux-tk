import logo from "../assets/logo.png"; // Update the path to your logo

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="Stylista Logo" className="h-12" />
          <span className="text-2xl font-bold ml-2">Stylista</span>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            Shop
          </a>
          <a href="#" className="hover:text-gray-400">
            About Us
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold">Stylista.</span> All rights reserved.
        </p>
      </div>
    </footer>
  );
}
