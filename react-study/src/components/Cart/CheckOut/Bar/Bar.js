import classes from './Bar.module.css'
import CartContext from '../../../../store/CartContext'
import { useContext } from 'react'
const Bar = ()=>{
    const CartText = useContext(CartContext)

    return(
        <div  className={classes.cart}>
           
           
            <div className={classes.leftBox}>
                <span className={classes.totalPrice}>{CartText.totalPrice}</span>
            </div>
            <button className={`${classes.settleBtn} ${CartText.totalAmount === 0 ? classes.disable :''}`}>去支付</button>
        </div>
    )
}
export default Bar