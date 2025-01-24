import { FoodI } from "@/store/slices/food.slice";
import Burger from "@/assets/images/burger.png"
import HotDog from '@/assets/images/hot-dog.png'
import InfoFood from '@/components/modals/InfoFood'

// category: бургеры закуски хот-доги комбо шаурма пицца вок

export const FoodsData: FoodI[] = [
    {
        id: 1,
        title: "Мясная бомба",
        price: 689,
        image: Burger,
        gram: "520г",
        category: "бургеры"
    },
    {
        id: 2,
        title: "Мясная бомба",
        price: 350,
        image: Burger,
        gram: "520г",
        category: "бургеры"
    },
    {
        id: 3,
        title: "Мясная бомба",
        price: 420,
        image: Burger,
        gram: "520г",
        category: "бургеры"
    },
    {
        id: 4,
        title: "Мясная бомба",
        price: 520,
        image: Burger,
        gram: "520г",
        category: "бургеры"
    },
    {
        id: 5,
        title: "Мясная бомба",
        price: 640,
        image: Burger,
        gram: "640г",
        category: "бургеры"
    },
    {
        id: 6,
        title: "Мясная бомба",
        price: 610,
        image: Burger,
        gram: "610г",
        category: "бургеры"
    },
    {
        id: 7,
        title: "Жгучий хот-дог",
        price: 689,
        image: HotDog,
        gram: "520г",
        category: "хот-дог"
    },
    {
        id: 8,
        title: "Жгучий хот-дог",
        price: 350,
        image: HotDog,
        gram: "520г",
        category: "хот-дог"
    },
    {
        id: 9,
        title: "Жгучий хот-дог",
        price: 420,
        image: HotDog,
        gram: "520г",
        category: "хот-дог"
    },
    {
        id: 10,
        title: "Жгучий хот-дог",
        price: 520,
        image: HotDog,
        gram: "520г",
        category: "хот-дог"
    },
    {
        id: 11,
        title: "Жгучий хот-дог",
        price: 640,
        image: HotDog,
        gram: "640г",
        category: "хот-дог"
    },
    {
        id: 12,
        title: "Жгучий хот-дог",
        price: 610,
        image: HotDog,
        gram: "610г",
        category: "хот-дог"
    },
]


export interface ModalsDataI {
    name: string
    Component: React.FC
}

export const ModalsData: ModalsDataI[] = [
    {
        name: "info",
        Component: InfoFood
    }
]