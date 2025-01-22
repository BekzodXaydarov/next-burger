import { Svgcomponent } from "@/assets/svgs"
import styles from "@/assets/styles/Hero.module.scss"

export interface HeroI {}
const Hero: React.FC<HeroI> = ({}) => {
  return (
    <section className={`bg-color1 w-full h-[500px] rounded-b-[20%] pl-3 pr-3 pt-6 pb-8 flex items-center justify-between flex-col-reverse ${styles.hero} md:flex-row md:pl-32 md:pr-32  lg:pl-[200px] lg:pr-[200px]`}>
        <Svgcomponent name="burger"  />
        <div className="w-full md:w-auto">
            <h1 className="text-center text-[30px] md:text-[36px] md:font-[800] w-full font-nunito font-[700] text-white md:text-left ">
            Только самые <p className="text-color2">сочные бургеры!</p>
            </h1>
            <p className="text-white text-center mt-4 font-nunito font-[600] md:text-left">Бесплатная доставка от 599₽</p>
        </div>
    </section>
  )
}

export default Hero