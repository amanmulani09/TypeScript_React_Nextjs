import React, { useEffect, useRef } from "react"
const UseRefExample = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const userNameInputRef = useRef<HTMLInputElement>(null);

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
        alert(userNameInputRef.current?.value)
    }

    useEffect(()=>{
            inputRef.current?.focus()
    },[])
    
  return (
    <div>
        <input ref={inputRef} type="text" placeholder="focus here" />
        <input ref={userNameInputRef} type="text" placeholder="username" />
        <button onClick={handleClick}>Send</button>
    </div>
  )
}

export default UseRefExample