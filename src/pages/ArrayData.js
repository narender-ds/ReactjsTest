import React from "react";
function fun() {
  fetch("https://api.greenmotion.com/api/terms-and-conditions")
    .then((response) => response.json())
    .then((data) => {
      // create an array to store the converted data
      console.log("data", data);
      const country_idData = [];
      const convertedData = [{}];
      // loop through the "result" array in the API response
      data.data.forEach((condition) => {
        // create an object with the desired structure
        const convertedCondition = {
          conditions: [condition.conditions,convertedData]
        //   country_id: condition.country_id.toString(),
        };
        // add the converted object to the array
        convertedData.push(convertedCondition);
      });
      // create a new object with the converted data array
      const result = convertedData;

      //   result.map((item) => {
      //     console.log("item.conditions.country_id",item.country_id);
      //   });
      // use the converted data as needed
      console.log("result", result);
      data.data.map((item, index) => {
        country_idData.push(item.country_id);
      });
    
    })
    .catch((error) => console.error(error));
}

let res = fun();

const ArrayData = () => {
  return <div>ArrayData</div>;
};

export default ArrayData;
