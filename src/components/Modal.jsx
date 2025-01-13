import { useEffect } from "react";

const Modal = ({ isOpen, onClose, pdfUrl }) => {
  useEffect(() => {
    const closeOnEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", closeOnEsc);
    return () => document.removeEventListener("keydown", closeOnEsc);
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-5 transform transition-transform duration-300 scale-100 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        <div className="w-full h-96">
          <iframe
            src={pdfUrl}
            className="w-full h-full"
            frameBorder="0"
            title="Resume"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;
