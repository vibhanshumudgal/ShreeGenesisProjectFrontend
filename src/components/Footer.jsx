import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-200 pt-10 pb-6 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">BrandName</h2>
        <p className="mb-4 text-gray-400">
          Building the future, one line of code at a time.
        </p>
        <div className="flex space-x-4 mt-2">
          {/* Twitter */}
          <a href="#" className="hover:text-white" aria-label="Twitter">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M24 4.6a9.8 9.8 0 0 1-2.8.8A4.8 4.8 0 0 0 23.3 3a9.7 9.7 0 0 1-3 1.2A4.8 4.8 0 0 0 12 8.3a13.6 13.6 0 0 1-9.8-5A4.8 4.8 0 0 0 3.1 9.7a4.8 4.8 0 0 1-2.2-.6v.1a4.8 4.8 0 0 0 3.8 4.7 4.8 4.8 0 0 1-2.2.1 4.8 4.8 0 0 0 4.5 3.4A9.7 9.7 0 0 1 0 21.5a13.7 13.7 0 0 0 7.4 2.2c8.8 0 13.6-7.3 13.6-13.6v-.6A9.7 9.7 0 0 0 24 4.6z" />
            </svg>
          </a>

          {/* Facebook */}
          <a href="#" className="hover:text-white" aria-label="Facebook">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
            </svg>
          </a>

          {/* GitHub */}
          <a href="#" className="hover:text-white" aria-label="GitHub">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.7 1.7 2.1.8.1 1.6-.1 2.2-.3.1-.6.4-1.1.7-1.3-2.7-.3-5.5-1.3-5.5-5.7 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.4-2.8 5.4-5.5 5.7.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
            </svg>
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Company</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Support</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-white">
              Help Center
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Status
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
        <form className="flex flex-col space-y-2">
          <input
            type="email"
            placeholder="Your email"
            className="px-3 py-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 text-center">
      &copy; {new Date().getFullYear()} BrandName. All rights reserved.
    </div>
  </footer>
);

export default Footer;
