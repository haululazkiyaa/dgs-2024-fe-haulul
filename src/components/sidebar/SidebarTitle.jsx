import propsTypes from "prop-types";

const SidebarTitle = ({ title, addBtnAction }) => {
  return (
    <div className="font-bold flex items-center justify-between">
      <span className="text-xl">{title}</span>
      <button
        className="border-2 border-[#d8dae1] text-[#d8dae1] rounded-xl border-dashed px-3 py-2"
        onClick={addBtnAction}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

SidebarTitle.propTypes = {
  title: propsTypes.string,
  addBtnAction: propsTypes.func,
};

export default SidebarTitle;
