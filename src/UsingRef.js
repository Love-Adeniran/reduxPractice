import React, { useRef } from "react";

export default()=>{
    const helloDiv = useRef()
    const firstname = useRef()
    return(
        <>
        <div ref={helloDiv}>
            hello
        </div>
        <input type="text" ref={firstname} />
        </>
    )
}