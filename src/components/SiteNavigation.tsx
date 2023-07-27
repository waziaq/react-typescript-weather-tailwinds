import React from "react";

const SiteNavigation = () => {
  return (
    <div>
      <header className="sticky top-0">
        <nav className="container py-4 relative">
          <p className="gap-2 flex justify-center items-center text-sm text-white cursor-pointer">
            <i className="fa-solid fa-location-arrow text-lg"></i>

            <span className="truncate max-w-2/3">Melaka</span>
          </p>
          <p className="absolute top-1/2 right-4 -translate-y-1/2 text-xs text-white space-x-4">
            <i className="fa-solid fa-pen-to-square cursor-pointer"></i>
            <i className="fa-solid fa-circle-info cursor-pointer"></i>
          </p>
        </nav>
      </header>
    </div>
  );
};

export default SiteNavigation;
