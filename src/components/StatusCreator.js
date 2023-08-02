import "./StatusCreator.css";
import { useState } from "react";

import StatusBar from "./StatusBar";

export default function App() {
  const [status, setStatus] = useState("");
  const [statuses, setStatuses] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

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
      <button onClick={onSubmitHandler}>Submit</button>
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
