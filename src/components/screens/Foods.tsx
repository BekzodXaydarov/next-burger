"use client";

import { addProduct } from "@/store/slices/cart.slice";
import { useFoods } from "@/store/useSelector"
import Image from "next/image";
import { useDispatch } from "react-redux";

export interface FoodsI { }
const Foods: React.FC<FoodsI> = ({ }) => {
    const foods = useFoods()

    const dispatch = useDispatch()

    return (
        <section className="mt-8">
            <h2 className="font-nunito font-[600] text-[28px] mb-4 md:text-[40px]">{foods.category[0].toUpperCase() + foods.category.slice(1, foods.category.length)}</h2>
            <div className="flex flex-wrap gap-[10px]">
                {
                    foods.staticData.map((item, index) => {
                        return <div className="w-[145px] md:w-[300px]  bg-white p-1" key={index}>
                            <Image src={item.image} alt={item.title} />
                            <h3 className="font-nunito font-[600] text-[16px] mt-3 md:text-[24px]">{item.price}₽</h3>
                            <h4 className="mt-1 font-nunito text-[12px] font-[400] md:text-[16px]">{item.title}</h4>
                            <p className="mt-4 text-color5 font-nunito font-[600] text-[12px] md:text-[16px]">{item.gram}</p>
                            <button className="mt-[7px] bg-color4 w-full h-[30px] font-nunito font-[400] text-[12px] flex items-center justify-center rounded-lg md:text-[16px] md:h-[40px]" onClick={()=>dispatch(addProduct(item))}>Добавить</button>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default Foods