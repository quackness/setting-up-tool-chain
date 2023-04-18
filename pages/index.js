import React, { useState } from 'react';

const InputElement = () => {
  //step 2 use useState
  // const results = useState("");
  // const inputText = results[0];//data model
  // const setInputText = results[1];//updated value
  //step 2 destructured below
  const [inputText, setInputText] = useState("");
  // step 5 create history, start with state
  const [historyList, setHistoryList] = useState([]);


  return <div>
    <input
      //step 1 input supports onChange 
      //step 3 add setInputText(e.target.value)
      onChange={(e) => {
        setInputText(e.target.value);
        //spread and append with a new entry
        setHistoryList([...historyList, e.target.value])
      }}
      placeholder="Enter some text" /><br />
    {/* step 4 add inputText */}
    {inputText}
    {/* step 5.1output history with map function */}
    <hr /><br />
    <ul>
      {historyList.map(rec => {
        return <div>{rec}</div>;
      })}
    </ul>


  </div>
};

export default InputElement;