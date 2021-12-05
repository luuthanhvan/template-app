const Spinner = () => {
  return (
    <div className="text-center spinner-container">
      <div className="spinner-border text-primary spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;