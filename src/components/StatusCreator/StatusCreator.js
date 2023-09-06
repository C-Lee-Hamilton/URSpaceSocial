import "./StatusCreator.css";
import { useState } from "react";
import axios from "axios";
import StatusBar from "./StatusBar";

export default function StatusCreator() {
  const [status, setStatus] = useState("");
  const [statuses, setStatuses] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

  const addStatus = async () => {
    try {
      const updatedStatuses = [...statuses, status];

      await axios.post("/Auth/add-status", {
        allStatuses: updatedStatuses,
      });

      // setStatuses(updatedStatus); // Update the interests array in state
      setStatuses([...statuses, { status: status, checked: false }]);
      localStorage.setItem("statuses", JSON.stringify(updatedStatuses)); //store to local
      setStatus(""); // Clear the input field
    } catch (error) {
      console.error("Error adding interest:", error);
    }
  };

  const handleClick = (index) => {
    const tempArra = [...statuses];
    tempArra[index].checked = !tempArra[index].checked;
    setStatuses([...tempArra]);
  };

  const onChangeHandler = (e) => {
    setStatus(e.target.value);
  };
  const onSubmitHandler = () => {
    setStatuses([...statuses, { status: status, checked: false }]);
    setStatus("");
  };

  const selectAll = () => {
    console.log(allChecked);
    const tempArr = statuses.map(({ status, checked }) => ({
      status: status,
      checked: !allChecked,
    }));
    setStatuses(tempArr);
    setAllChecked(!allChecked);
  };

  const deleter = () => {
    const tempCheck = statuses.filter((item) => item.checked === false);
    setStatuses([...tempCheck]);
  };

  return (
    <div className="StatusCreator">
      <input
        type="text"
        value={status}
        onChange={onChangeHandler}
        placeholder="Write your status here..."
      />
      <button onClick={addStatus}>Submit</button>
      <br />
      <button onClick={deleter}>Delete Selected</button>
      <br />
      <button onClick={selectAll}>select all</button>

      {statuses.map((content, index) => (
        <StatusBar
          setStatus={setStatus}
          setStatuses={setStatuses}
          key={index}
          content={content}
          index={index}
          handleClick={handleClick}
          statuses={statuses}
        />
      ))}
    </div>
  );
}
