import { useState } from "react";

function App() {

  const [successMessage, setSuccessMessage] = useState(false);
  let sentence = 'Si vous reussissez ce defi, vous savez bien taper.';
  let checkValid = (value) => {
    let count = 0;
    let temp = value;
    value = value.split('');
    if (value.length === 0) {
      let changeColor = document.getElementById('sentence-used');
      changeColor.style.color = 'black';
      setSuccessMessage(false);
    }
    if (value.length !== 0) {
      value.forEach((element, index) => {
        if (element === sentence[index]) {
          count++;
        } 
      });
    }
    let changeColor = document.getElementById('sentence-used');
    (value.length === count) && (count !== 0) ? (changeColor.style.color = 'green') : (changeColor.style.color = 'red');
    if ((sentence.length === temp.length) && (changeColor.style.color === 'green')) {
      setSuccessMessage(true);
    } else {
      setSuccessMessage(false);
    }
  }
  return (
    <div>
      <span className="block font-bold text-lg text-center mt-24">TYPING CHALLENGE</span>
      <div className="border border-s-gray-300 px py-10 m-auto mt-10 w-6/12">
        <span id="sentence-used" className='block text-center '>{sentence}</span>
        <input type="text" placeholder="Type here" className=" p-3 ml-[275px] mt-10 border border-amber-800" onChange={(e) => checkValid(e.target.value)}></input>
      </div>
      {successMessage && <span className="block text-green-500 font-bold text-center mt-10">Success! You have completed the challenge.</span> }
    </div>
  );
}

export default App;
