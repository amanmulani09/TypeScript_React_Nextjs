
type ShapeType = "cube" | "square" | "rectangle" | "triangle"
type TwoDShapeType = Exclude<ShapeType, "cube">

//exclude Object is used to creating a type via excluting an type of existing type

type ThemeType = "dark" | "light"
type ColorType = "red" | "blue" | "yellow"

type ItemProps = {
    // color: `${ThemeType}-${ColorType}`
    color: Exclude<`${ThemeType}-${ColorType}`,"dark-yellow">
}

//to combine the existing two types 
const Shape = (props:ItemProps) => {
    const Shape:ShapeType = "cube";
    const twoDShape:TwoDShapeType = "square";

  return (
    <div>Shape</div>
  )
}

export default Shape