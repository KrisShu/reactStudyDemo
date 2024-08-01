import classes from './Meal.module.css'
import Counter from '../../UI/Counter/Counter.js'
const Meal = (props)=>{
    return(
        <div className={classes.meal}>
            <div className={classes.cover}>
                <img src={props.meal.img}></img>
            </div>
            <div className={classes.content}>
                <h2>{props.meal.title}</h2>
                <p className={classes.desc}>{props.meal.desc}</p>
                <div className={classes.price_set}>
                    <span className={classes.price}>{props.meal.star}</span>
                    <Counter meal={props.meal}></Counter>
                </div>
            </div>
        </div>
    )
}
export default Meal