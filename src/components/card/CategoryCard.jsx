import propsTypes from "prop-types";

const CategoryCard = ({
  icon,
  title,
  walletName,
  onClick,
  removeBtnAction,
}) => (
  <div className="flex items-center justify-between">
    <div
      className="flex-1 flex items-center space-x-4 cursor-pointer"
      onClick={onClick}
    >
      <img src={icon} alt="Icon" className="h-[48px] rounded-xl" />
      <div>
        <div className="text-lg font-bold">{title}</div>
        <div>{walletName}</div>
      </div>
    </div>
    <button
      className="bg-[#F4F7FC] text-[#A4AABA] rounded-xl px-3 py-2"
      onClick={removeBtnAction}
    >
      <i className="fa-solid fa-xmark"></i>
    </button>
  </div>
);

CategoryCard.propTypes = {
  icon: propsTypes.string,
  title: propsTypes.string,
  walletName: propsTypes.string,
  onClick: propsTypes.func,
  removeBtnAction: propsTypes.func,
};

export default CategoryCard;
