import { clearCart } from "@/store/slices/cart.slice";
import { closeModal } from "@/store/slices/modal.slice";
import { useState } from "react";
import toast from "react-hot-toast";
import { PatternFormat } from "react-number-format";
import { useDispatch } from "react-redux";

export interface OrderI { }
const Order: React.FC<OrderI> = ({ }) => {
    const [check, setCheck] = useState("check1")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [error, setError] = useState(false)
    const [place, setPlace] = useState("")
    const [floor, setFloor] = useState("")
    const [phoneHome, setPhoneHome] = useState("")

    const dispatch = useDispatch()

    // 
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (check === "check1") {
            if (name === "") {
                toast.error("nameni kiriting")
                setError(true)
            }
            else if (phone === "" || phone.replace("_", "").length !== 17) {
                toast.error("phone ni to`liq kiriting")
                setError(true)
            } else {
                toast.success("dastavka keti")
                setName("")
                setPhone("")
                dispatch(clearCart({}))
                dispatch(closeModal({}))
            }
        } else {
            if (name === "") {
                toast.error("nameni kiriting")
                setError(true)
            }
            else if (phone === "" || phone.replace("_", "").length !== 17) {
                toast.error("phone ni to`liq kiriting")
                setError(true)
            }
            else if (place === "") {
                toast.error("placeni kiriting")
                setError(true)
            }
            else if (floor === "") {
                toast.error("floorni kiriting")
                setError(true)
            }
            else if (phoneHome === "") {
                toast.error("phone numberni kiriting")
                setError(true)
            }
            else {
                toast.success("dastavka keti")
                setName("")
                setPhone("")
                dispatch(clearCart({}))
                dispatch(closeModal({}))
            }
        }
    }
    return (
        <>
            <form className="flex justify-between flex-col h-full pb-8 md:p-0" onSubmit={handleSubmit}>
                <div>
                    <h1 className="font-nunito text-[28px]">
                        Доставка
                    </h1>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className={`w-full h-[40px] mt-5 border-2 ${error ? name === "" ? "border-red-600" : "border-color4" : "border-color4"} p-3 rounded-md text-color5 font-nunito text-[10px] border-solid outline-none`} />
                    <PatternFormat
                        format="+998 ## ### ## ##"
                        placeholder="Телефон"
                        mask="_"
                        name="Телефон"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full h-[40px] mt-5 border-2 ${error ? phone === "" || phone.replace("_", "").length !== 17 ? "border-red-600 text-red-600" : "border-color4" : "border-color4"} p-3 rounded-md text-color5 font-nunito text-[10px] border-solid outline-none`}
                    />
                    <div className="mt-6">
                        <div className="flex items-center gap-2">
                            <input type="radio" className="w-3 h-3" name="check1" id="check1" checked={check === "check1"} onChange={(e) => setCheck(e.target.name)} /><label htmlFor="check1" className="text-[10px] font-nunito">Самовывоз</label><br />
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="radio" className="w-3 h-3" name="check2" id="check2" checked={check === "check2"} onChange={(e) => setCheck(e.target.name)} /><label htmlFor="check2" className="text-[10px] font-nunito">Доставка</label><br />
                        </div>
                    </div>
                    {
                        check == "check2" ? <div className="mt-6">
                            <input type="text" placeholder="Улица, дом, квартира" className={`w-full h-[40px] mt-5 border-2 ${error ? place === "" ? "border-red-600" : 'border-color4' : "border-color4"} p-3 rounded-md text-color5 font-nunito text-[10px] border-solid outline-none`} value={place} onChange={(e) => setPlace(e.target.value)} />
                            <div className="flex">
                                <input type="text" placeholder="Этаж" className={`w-[50%] h-[40px] mt-5 border-2 ${error ? floor === "" ? "border-red-600" : "border-color4" : "border-color4"} p-3 rounded-md text-color5 font-nunito text-[10px] border-solid outline-none`} value={floor} onChange={(e) => setFloor(e.target.value)} />
                                <PatternFormat
                                    format="+998 ## ### ## ##"
                                    placeholder="Домофон"
                                    mask="_"
                                    name="Телефон"
                                    value={phoneHome}
                                    onChange={(e) => setPhoneHome(e.target.value)}
                                    className={`w-[50%] h-[40px] mt-5 border-2 ${error ? phoneHome === "" ? "border-red-600 text-red-600" : "border-color4" : "border-color4"} p-3 rounded-md text-color5 font-nunito text-[10px] border-solid outline-none`}
                                />
                            </div>
                        </div> : null
                    }
                </div>
                <button className="w-full h-[40px] bg-color2 rounded-lg font-nunito text-[12px] text-white mt-2" type="submit">Оформить</button>
            </form>
        </>
    )
}

export default Order