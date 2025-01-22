"use client";

import { Svgcomponent } from "@/assets/svgs"
import { setCategory } from "@/store/slices/food.slice";
import { useFoods } from "@/store/useSelector"
import { useDispatch } from "react-redux";

interface SlideFoodItemI {
    title: string
    icon: React.ReactNode
    key: string
}

const SlideFoodData: SlideFoodItemI[] = [
    {
        title: "Бургеры",
        icon: <Svgcomponent name="burger2" />,
        key:"бургеры"
    },
    {
        title:'Закуски',
        icon: <Svgcomponent name="burger2" />,
        key:"закуски"
    }
]

export interface SlideFoodsI { }
const SlideFoods: React.FC<SlideFoodsI> = () => {
    const foodCategory = useFoods()?.category
    const dispatch = useDispatch()
    return (
        <section className="pl-16 pr-16 mt-10 pb-10 flex items-center gap-3">
            {
                SlideFoodData.map((item, index) => {
                    return <div onClick={()=>dispatch(setCategory(item.key))} key={index} className={`w-[126px] flex font-nunito cursor-pointer  items-center justify-center pb-[9px] rounded-3xl gap-2 pl-4 pr-4 pt-[9px] ${foodCategory === item.key ? "bg-color1" : "bg-white"}`}> {item.icon} {item.title}</div>
                })
            }
        </section>
    )
}

export default SlideFoods