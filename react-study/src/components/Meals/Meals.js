import Meal from "./Meal/Meal"
import classes from './Meals.module.css'
const Meals = (props)=>{
    const mealele = props.mealsData.map(item=> <Meal key={item.id} meal={item}></Meal>)

    return (
        <div className={classes.meals}>
           {mealele}
        </div>
    )
}

export default Meals