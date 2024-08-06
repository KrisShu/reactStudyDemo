import BackDrop from "../UI/Counter/BackDrop"
import classes from './CartDetail.module.css'
import delIcon from '../../assets/images/del.png'
import Meal from '../Meals/Meal/Meal'

import CartContext from "../../store/CartContext"
import { useContext } from "react"

const CartDetail = ()=>{
    const cartContext = useContext(CartContext)

    // const MealEle =  
    return (
    <BackDrop>

        <div onClick={e => e.stopPropagation()} className={classes.cartDetail}>
            <div className={classes.capBox}>
                <p className={classes.title}>商品详情</p>
                <div className={classes.delBox}>
                    <img src={delIcon}></img>
                    清空购物车
                </div>
            </div>

            <div className={classes.mealList}>
                {
                   cartContext.items.map(item => <Meal noDesc key={item.id} meal={item}></Meal>)
                }
            </div>
        </div>
    </BackDrop>
    )
}

export default CartDetail