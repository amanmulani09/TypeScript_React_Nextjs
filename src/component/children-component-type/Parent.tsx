
const Parent = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <h1>this is the parent</h1>
        {children}
    </div>
  )
}

export default Parent