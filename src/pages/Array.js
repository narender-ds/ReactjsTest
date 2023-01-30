import { useState } from "react";

const Array = () => {
  const [visible, setVisible] = useState(false);
  const [toggle,setToggle]=useState(false);
  const [arrdata, setArrData] = useState([
    { name: "John Doe", id: 1, show: true },
    { name: "Jane Doe", id: 2, show: true },
    { name: "Billy Doe", id: 3, show: true },
  ]);
  const ToggleButton = (data) => {
    setVisible((item) => ({
      ...item,
      [data]: !item[data],
    }));
  setToggle(true)};

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
          {visible[item.id] && (
            <h4>
              {item.id}
              {item.name}
              <button id="btn" onClick={() => Delete(index)}>
                {"Delete"}
              </button>
            </h4>
          )}
          {item.name && (
            <button onClick={() => ToggleButton(item.id)}>
              {toggle? "Show" : "Hide"}
            </button>
          )}
        </div>
      ))}
    </>
  );
};

export default Array;
