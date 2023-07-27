import { useState } from 'react';
import BaseModal from "./BaseModal";

const SiteNavigation = () => {
  const [showModal, setShowModal] = useState(false);
  function toggleModal() {
    setShowModal(!showModal);
  }

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
            <i className="fa-solid fa-circle-info cursor-pointer" onClick={toggleModal}></i>
          </p>
        </nav>
        {showModal &&
          <BaseModal modalClose={toggleModal}>
            <div className="text-black text-sm mb-8">
              <div className="border-b border-gray-500 text-xl mb-8 pb-2">
                Information About System
              </div>
              <div className="font-light text-xs text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </BaseModal>
        }
      </header>
    </div>
  );
};

export default SiteNavigation;
