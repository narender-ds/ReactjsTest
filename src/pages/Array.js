import { useState } from "react";

const Array = () => {
  const [toggle, setToggle] = useState(false);
  const [arrdata, setArrData] = useState([
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
  ]);
  const ToggleButton = (data, flag) => {
    const index = arrdata.findIndex((el) => el.id === data);
    if (flag === "Show") {
      if (index !== -1) {
        const updatedItem = { ...arrdata[index], active: true };
        const updatedArray = [...arrdata];
        updatedArray[index] = updatedItem;
        setArrData(updatedArray);
      }
    } else {
      const updatedItem = { ...arrdata[index], active: false };
        const updatedArray = [...arrdata];
        updatedArray[index] = updatedItem;
        setArrData(updatedArray);
         }
    setToggle(!toggle);
  };

  const Delete = (id) => {
    const del = arrdata.filter((val, key) => {
      return key !== id;
    });
    setArrData(del);
  };

  return (
    <>
      {arrdata.map((item, index) => (
        <div key={item.id}>
          {item.active && (
            <h4>
              {item.id}
              {item.name}
              <button id="btn" onClick={() => Delete(index)}>
                {"Delete"}
              </button>
            </h4>
          )}

          <button
            onClick={() => ToggleButton(item.id, item.active ? "Hide" : "Show")}
          >
            {item.active ? "Hide" : "Show"}
          </button>
        </div>
      ))}
    </>
  );
};

export default Array;
