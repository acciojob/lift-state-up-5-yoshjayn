import React,{useState} from "react"
import Child from "./Child"

const Parent = () =>{
      const [isLoggedIn, setIsLoggedIn] = useState(false)

    return(
        <div>
<h1>Parent Component</h1>
{/* {if(isLoggedIn)? <Child /> : <p>You are logged in!</p>} */}
{/* You're using an if statement in the middle of JSX, which isn't valid.  */}
        {isLoggedIn? <p>You are logged in!</p> : <Child setIsLoggedIn={setIsLoggedIn}/>}
        </div>
    )
}

export default Parent