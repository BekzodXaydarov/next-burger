import { Svgcomponent } from "@/assets/svgs"
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

export interface FooterI { }
const Footer: React.FC<FooterI> = ({ }) => {
    return (
        <footer className="w-full h-[400px] flex flex-col justify-between pt-6 pl-2 pb-6 md:pl-16 md:pr-16">
            <h6 className="text-[40px] font-nunito font-[700] text-color2 flex items-center gap-3">YourMeal <Svgcomponent name="logo2" /></h6>
            <div className="mt-6 md:flex  gap-[177px]">
                <div>
                    <p className="text-lg font-nunito font-[400]">Номер для заказа</p>
                    <p className="flex items-center gap-1"> <Svgcomponent name="call" /> +7(930)833-38-11</p>
                </div>
                <div className="mt-6 md:mt-0">
                    <p className="text-lg font-nunito font-[400]">Мы в соцсетях</p>
                    <div className="flex items-center gap-1 md:gap-4">
                    <FaInstagram className="w-9 h-9 bg-color2 text-white rounded-[50%] p-2 cursor-pointer" />
                    <FaTelegramPlane className="w-9 h-9 bg-color2 text-white rounded-[50%] p-2 cursor-pointer" />
                    </div>
                </div>
            </div>
            <h6 className="font-nunito mt-8">
                © YouMeal, 2022 <br />
                Design: Anastasia Ilina
            </h6>
        </footer>
    )
}

export default Footer