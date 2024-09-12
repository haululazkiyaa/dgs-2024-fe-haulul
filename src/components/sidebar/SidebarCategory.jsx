import CategoryCard from "../card/CategoryCard";
import CategoryForm from "../form/CategoryForm";
import ModalLayout from "../../layout/ModalLayout";
import ReactLoadingSpin from "../loading/ReactLoadingSpin";
import SidebarTitle from "./SidebarTitle";
import useCategory from "../../hooks/useCategory";
import useModal from "../../hooks/useModal";

const SidebarCategory = () => {
  const {
    isLoading: isLoadingCategory,
    categoryData,
    handleDeleteCategory,
    handleAddCategory,
    handleUpdateCategory,
  } = useCategory();

  const { isOpen, setIsOpen, mode, selectedItem, handleCreate, handleEdit } =
    useModal();

  const handleSubmit = (data, successAction) => {
    if (mode === "create") {
      handleAddCategory(data, successAction);
    } else {
      handleUpdateCategory(selectedItem._id, data, successAction);
    }
  };

  return (
    <>
      <SidebarTitle title="Categories" addBtnAction={() => handleCreate()} />
      <div className="space-y-6">
        {isLoadingCategory ? (
          <ReactLoadingSpin />
        ) : (
          categoryData.map((category) => (
            <CategoryCard
              key={category._id}
              icon="/images/ic-bills.png"
              title={category.name}
              walletName={`${category.wallet_name}`}
              onClick={() => handleEdit(category)}
              removeBtnAction={() => handleDeleteCategory(category._id)}
            />
          ))
        )}
      </div>
      <ModalLayout
        isOpen={isOpen}
        closeBtnAction={() => setIsOpen(false)}
        title={
          mode === "create" ? "Add Category" : "Edit: " + selectedItem.name
        }
      >
        <CategoryForm
          onSubmit={handleSubmit}
          initialData={selectedItem}
          onCancel={() => setIsOpen(false)}
        />
      </ModalLayout>
    </>
  );
};

export default SidebarCategory;
