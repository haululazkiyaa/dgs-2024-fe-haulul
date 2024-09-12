import propsTypes from "prop-types";

const TransactionCard = ({
  icon,
  title,
  date,
  amount,
  onClick,
  favoriteBtnAction,
  removeBtnAction,
}) => {
  return (
    <div className="flex justify-between items-center bg-white hover:bg-[#f8f8f8] rounded-xl shadow-md mb-4">
      <div
        className="flex-1 flex items-center cursor-pointer p-6"
        onClick={onClick}
      >
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center`}
        >
          <img src={icon} alt="Icon" className="h-[36px] rounded-lg" />
        </div>
        <div className="ml-4">
          <div className="text-lg font-bold">{title}</div>
          <div className="text-gray-500">{date}</div>
        </div>
        <div className="text-lg font-bold flex-1 text-right">{amount}</div>
      </div>
      <div className="flex items-center justify-center space-x-4 p-6">
        <button
          className="bg-[#DDECFF] text-[#2B8FFF] rounded-xl px-3 py-2"
          onClick={favoriteBtnAction}
        >
          <i className="fa-regular fa-bookmark"></i>
        </button>
        <button
          className="bg-[#F4F7FC] text-[#A4AABA] rounded-xl px-3 py-2"
          onClick={removeBtnAction}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

TransactionCard.propTypes = {
  icon: propsTypes.string,
  title: propsTypes.string,
  date: propsTypes.string,
  amount: propsTypes.string,
  onClick: propsTypes.func,
  favoriteBtnAction: propsTypes.func,
  removeBtnAction: propsTypes.func,
};

export default TransactionCard;
