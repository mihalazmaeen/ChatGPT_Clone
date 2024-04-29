import { useState,useEffect } from "react";

const App = () => {

  const [message,setMessage]=useState(null);
  const [value,setValue]=useState(null);
const getMessages = async()=>{
  const options = {
    method: "POST",
    body: JSON.stringify({
      message:value
    }),
    headers:{
      "Content-Type": "application/json"
    }
  }
  try {
    const response= await fetch('http://localhost:8000/completions',options);
    const data=await response.json();
    setMessage(data.choices[0].message)
    console.log(data);

  }catch(error){
    console.error(error);
  }
}

  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history">
          <li>New Chat</li>
        </ul>
        <nav>
          <p>Made by Mihal</p>
        </nav>
      </section>
      <section className="main">
        <h1> VangariGPT</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={(e)=>setValue(e.target.value)}/>
            <div id="submit" onClick={getMessages}>⇒</div>
          </div>
          <p>
            VangariGPT is a clone version of ChatGPT. Version "Almost Vanga".
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
