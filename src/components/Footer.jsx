import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import NewsletterForm from "./NewsletterForm"; // Adjust path if needed

const Footer = ({ onContactClick }) => {
  return (
    <footer className="bg-green-700 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Ready to transform fan experiences?
          </h3>
          <p className="text-sm mb-4">
            Join our journey. Subscribe to stay updated.
          </p>
          <NewsletterForm />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-green-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-green-300 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#bio" className="hover:text-green-300 transition">
                Bio
              </a>
            </li>
            <li>
              <button
                onClick={onContactClick}
                className="hover:text-green-300 transition"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Connect with Rhoda</h3>
          <div className="">
            <div className="flex justify-center md:justify-start gap-4 text-xl mt-2">
              <a
                href="https://github.com/rh0se"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-green-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/rhoda-ojetola"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-green-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-white mt-8">
        &copy; {new Date().getFullYear()} FanFuture. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
