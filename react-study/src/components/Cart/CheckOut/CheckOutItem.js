
import classes from './CheckOutItem.module.css'
import Counter from '../../UI/Counter/Counter'
const CheckOutItem = (props)=>{
    return(
        <div className={classes.checkOutItem}>
            <div className={classes.cover}>
                <img src={props.meal.img}></img>
            </div>
            <div className={classes.content}>
                <h2>{props.meal.title}</h2>
                
                <div className={classes.price_set}>
                    <Counter meal={props.meal}></Counter>
                    <span className={classes.price}>{props.meal.star * props.meal.num}</span>
                </div>
            </div>
        </div>
    )


}
export default CheckOutItem