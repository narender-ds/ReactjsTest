import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [showData, setShowData] = useState("");

  //fectMethod To Fetch Api
  const fetchUsingFetch = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setShowData(data));
  };

  //axios Method To Fetch Api
  const fetchUsingAxios = () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setShowData(response.data));
  };

  //async await Method to Fetch Api
  const fetchUsingAsync = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setShowData(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  //Custom Hook Method to Fetch Api

  
  return (
    <React.Fragment>
      <button onClick={() => fetchUsingAsync()}>Load Api</button>
      <br />
      {showData && (
        <div className="center">
          <table border={1}>
            <thead>
              <tbody>
                <tr>
                  <th>id</th>
                  <th>name</th>
                </tr>
                {showData?.map((item) => {
                  return (
                    <>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </thead>
          </table>
        </div>
      )}
    </React.Fragment>
  );
};

export default FetchApi;
