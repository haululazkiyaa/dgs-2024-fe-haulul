import {
  addWallet,
  deleteWallet,
  getWallets,
  updateWallet,
} from "../services/walletServices";
import { useEffect, useState } from "react";

import useSweetAlert from "./useSweetAlert";

const useWallet = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [walletData, setWalletData] = useState([]);
  const { handleConfirmationAlert, handleResponseAlert } = useSweetAlert();

  const fetchWallet = async () => {
    setIsLoading(true);

    try {
      const wallets = await getWallets();

      // reformat data wallet
      let newWallets = [];

      for (const item of wallets.data) {
        // menghitung jumlah saldo wallet
        let amount = 0;
        for (const transaction of item.expenseItems) {
          amount += transaction.amount;
        }
        // meringkas format json wallet
        const formatWallet = {
          _id: item._id,
          name: item.name,
          amount: amount,
        };
        // menambahkan data wallet yang sudah di re-formating
        newWallets.push(formatWallet);
      }

      setWalletData(newWallets);
    } catch (error) {
      console.error("Error fetching wallet:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWallet();
  }, []);

  const handleDeleteWallet = (walletId) => {
    handleConfirmationAlert(
      "Are you sure?",
      "You won't be able to revert this!",
      "Yes, delete it!",
      "Deleted!",
      "Your file has been deleted.",
      async () => {
        try {
          await deleteWallet(walletId);
          setWalletData((prevWalletData) =>
            prevWalletData.filter((wallet) => wallet._id !== walletId)
          );
        } catch (error) {
          console.error("Error deleting wallet:", error);
        }
      }
    );
  };

  const handleAddWallet = async (data, successAction) => {
    const result = await addWallet(data);
    if (result) {
      handleResponseAlert("success", "Wallet added successfully!");
      fetchWallet();
      successAction();
    } else {
      handleResponseAlert("error", "Failed to add wallet!");
    }
  };

  const handleUpdateWallet = async (id, data, successAction) => {
    const result = await updateWallet(id, data);
    if (result) {
      handleResponseAlert("success", "Wallet updated successfully!");
      fetchWallet();
      successAction();
    } else {
      handleResponseAlert("error", "Failed to update wallet!");
    }
  };

  return {
    isLoading,
    walletData,
    handleDeleteWallet,
    handleAddWallet,
    handleUpdateWallet,
  };
};

export default useWallet;
