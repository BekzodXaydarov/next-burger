"use client";

import { addProduct, MinusQuantity } from "@/store/slices/cart.slice";
import { closeModal } from "@/store/slices/modal.slice";
import { useFoods, useModal } from "@/store/useSelector"
import Image from "next/image";
import { useMemo, useState } from "react"
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";


const InfoFood: React.FC = () => {

  const [count, setCount] = useState(1)

  const foods = useFoods()
  const modal = useModal()
  const dispatch = useDispatch()

  const food = useMemo(() => {
    return foods.staticData.find((item) => item.id === modal.adition?.id)
  }, [modal.isOpen])

  return (
    <>
      <div>
        <h2 className="font-nunito font-[600] text-[28px]">{food?.title}</h2>
        <div className="sm:flex sm:gap-2">
          <Image src={food?.image || ""} alt={food?.title || ""} className="sm:w-[226px] sm:h-[180px]" />
          <div className="sm:w-[258px]">
            <p className="mt-4 font-nunito text-[12px]">{food?.description}</p>
            <ul className="mt-3">
              <li className="font-nunito text-[10px] font-[600]">Состав:</li>
              {
                food?.foodDetails.map((item, index) => {
                  return <li key={index} className="font-nunito text-[10px] font-[600]">{item}</li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="sm:flex items-center justify-between">
        <div className="flex items-center gap-2 mt-2">
          <button className="w-[90%] sm:w-[300px] bg-color2 h-[40px] text-white font-nunito rounded-lg" onClick={() => {
            dispatch(addProduct({ ...food, quantity: count }))
            dispatch(closeModal({}))
            toast.success("food cartga qo`shildi")
          }}>Добавить</button>
          <div className="flex items-center justify-between pt-[7px] pb-[7px] pl-[8px] pr-[8px] w-[74px] h-[40px] bg-color4 rounded-lg">
            <button className="h-full flex items-center justify-center" onClick={() => setCount(count - 1)}>-</button>
            <p>{count}</p>
            <button className="h-full flex items-center justify-center" onClick={() => setCount(count + 1)}>+</button>
          </div>
        </div>
        <p className="text-right font-nunito font-bold mt-2">{food?.price}₽</p>
      </div>
    </>
  )
}

export default InfoFood