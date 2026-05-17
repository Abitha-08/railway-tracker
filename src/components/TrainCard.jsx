function TrainCard({ train }) {

  const getStatusColor = () => {
    if (train.status === "On Time") {
      return "lime";
    } else if (train.status === "Delayed") {
      return "red";
    } else {
      return "yellow";
    }
  };

  return (
    <div className="card">

      <h2>{train.name}</h2>

      <p>From: {train.from}</p>

      <p>To: {train.to}</p>

      <p>Current Location: {train.location}</p>

      <p>Platform: {train.platform}</p>

      <p>Arrival Time: {train.arrival}</p>

      <p>Delay: {train.delay}</p>
      <div className="status-container">

  <span
    className="status-dot"
    style={{ backgroundColor: getStatusColor() }}
  ></span>

  <p style={{ color: getStatusColor() }}>
    Status: {train.status}
  </p>

</div>

      

      <button
        className="train-btn"
        onClick={() => alert(`Train: ${train.name}`)}
      >
        View Details
      </button>

    </div>
  );
}

export default TrainCard;