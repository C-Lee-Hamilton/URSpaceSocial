import { useState } from "react";

export default function StatusBar(props) {
  const [toggleList, setToggleList] = useState(false);
  const [toggleEditButton, setToggleEditButton] = useState(true);

  const { index, handleClick, content, setStatuses, statuses } = props;
  const status = content.status;
  const checked = content.checked;

  const onSubmitHandler = (e) => {
    const tempArr = [...statuses];
    tempArr[index].status = e.target.value;
    setStatuses([...tempArr]);
    console.log(status);
  };

  const editAndSaveFunc = () => {
    setToggleList(!toggleList);
    setToggleEditButton(!toggleEditButton);
    console.log(status);
  };

  return (
    <div>
      <div key={index}>
        <input
          className="checkBox"
          onChange={() => {
            handleClick(index);
          }}
          key={index}
          checked={checked}
          type="checkbox"
        />
        {toggleEditButton ? (
          <div className="previousStatus">{status}</div>
        ) : (
          <input
            className="previousStatus"
            type="text"
            value={status}
            placeholder={status}
            onInput={onSubmitHandler}
          />
        )}

        {toggleEditButton && (
          <button className="editAndSaveButtons" onClick={editAndSaveFunc}>
            edit
          </button>
        )}
        {toggleList && (
          <button className="editAndSaveButtons" onClick={editAndSaveFunc}>
            save
          </button>
        )}
      </div>
    </div>
  );
}
