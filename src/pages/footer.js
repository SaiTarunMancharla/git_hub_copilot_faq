import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-4" style={{ backgroundColor: '#161B22' }}>
      <div className="container mx-auto text-center">
        <a href="/data-protection" className="mb-2 block">Data Protection</a>
        <a href="/notice-terms-of-use" className="mb-2 block">Notice Terms of Use</a>
        <a href="/confidential-internal-use-only" className="mb-2 block">Confidential Internal Use Only</a>
      </div>
    </footer>
  );
};

export default Footer;