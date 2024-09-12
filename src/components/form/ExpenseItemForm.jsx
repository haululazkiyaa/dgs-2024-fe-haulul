import PropTypes from "prop-types";
import useCategory from "../../hooks/useCategory";
import { useState } from "react";
import useWallet from "../../hooks/useWallet";

const ExpenseItemForm = ({ onSubmit, initialData = {}, onCancel }) => {
  const { walletData } = useWallet();
  const { categoryData } = useCategory();

  const [inputTitle, setInputTitle] = useState(initialData?.title || "");
  const [amount, setAmount] = useState(initialData?.amount || 0);
  const [selectedWallet, setSelectedWallet] = useState(
    initialData?.wallet || ""
  );
  const [selectedCategory, setSelectedCategory] = useState(
    initialData?.category || ""
  );
  const [selectedFlowtype, setSelectedFlowtype] = useState(
    initialData?.flowType || ""
  );

  const handleSubmit = () => {
    const newCategory = {
      title: inputTitle,
      amount: amount,
      wallet: selectedWallet,
      category: selectedCategory,
      flowType: selectedFlowtype,
    };

    onSubmit(newCategory, onCancel);
  };

  return (
    <form className="space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Input title..."
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
        />
      </div>
      <div>
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Amount
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
        />
      </div>
      <div>
        <label
          htmlFor="wallet"
          className="block text-sm font-medium text-gray-700"
        >
          Select Wallet
        </label>
        <select
          name="wallet"
          id="wallet"
          value={selectedWallet}
          onChange={(e) => setSelectedWallet(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
        >
          <option value="">Select a wallet</option>
          {walletData.map((wallet) => (
            <option key={wallet._id} value={wallet._id}>
              {wallet.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Select Category
        </label>
        <select
          name="category"
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
        >
          <option value="">Select a category</option>
          {categoryData.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="flowtype"
          className="block text-sm font-medium text-gray-700"
        >
          Select Flow Type
        </label>
        <select
          name="flowtype"
          id="flowtype"
          value={selectedFlowtype}
          onChange={(e) => setSelectedFlowtype(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
        >
          <option value="">Select a flow type</option>
          <option value="income">Income</option>
          <option value="outcome">Outcome</option>
        </select>
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
          disabled={
            !inputTitle ||
            !amount ||
            !selectedWallet ||
            !selectedCategory ||
            !selectedFlowtype
          }
        >
          Save
        </button>
      </div>
    </form>
  );
};

ExpenseItemForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
  onCancel: PropTypes.func.isRequired,
};

export default ExpenseItemForm;
