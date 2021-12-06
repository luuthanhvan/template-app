const ConfirmModal = ({
  title,
  content,
  modelName,
  primaryBtnLabel,
  secondaryBtnLabel,
  onClickConfirmBtn,
}) => {
  return (
    <div className="modal fade" tabindex="-1" id={modelName}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>{content}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              {secondaryBtnLabel}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={onClickConfirmBtn}
            >
              {primaryBtnLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
