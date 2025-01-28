"use client";

import styles from "@/assets/styles/ModalContainer.module.scss"
import { Svgcomponent } from "@/assets/svgs";
import { closeModal } from "@/store/slices/modal.slice"
import { useModal } from "@/store/useSelector";
import { ModalsData } from "@/utils/data";
import { useMemo } from "react";
import { useDispatch } from "react-redux"

export interface ModalContainerI { }
const ModalContainer: React.FC<ModalContainerI> = ({ }) => {
    const dispatch = useDispatch()
    const modal = useModal()

    const modalData = useMemo(() => {
        return ModalsData.find((item) => item.name === modal.modalName)
    }, [modal.modalName])

    return (
        <article className={`${styles.container} ${modal.isOpen ? styles.openModal : styles.closeModal}`} onClick={() => {
            if (modal.isOpen) {
                dispatch(closeModal({}))
            }
        }}>
            <section className="w-full bg-white h-full sm:w-[524px] sm:h-[324px] md:w-[40%] md:h-auto sm:rounded-[24px] pt-8 pl-2 pb-8 pr-2 relative" onClick={(e) => e.stopPropagation()}>
                <button className="absolute top-3 right-3" onClick={()=>dispatch(closeModal({}))}> <Svgcomponent name="close" /> </button>
                {modalData?.Component ? (
                    <modalData.Component  />
                ) : (
                    <span>Modal is not defined</span>
                )}
            </section>
        </article>
    )
}

export default ModalContainer