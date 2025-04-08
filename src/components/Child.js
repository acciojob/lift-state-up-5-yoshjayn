import React from "react"

function Child({setIsLoggedIn}){
    return(
        <div>
Username: <input type='text'></input>
Password : <input type='password'></input>
{/* <button onClick={setIsLoggedIn(true)}>login</button> */}
{/* You're calling setIsLoggedIn(true) immediately when the component renders, instead of passing a function. */}
{/* This will cause an infinite re-render loop because setIsLoggedIn triggers a state update, which re-renders the component, which calls setIsLoggedIn again, and so on. */}
<button onClick={()=>setIsLoggedIn(true)}>login</button>
        </div>
    )
}
 export default Child