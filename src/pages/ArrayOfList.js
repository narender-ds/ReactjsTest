import React, { useEffect, useState } from "react";

function ArrayOfList() {
  const [Students, setStudents] = useState([]);
  const List = [
    {
      id: 1,
      name: "Narender Singh",
      marks: 50,
    },
    {
      id: 2,
      name: "Shubham Sharma",
      marks: 70,
    },
    {
      id: 3,
      name: "Varun Pareek",
      marks: 55,
    },
    {
      id: 4,
      name: "Shakti Singh",
      marks: 30,
    },
    {
      id: 5,
      name: "Ramesh Chand",
      marks: 10,
    },
    {
      id: 6,
      name: "Ajay Yadav",
      marks: 57,
    },
    {
      id: 7,
      name: "Vishnu ",
      marks: 28,
    },
    {
      id: 8,
      name: "Ayushi Gupta",
      marks: 20,
    },
    {
      id: 9,
      name: "Bill Gates",
      marks: 40,
    },
    {
      id: 10,
      name: "Rossy",
      marks: 41,
    },
  ];

  useEffect(() => {
    List.map(({ marks }) => {
      if (marks < 33) {
        marks = marks + 5;
        // console.log(marks);
      }
      if (Students ) {
        Students.push({ marks });
        // marks=elements
        // console.log(elements);
       
      }

    });
  

  }, [Students]);

  const Ascending = () => {
    const data = [...List].sort((data1, data2) => {
      return data1.marks - data2.marks;
    });
    setStudents(data);
  };
  const Descending = () => {
    const data = [...List].sort((data1, data2) => {
      return data2.marks - data1.marks;
    });
    setStudents(data);
  };

  return (
    <center>
      <div>
        <button onClick={() => setStudents(List)}>Reset</button>
        <button onClick={Ascending}>Ascending</button>
        <button onClick={Descending}>Descending</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Marks</th>
              <th>Percentage</th>
              <th>Status</th>
            </tr>
          </thead>
          {Students.map(({ id, name, marks }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{marks}</td>
                {/* <td>{marks<33 ? marks+5:marks }</td> */}
                <td>{(marks * 100) / 100}</td>
                <td>{marks >= 33 ? "pass" : "Fail"}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </center>
  );
}

export default ArrayOfList;
