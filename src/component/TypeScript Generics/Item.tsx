type ItemsProps<T> = {
    id:number,
    title:string,
    extra:T[]
}
const Item = (props:ItemsProps<object>) => {
  return (
    <div>
        <h2>{props.title}</h2>
    </div>
  )
}

export default Item