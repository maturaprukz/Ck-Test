import React, { useState } from "react";
import "./Datepicker.css";

function Datepicker() {
  const [date, setDate] = useState("");
  console.log("Date", date);
  return (
    <>
      <div className="date-container">
        <input className="date-input" placeholder="Selected Date" type="date" onChange={(e) => setDate(e.target.value)} />
      </div>
    </>
  );
}
export default Datepicker;
