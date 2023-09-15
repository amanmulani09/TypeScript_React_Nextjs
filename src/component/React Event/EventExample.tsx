
const EventExample = () => {

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
e.preventDefault();
alert('searched!')
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
            console.log(e.target.value)
    }

    const handlePostDelete = (e:React.MouseEvent<HTMLButtonElement>,postId:number)=>{
e && e.preventDefault();
alert(`${postId}post deleted`)
    }
    return (
        <div className="eventExample">
            <form>
                <input type="text" placeholder="search for anything..." onChange={handleChange} />
                <button onClick={handleClick}>Search</button>
            </form>
            <form className="post">
                <h1>Lorem ipsum dolor sit. 1</h1>
       
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam assumenda quisquam quas maiores nisi animi totam, reiciendis debitis velit incidunt? Sit voluptatem facilis cupiditate cum quas voluptas esse aspernatur maiores mollitia maxime! Labore.</p>
            <button>Delete</button>
            </form>
            <form className="post">
                <h1>Lorem ipsum dolor sit amet consectetur. 2</h1>
       
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam assumenda quisquam quas maiores nisi animi totam, reiciendis debitis velit incidunt? Sit voluptatem facilis cupiditate cum quas voluptas esse aspernatur maiores mollitia maxime! Labore.</p>
            <button onClick={(e)=> handlePostDelete(e,2)}>Delete</button>
            </form>

        </div>
    )


}
export default EventExample;