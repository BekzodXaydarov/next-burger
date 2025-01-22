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
        icon: <Svgcomponent name="icon1" />,
        key:"закуски"
    },
    {
        title:"Хот-доги",
        icon: <Svgcomponent name="icon2" />,
        key:"хот-доги"
    },
    {
        title:"Комбо",
        icon: <Svgcomponent name="icon3" />,
        key:"комбо"
    },
    {
        title:"Шаурма",
        icon: <Svgcomponent name="icon4" />,
        key:"шаурма"
    },
    {
        title:"Пицца",
        icon: <Svgcomponent name="icon5" />,
        key:"пицца"
    },
    {
        title:"Вок",
        icon: <Svgcomponent name="icon6" />,
        key:"вок"
    },
]

export interface SlideFoodsI { }
const SlideFoods: React.FC<SlideFoodsI> = () => {
    const foodCategory = useFoods()?.category
    const dispatch = useDispatch()
    return (
        <section className="pt-6 pl-2  md:pl-16 md:pr-16 mt-10 pb-10 flex items-center gap-[24px] overflow-x-auto w-auto">
            {
                SlideFoodData.map((item, index) => {
                    return <div onClick={()=>dispatch(setCategory(item.key))} key={index} className={`w-auto flex font-nunito cursor-pointer  items-center justify-center pb-[9px] rounded-3xl gap-2 pl-4 pr-4 pt-[9px] ${foodCategory === item.key ? "bg-color1" : "bg-white"}`}> {item.icon} {item.title}</div>
                })
            }
        </section>
    )
}

export default SlideFoods