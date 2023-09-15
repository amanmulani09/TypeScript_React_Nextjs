import {useState} from 'react'

type UserType={
    sessionId:number,
    name:string
}

const UseStateExample = () => {
    const [userName,setUserName] = useState("");
    const [user,setUser] = useState<UserType | null>(null)
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserName(e.target.value);
    }
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e && e.preventDefault();
        setUser({
            name:userName,
            sessionId:Math.random()*1211
        });
        // alert(user)
    }
  return (
    <div>
        {user ? (<h1>{user.name}</h1>): (<form >
            <input type="text" name="login" placeholder='please enter the userName' onChange={handleChange}/>
            <button onClick={handleClick}>Login</button>
        </form>)}
        {/* {user.name} cant use directly use coz it can be possibly null */}
        {user?.name}
    </div>
  )
}

export default UseStateExample