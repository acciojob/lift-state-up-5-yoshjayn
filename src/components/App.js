
import React,{useState} from "react";
import './../styles/App.css';
import Parent from "./Parent";
import Child from "./Child";

const App = () => {

  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
        {/* Do not remove the main div */}
        <Parent />
        {/* <Child /> */}
    </div>
  )
}

export default App
