import {
  addExpenseItem,
  deleteExpenseItem,
  getExpenseItems,
  updateExpenseItem,
} from "../services/expenseItemServices";
import { useEffect, useState } from "react";

import useSweetAlert from "./useSweetAlert";

const useExpenseItem = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [expenseItemData, setExpenseItemData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const { handleConfirmationAlert, handleResponseAlert } = useSweetAlert();

  const fetchExpenseItems = async () => {
    setIsLoading(true);

    try {
      const expenseItems = await getExpenseItems();

      // reformat data wallet
      let newExpenseItems = [];

      for (const item of expenseItems.data) {
        // meringkas format json wallet
        const formatWallet = {
          _id: item._id,
          title: item.title,
          amount: item.amount,
          wallet: item.wallet?._id,
          category: item.category?._id,
          flowType: item.flowType,
          date: item.createdAt,
        };
        // menambahkan data wallet yang sudah di re-formating
        newExpenseItems.push(formatWallet);
        setTotalAmount(
          (prevTotalAmount) => prevTotalAmount + parseInt(formatWallet.amount)
        );
      }

      setExpenseItemData(newExpenseItems);
    } catch (error) {
      console.error("Error fetching wallet:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenseItems();
  }, []);

  const handleDeleteExpenseItem = (walletId) => {
    handleConfirmationAlert(
      "Are you sure?",
      "You won't be able to revert this!",
      "Yes, delete it!",
      "Deleted!",
      "Your file has been deleted.",
      async () => {
        try {
          await deleteExpenseItem(walletId);
          setExpenseItemData((prevExpenseItemData) =>
            prevExpenseItemData.filter((wallet) => wallet._id !== walletId)
          );
        } catch (error) {
          console.error("Error deleting wallet:", error);
        }
      }
    );
  };

  const handleAddExpenseItem = async (data, successAction) => {
    const result = await addExpenseItem(data);
    if (result) {
      handleResponseAlert("success", "Item added successfully!");
      fetchExpenseItems();
      successAction();
    } else {
      handleResponseAlert("error", "Failed to add item!");
    }
  };

  const handleUpdateExpenseItem = async (id, data, successAction) => {
    const result = await updateExpenseItem(id, data);
    if (result) {
      handleResponseAlert("success", "Item updated successfully!");
      fetchExpenseItems();
      successAction();
    } else {
      handleResponseAlert("error", "Failed to update item!");
    }
  };

  return {
    isLoading,
    expenseItemData,
    totalAmount,
    handleDeleteExpenseItem,
    handleAddExpenseItem,
    handleUpdateExpenseItem,
  };
};

export default useExpenseItem;
