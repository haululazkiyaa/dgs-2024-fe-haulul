import ModalLayout from "../../layout/ModalLayout";
import ReactLoadingSpin from "../loading/ReactLoadingSpin";
import SidebarTitle from "./SidebarTitle";
import WalletCard from "../card/WalletCard";
import WalletForm from "../form/WalletForm";
import { formatRupiah } from "../../utils/currencyFormatter";
import useModal from "../../hooks/useModal";
import useWallet from "../../hooks/useWallet";

const SidebarWallet = () => {
  const {
    isLoading: isLoadingWallet,
    walletData,
    handleDeleteWallet,
    handleAddWallet,
    handleUpdateWallet,
  } = useWallet();

  const { isOpen, setIsOpen, mode, selectedItem, handleCreate, handleEdit } =
    useModal();

  const handleSubmit = (data, successAction) => {
    if (mode === "create") {
      handleAddWallet(data, successAction);
    } else {
      handleUpdateWallet(selectedItem._id, data, successAction);
    }
  };

  return (
    <>
      <SidebarTitle title="Wallets" addBtnAction={() => handleCreate()} />
      <div className="space-y-6">
        {isLoadingWallet ? (
          <ReactLoadingSpin />
        ) : (
          walletData.map((wallet) => (
            <WalletCard
              key={wallet._id}
              icon="/images/ic-credit.png"
              title={wallet.name}
              amount={`${formatRupiah(wallet.amount)}`}
              onClick={() => handleEdit(wallet)}
              removeBtnAction={() => handleDeleteWallet(wallet._id)}
            />
          ))
        )}
      </div>
      <ModalLayout
        isOpen={isOpen}
        closeBtnAction={() => setIsOpen(false)}
        title={mode === "create" ? "Add Wallet" : "Edit: " + selectedItem.name}
      >
        <WalletForm
          onSubmit={handleSubmit}
          initialData={selectedItem}
          onCancel={() => setIsOpen(false)}
        />
      </ModalLayout>
    </>
  );
};

export default SidebarWallet;
