import SidebarCategory from "./SidebarCategory";
import SidebarWallet from "./SidebarWallet";

const Sidebar = () => {
  return (
    <>
      <div className="bg-[#F9FAFC] py-12 w-1/3 shadow-md space-y-8">
        <div className="px-8 space-y-8">
          <div className="flex items-center justify-end space-x-6">
            <i className="fa-regular fa-bell text-[#0D0D0D]"></i>
            <img
              src="/images/avatar.png"
              className="h-12 w-12 rounded-lg ml-4"
            />
          </div>
          <SidebarWallet />
        </div>
        <div className="border border-[#f0f0f0]"></div>
        <div className="px-8 space-y-8">
          <SidebarCategory />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
