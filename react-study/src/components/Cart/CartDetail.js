import BackDrop from "../UI/Counter/BackDrop"
import classes from './CartDetail.module.css'
import delIcon from '../../assets/images/del.png'
import Meal from '../Meals/Meal/Meal'
import Comfirm from "../UI/Comfirm/Comfirm"
import CartContext from "../../store/CartContext"
import { useContext, useState } from "react"

const CartDetail = ()=>{
    const cartContext = useContext(CartContext)

    const [showComfirm,setShowComfirm] = useState(false)
    const emptyHandler = ()=>{
        setShowComfirm(true)
    }

    const cancelHandle = (e)=>{
        e.stopPropagation();
        setShowComfirm(false)
    }

    const sureHandle = ()=>{
        cartContext.clearCart();
    }

    // const MealEle =  
    return (
    <BackDrop>
        {showComfirm && <Comfirm title='确认清空购物车' onCancel={cancelHandle} onSure={sureHandle}></Comfirm>}
        <div onClick={e => e.stopPropagation()} className={classes.cartDetail}>
            <div className={classes.capBox}>
                <p className={classes.title}>商品详情</p>
                <div onClick={emptyHandler} className={classes.delBox}>
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