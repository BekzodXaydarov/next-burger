"use client";

import { addProduct } from "@/store/slices/cart.slice";
import { openModal } from "@/store/slices/modal.slice";
import { useFoods } from "@/store/useSelector"
import Image from "next/image";
import { useMemo } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export interface FoodsI { }
const Foods: React.FC<FoodsI> = ({ }) => {
    const food = useFoods()
    const dispatch = useDispatch()

    const foods = useMemo(() => {
        return food.staticData.filter((item) => item.category === food.category)
    }, [food.category])

    return (
        <section className="mt-8">
            <h2 className="font-nunito font-[600] text-[28px] mb-4 md:text-[40px]">{food.category[0].toUpperCase() + food.category.slice(1, food.category.length)}</h2>
            <div className="flex flex-wrap gap-[10px]">
                {
                    foods.length > 0 ?
                        foods.map((item, index) => {
                            return <div className="w-full md:w-[300px]  bg-white p-1" key={index}>
                                <div onClick={()=>dispatch(openModal({modalName:"info",adition:{id:item.id}}))} className="cursor-pointer">
                                    <Image src={item.image} alt={item.title} className="w-full" />
                                    <h3 className="font-nunito font-[600] text-[16px] mt-3 md:text-[24px]">{item.price}₽</h3>
                                    <h4 className="mt-1 font-nunito text-[12px] font-[400] md:text-[16px]">{item.title}</h4>
                                    <p className="mt-4 text-color5 font-nunito font-[600] text-[12px] md:text-[16px]">{item.gram}</p>
                                </div>
                                <button className="mt-[7px] bg-color4 w-full h-[30px] font-nunito font-[400] text-[12px] flex items-center justify-center rounded-lg md:text-[16px] md:h-[40px]" onClick={() => {
                                    dispatch(addProduct(item))
                                    toast.success("food cartga qo`shildi")
                                }}>Добавить</button>
                            </div>
                        })
                        : null
                }
            </div>
        </section>
    )
}

export default Foods