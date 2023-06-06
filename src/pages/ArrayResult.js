import React from 'react'

const ArrayResult = () => {
const array = [2,5,8,6];
const target = 10;

function showData(arr,target){
for (let i = 0; i < 4; i++) {
console.log(i,"value of i")
 const num1 = arr[i];

 console.log(num1,"value of num 1")
for (let j= 1; j<4; j++){
const num2 = arr[j]
 console.log(num2,"value of num 2")
if (num1 +num2 === target) {
  return [num1 ,num2];
}
}

return "no condition found";
}

}

  return (
    <div>

        <button onClick={()=>showData(array,target)}>press here for Result</button>
        
    </div>
  )
}

export default ArrayResult