import ExpenseItemForm from "../components/form/ExpenseItemForm";
import ModalLayout from "../layout/ModalLayout";
import ReactLoadingSpin from "../components/loading/ReactLoadingSpin";
import SortingButton from "../components/button/SortingButton";
import TransactionCard from "../components/card/TransactionCard";
import { formatRupiah } from "../utils/currencyFormatter";
import useExpenseItem from "../hooks/useExpenseItem";
import useModal from "../hooks/useModal";

const Finance = () => {
  const {
    isLoading,
    expenseItemData,
    totalAmount,
    handleDeleteExpenseItem,
    handleAddExpenseItem,
    handleUpdateExpenseItem,
  } = useExpenseItem();

  const { isOpen, setIsOpen, mode, selectedItem, handleCreate, handleEdit } =
    useModal();

  const handleSubmit = (data, successAction) => {
    if (mode === "create") {
      handleAddExpenseItem(data, successAction);
    } else {
      handleUpdateExpenseItem(selectedItem._id, data, successAction);
    }
  };

  return (
    <>
      <div className="flex-1 space-y-6 mt-6">
        <div className="flex justify-between items-center">
          <div className="flex space-x-6">
            <img
              src="/images/ic-wallet.png"
              alt="Wallet"
              className="h-[64px]"
            />
            <div>
              <h2 className="text-2xl font-bold text-[#007EFE]">Home Wallet</h2>
              <p className="font-bold text-[#7F7F7F]">Change default wallet</p>
            </div>
          </div>
          <label
            htmlFor="calendar"
            className="px-5 py-3 flex items-center rounded-lg shadow-md bg-white text-[#959DAD] space-x-3 font-medium"
          >
            <i className="fa-solid fa-calendar"></i>
            <span>Calendar</span>
            <i className="fa-solid fa-chevron-down"></i>
          </label>
        </div>
        <div className="flex space-x-4">
          <SortingButton label="Group By" isActive={false} onClick={() => {}} />
          <SortingButton
            label="Realisation"
            isActive={false}
            onClick={() => {}}
          />
          <SortingButton label="Dates" isActive={true} onClick={() => {}} />
          <SortingButton label="Types" isActive={false} onClick={() => {}} />
          <SortingButton label="Sample" isActive={false} onClick={() => {}} />
          <SortingButton label="Extended" isActive={false} onClick={() => {}} />
        </div>
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold">January 15 2020</div>
          <div className="flex items-center space-x-6">
            <div className="text-[#959DAD] font-medium">
              Number of transaction: {expenseItemData.length}
            </div>
            <div className="text-[#959DAD] font-medium">
              Value: {formatRupiah(totalAmount)}
            </div>
            <button
              className="border-2 border-[#d8dae1] text-[#d8dae1] rounded-xl border-dashed px-3 py-2"
              onClick={() => handleCreate()}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
        <div>
          {isLoading ? (
            <ReactLoadingSpin />
          ) : (
            expenseItemData.map((expenseItem) => (
              <TransactionCard
                key={expenseItem._id}
                icon="/images/ic-shop.png"
                title={expenseItem.title}
                date={expenseItem.date}
                amount={`${formatRupiah(expenseItem.amount)}`}
                onClick={() => handleEdit(expenseItem)}
                favoriteBtnAction={() => {}}
                removeBtnAction={() => handleDeleteExpenseItem(expenseItem._id)}
              />
            ))
          )}
        </div>
      </div>
      <ModalLayout
        isOpen={isOpen}
        closeBtnAction={() => setIsOpen(false)}
        title={
          mode === "create" ? "Add Expense Item" : "Edit: " + selectedItem.title
        }
      >
        <ExpenseItemForm
          onSubmit={handleSubmit}
          initialData={selectedItem}
          onCancel={() => setIsOpen(false)}
        />
      </ModalLayout>
    </>
  );
};

export default Finance;
