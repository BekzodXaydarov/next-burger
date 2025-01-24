"use client";

import { useFoods, useModal } from "@/store/useSelector"
import { useMemo } from "react"


const InfoFood: React.FC = () => {

  const foods = useFoods()
  const modal = useModal()
  
  const food = useMemo(()=>{
   return foods.staticData.find((item)=>item.id === modal.adition?.id)
  },[modal.isOpen])
  return (
    <>
    <h2 className="font-nunito font-[600] text-[28px]">{food?.title}</h2>
    </>
  )
}

export default InfoFood