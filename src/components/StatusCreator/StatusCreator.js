import "./StatusCreator.css";
import { useState } from "react";
import axios from "axios";
import StatusBar from "./StatusBar";
import { UserInfo } from "../../context/context";
import { useContext } from "react";

export default function StatusCreator() {
  const [status, setStatus] = useState("");
  const [allChecked, setAllChecked] = useState(false);
  const { information } = useContext(UserInfo);
  const [statuses, setStatuses] = useState(information.allStatuses);
  const [hour, setHour] = useState();
  const [day, setDay] = useState();

  var currentdate = new Date();
  var currenthour = currentdate.getHours();
  var datetime =
    "Posted On: " +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getDate() +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    hour +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds() +
    day;

  const addStatus = async () => {
    try {
      // const timetime = () => {
      if (currenthour > 12) {
        setHour(currenthour - 12);
        setDay("p.m.");
      } else {
        setHour(currenthour);
        setDay("a.m.");
        // }
      }
      const newStatus = { status: status, checked: false, date: datetime };
      const updatedStatuses = [newStatus, ...statuses];

      await axios.post("/Auth/add-status", {
        allStatuses: updatedStatuses,
      });

      setStatuses([
        { status: status, checked: false, date: datetime },
        ...statuses,
      ]);
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
    // const updatedStatuseses = [...tempArra];
    // axios.post("/Auth/add-status", {
    //   allStatuses: updatedStatuseses,
    // });
  };

  const onChangeHandler = (e) => {
    setStatus(e.target.value);
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
    const updatedStatuseses = [...tempCheck];

    axios.post("/Auth/add-status", {
      allStatuses: updatedStatuseses,
    });
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
