import PropTypes from "prop-types";
import { useState } from "react";

const WalletForm = ({ onSubmit, initialData = {}, onCancel }) => {
  const [inputName, setInputName] = useState(initialData?.name || "");

  const handleSubmit = () => {
    const newWallet = {
      name: inputName,
    };

    onSubmit(newWallet, onCancel);
  };

  return (
    <form className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={inputName}
          placeholder="Input name..."
          onChange={(e) => setInputName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-[#ccc] disabled:cursor-not-allowed"
          disabled={!inputName}
        >
          Save
        </button>
      </div>
    </form>
  );
};

WalletForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
  onCancel: PropTypes.func.isRequired,
};

export default WalletForm;
