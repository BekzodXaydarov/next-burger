"use client";

import { addProduct, MinusQuantity } from "@/store/slices/cart.slice";
import { useFoods, useModal } from "@/store/useSelector"
import Image from "next/image";
import { useMemo } from "react"
import { useDispatch } from "react-redux";


const InfoFood: React.FC = () => {

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
        <Image src={food?.image || ""} alt={food?.title || ""} className="mt-2" />
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
      <div>
        <div className="flex items-center">
          <button>Добавить</button>
          <div className="flex items-center justify-between pt-[7px] pb-[7px] pl-[8px] pr-[8px] w-[74px] h-[30px] bg-color4 rounded-lg">
            <button className="h-full flex items-center justify-center" onClick={() => dispatch(MinusQuantity(food))}>-</button>
            <p>{food?.quantity}</p>
            <button className="h-full flex items-center justify-center" onClick={() => dispatch(addProduct(food))}>+</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoFood