import Swal from "sweetalert2";

const useSweetAlert = () => {
  const handleConfirmationAlert = (
    title,
    description,
    confirmBtnLabel,
    confirmedTitle,
    confirmedDescription,
    executedAction
  ) => {
    Swal.fire({
      title: title,
      text: description,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: confirmBtnLabel,
    }).then((result) => {
      if (result.isConfirmed) {
        executedAction();
        Swal.fire({
          title: confirmedTitle,
          text: confirmedDescription,
          icon: "success",
        });
      }
    });
  };

  const handleResponseAlert = (icon, title) => {
    Swal.fire({
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return { handleConfirmationAlert, handleResponseAlert };
};

export default useSweetAlert;
