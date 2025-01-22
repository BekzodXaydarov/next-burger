"use client";

import { useSelector } from "react-redux";
import { StoreI } from "./store";

export const useFoods = () => useSelector(({ foods }: StoreI) => foods)
export const useCart = () => useSelector(({ cart }: StoreI) => cart)