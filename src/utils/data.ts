import { FoodI } from "@/store/slices/food.slice";
import Burger from "@/assets/images/burger.png"

// category: бургеры закуски хот-доги комбо шаурма пицца вок

export const FoodsData:FoodI[] = [
    {
        id:1,
        title:"Мясная бомба",
        price:689,
        image:Burger,
        gram:"520г",
        category:"бургеры"
    },
    {
        id:2,
        title:"Мясная бомба",
        price:350,
        image:Burger,
        gram:"520г",
        category:"бургеры"
    },
    {
        id:3,
        title:"Мясная бомба",
        price:420,
        image:Burger,
        gram:"520г",
        category:"бургеры"
    },
    {
        id:4,
        title:"Мясная бомба",
        price:520,
        image:Burger,
        gram:"520г",
        category:"бургеры"
    },
    {
        id:5,
        title:"Мясная бомба",
        price:640,
        image:Burger,
        gram:"640г",
        category:"бургеры"
    },
    {
        id:6,
        title:"Мясная бомба",
        price:610,
        image:Burger,
        gram:"610г",
        category:"бургеры"
    },
]