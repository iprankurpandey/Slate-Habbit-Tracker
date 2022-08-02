import "./Spinner.css";
function Spinner() {
  return (
    <div>
      <div className="data-loader">
        <strong> Loading.... </strong>
        <hr />
        <div class="loader"></div>
      </div>
    </div>
  );
}

export default Spinner;
