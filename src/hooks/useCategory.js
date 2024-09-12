import {
  addCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../services/categoryServices";
import { useEffect, useState } from "react";

import useSweetAlert from "./useSweetAlert";

const useCategory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const { handleConfirmationAlert, handleResponseAlert } = useSweetAlert();

  const fetchCategory = async () => {
    setIsLoading(true);

    try {
      const categories = await getCategories();

      // reformat data wallet
      let newCategories = [];

      for (const item of categories.data) {
        // meringkas format json wallet
        const formatCategory = {
          _id: item._id,
          name: item.name,
          wallet_id: item.wallet?._id ?? "",
          wallet_name: item.wallet?.name ?? "",
        };
        // menambahkan data wallet yang sudah di re-formating
        newCategories.push(formatCategory);
      }

      setCategoryData(newCategories);
    } catch (error) {
      console.error("Error fetching wallet:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleDeleteCategory = (categoryId) => {
    handleConfirmationAlert(
      "Are you sure?",
      "You won't be able to revert this!",
      "Yes, delete it!",
      "Deleted!",
      "Your file has been deleted.",
      async () => {
        try {
          await deleteCategory(categoryId);
          setCategoryData((prevCategoryData) =>
            prevCategoryData.filter((category) => category._id !== categoryId)
          );
        } catch (error) {
          console.error("Error deleting category:", error);
        }
      }
    );
  };

  const handleAddCategory = async (data, successAction) => {
    const result = await addCategory(data);
    if (result) {
      handleResponseAlert("success", "Wallet added successfully!");
      fetchCategory();
      successAction();
    } else {
      handleResponseAlert("error", "Failed to add wallet!");
    }
  };

  const handleUpdateCategory = async (id, data, successAction) => {
    const result = await updateCategory(id, data);
    if (result) {
      handleResponseAlert("success", "Wallet updated successfully!");
      fetchCategory();
      successAction();
    } else {
      handleResponseAlert("error", "Failed to update wallet!");
    }
  };

  return {
    isLoading,
    categoryData,
    handleDeleteCategory,
    handleAddCategory,
    handleUpdateCategory,
  };
};

export default useCategory;
