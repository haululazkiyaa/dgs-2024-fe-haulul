import PropTypes from "prop-types";

const ModalLayout = ({ isOpen, closeBtnAction, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={closeBtnAction}
            className="text-gray-500 hover:text-gray-700"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

ModalLayout.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeBtnAction: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalLayout;
