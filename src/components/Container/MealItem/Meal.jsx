import { createContext, useState, useEffect } from 'react';

export const MealContext = createContext();

export const MealProvider = ({children}) => {
    const [meals, setMeals] = useState([])

    useEffect(()=>{
        async function fetchMeals() {
            const response = await fetch("../../../../backend/data/available-meals.json")
            const meals = await response.json()
            setMeals(meals)
        }
        fetchMeals()
    },[])
    
    return(
        <MealContext.Provider value={meals}>
            {children}
        </MealContext.Provider>
    )
}
