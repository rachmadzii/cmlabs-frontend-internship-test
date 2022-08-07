import React from 'react';
import Navbar from 'components/common/Navbar';

export default function BaseLayout({ children }) {
  return (
    <div className="px-4 md:px-8">
      <Navbar />
      {children}
    </div>
  );
}
