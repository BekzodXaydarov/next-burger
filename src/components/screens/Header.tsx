import { Svgcomponent } from "@/assets/svgs"

export interface HeaderI {}
const Header:React.FC<HeaderI> = () => {
  return (
    <header className="flex items-center justify-center bg-color1">
        <h1 className="text-white font-semibold flex gap-1 items-center text-[30px] ">YourMeal <Svgcomponent name="logo" /></h1>
    </header>
  )
}

export default Header