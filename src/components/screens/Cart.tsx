"use client";

import { Svgcomponent } from "@/assets/svgs";
import { addProduct, MinusQuantity } from "@/store/slices/cart.slice";
import { useCart } from "@/store/useSelector"
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";

export interface CartI { }
const Cart: React.FC<CartI> = ({ }) => {

    const [open, setOpen] = useState(true)

    const cart = useCart()
    const total = cart.reduce((price, item) => price + item.quantity * Number(item.price), 0);
    const dispatch = useDispatch()


    return (
        <aside className="w-[100%] h-full md:max-w-[300px] shadow-xl pl-[10px] pr-[10px] pt-4 pb-4 bg-white rounded-xl  mt-8 md:mt-[120px] " >
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setOpen(cart.length > 0 ? !open : true)}>
                <h3 className="font-nunito font-[600]">Корзина</h3>
                <p className="w-8 h-4 bg-color4 flex items-center justify-center text-[10px] rounded-lg font-nunito">{cart.length}</p>
            </div>
            {
                open ? 
                    cart.length === 0 ? <p className="mt-4 font-nunito">Тут пока пусто {":("}</p> : <div>
                        {
                            cart.map((item, index) => {
                                return <>
                                    <div key={index} className="w-full flex items-center justify-between mt-2">
                                        <div className="flex items-center gap-1">
                                            <Image className="w-[64px] h-[52px]" src={item.image} alt={item.title} />
                                            <div>
                                                <h3 className="font-nunito font-[400] text-[12px]">{item.title}</h3>
                                                <p className="font-nunito font-[400] text-[12px] text-color5">{item.gram}</p>
                                                <p className="font-nunito font-[400] text-[12px]">{item.price}₽</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between pt-[7px] pb-[7px] pl-[8px] pr-[8px] w-[74px] h-[30px] bg-color4 rounded-lg">
                                            <button className="h-full flex items-center justify-center" onClick={() => dispatch(MinusQuantity(item))}>-</button>
                                            <p>{item.quantity}</p>
                                            <button className="h-full flex items-center justify-center" onClick={() => dispatch(addProduct(item))}>+</button>
                                        </div>
                                    </div>
                                    <hr className="mt-3" />
                                </>
                            })
                        }
                        <p className="font-nunito font-[400] text-[16px] flex items-center justify-between w-full mt-4">Итого <span>{total}₽</span></p>
                        <button className="w-full mt-6 bg-color2 h-[40px] rounded-lg text-white font-nunito">Оформить заказ</button>
                        <div className="w-full flex items-center justify-between mt-3">
                            <p className="flex items-center gap-2 font-nunito font-[400] "> <Svgcomponent name="icon7" /> Бесплатная доставка </p>
                            <p className="font-nunito text-color5 cursor-pointer" onClick={() => setOpen(false)}>Свернуть</p>
                        </div>
                    </div>
                 : null
            }
        </aside>
    )
}

export default Cart