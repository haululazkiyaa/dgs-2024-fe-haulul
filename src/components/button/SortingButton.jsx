import propsTypes from "prop-types";

const SortingButton = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`${
        isActive
          ? "bg-[#D2E6FC] text-[#60ABFE]"
          : "border-2 border-[#959DAD] text-[#959DAD]"
      } hover:border-none hover:bg-[#D2E6FC] hover:text-[#60ABFE] px-2 py-3 rounded-xl w-full font-medium`}
      onClick={onClick}
    >
      {label} <i className="fa-solid fa-sort ml-1"></i>
    </button>
  );
};

SortingButton.propTypes = {
  label: propsTypes.string,
  isActive: propsTypes.bool,
  onClick: propsTypes.func,
};

export default SortingButton;
