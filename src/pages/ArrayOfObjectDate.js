import React, { useEffect, useState } from "react";

function ArrayOfList() {
  const [Students, setStudents] = useState([]);
  const List = [
    {
      id: 1,
      title: "Narender Singh",
      upvotes: 50,
      date: "2022-09-21",
    },
    {
      id: 2,
      title: "Shubham Sharma",
      upvotes: 70,
      date: "2022-10-15",
    },
    {
      id: 3,
      title: "Varun Pareek",
      upvotes: 55,
      date: "2018-10-10",
    },
    {
      id: 4,
      title: "Shakti Singh",
      upvotes: 30,
      date: "2017-09-19",
    },
    {
      id: 5,
      title: "Ramesh Chand",
      upvotes: 10,
      date: "2020-09-11",
    },
    {
      id: 6,
      title: "Ajay Yadav",
      upvotes: 57,
      date: "2023-09-01",
    },
    {
      id: 7,
      title: "Vishnu ",
      upvotes: 28,
      date: "2019-11-18",
    },
    {
      id: 8,
      title: "Ayushi Gupta",
      upvotes: 20,
      date: "2022-08-2",
    },
    {
      id: 9,
      title: "Bill Gates",
      upvotes: 40,
      date: "2020-08-11",
    },
    {
      id: 10,
      title: "Rossy",
      upvotes: 41,
      date: "2021-06-01",
    },
  ];

  const Ascending = () => {
    const data = [...List].sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    setStudents(data);
  };
  const Descending = () => {
    const data = [...List].sort((data1, data2) => {
      return data2.upvotes - data1.upvotes;
    });

    setStudents(data);
  };
  useEffect(() => {
    Descending();
  }, []);
  return (
    <center>
      <div>
        <button onClick={() => setStudents(List)}>Reset</button>
        <button onClick={Ascending}>MostRecent</button>
        <button onClick={Descending}>Mostupvotes</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Upvotes</th>
              <th>Date</th>
            </tr>
          </thead>
          {Students.map(({ id, title, upvotes, date }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{upvotes}</td>
                <td>{date}</td>

                {/* <td>{upvotes<33 ? upvotes+5:upvotes }</td> */}
                {/* <td>{(upvotes * 100) / 100}</td> */}
                {/* <td>{upvotes >= 33 ? "pass" : "Fail"}</td> */}
              </tr>
            );
          })}
        </table>
      </div>
    </center>
  );
}

export default ArrayOfList;
