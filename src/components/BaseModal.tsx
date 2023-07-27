/**
 * Renders a base modal component.
 * 
 * @param {object} props - The props for the BaseModal component.
 * @param {Function} props.modalClose - The function to be called when the modal is closed.
 * @param {React.ReactNode} props.children - The content to be rendered inside the modal.
 * @param {boolean} props.modalActive - Indicates whether the modal is active or not.
 * @returns {JSX.Element} - The rendered base modal.
 */
export default function BaseModal({modalClose, children}: { modalClose: () => void, children: React.ReactNode }): JSX.Element {
  return (
    <div>
      {/* Overlay */}
      <div onClick={modalClose} className="absolute z-10 w-full bg-black bg-opacity-50 h-screen top-0 left-0 flex justify-center px-8">
        {/* Modal */}
        <div className="p-6 bg-white bg-opacity-90 border self-start mt-32 min-w-full rounded-md max-w-screen-md">
          {children}
          <button type="button" className="text-white bg-weather-primary py-2 px-6 rounded-lg" onClick={modalClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
