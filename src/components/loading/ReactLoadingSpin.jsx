import ReactLoading from "react-loading";

const ReactLoadingSpin = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <ReactLoading type="spin" color="#FF904D" height="54px" width="54px" />
      <span className="text-[#7F7F7F] italic">Loading...</span>
    </div>
  );
};

export default ReactLoadingSpin;
