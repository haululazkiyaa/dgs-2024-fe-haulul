import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("create");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCreate = () => {
    setMode("create");
    setSelectedItem(null);
    setIsOpen(true);
  };

  const handleEdit = (item) => {
    setMode("edit");
    setSelectedItem(item);
    setIsOpen(true);
  };

  return { isOpen, setIsOpen, mode, selectedItem, handleCreate, handleEdit };
};

export default useModal;
