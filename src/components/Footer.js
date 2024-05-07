import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="text-gray-800 sm:justify-center py-8">
      <div className="container mx-auto">
        <div className="md:flex md:justify-between md:items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center justify-center">
              <FaTwitter
                className="text-2xl mr-2 cursor-pointer"
                onClick={() => openLink('https://twitter.com')}
              />
              <FaFacebook
                className="text-2xl mx-2 cursor-pointer"
                onClick={() => openLink('https://facebook.com')}
              />
              <FaInstagram
                className="text-2xl mx-2 cursor-pointer"
                onClick={() => openLink('https://instagram.com')}
              />
              <FaEnvelope
                className="text-2xl ml-2 cursor-pointer"
                onClick={() => openLink('mailto:info@example.com')}
              />
            </div>
          </div>
          <div className="flex justify-center sm:justify-between mt-4 sm:mt-0">
            <div className="flex items-center mb-2 sm:mb-0">
              <Link to="/policy" className="text-gray-400 hover:text-white mr-4">
                Policy
              </Link>
              <Link to="/legal-notice" className="text-gray-400 hover:text-white">
                Legal Notice
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <div>&copy; 2024 Your Company</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
