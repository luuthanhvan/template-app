const ToastMessage = ({ message, success, error, warning }) => {
  return (
    <div
      className={
        success
          ? "toast-container toast-success"
          : error
          ? "toast-container toast-error"
          : warning
          ? "toast-container toast-warning"
          : "toast-container"
      }
    >
      <p>{message}</p>
    </div>
  );
};

export default ToastMessage;
