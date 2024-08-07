import ReactDOM from 'react-dom'
import classes from './CheckOut.module.css'
import closeIcon from '../../../assets/images/close.png'
import Meal from '../../Meals/Meal/Meal'
import CartContext from '../../../store/CartContext'
import { useContext } from 'react'
const CheckOutEle =  document.getElementById('checkOut')
const CheckOut = (props)=>{
    const CartTxt = useContext(CartContext)
    console.log("CartTxt",CartTxt.items)
    return ReactDOM.createPortal(<div className={classes.checkOut}>
        <div onClick={props.onclose} className={classes.closeIcon}>
            <img src={closeIcon}></img>
        </div>
        <section className={classes.section}>
            <p className={classes.cap}>商品详情</p>
            <div className={classes.listBox}>
              {
                CartTxt.items.map(item => <Meal noDesc key={item.id} meal={item}/>)
              }
            </div>
            <div className={classes.footer}>
                <p className={classes.totalBox}>
                    合计<span className={classes.money}>
                        {CartTxt.totalPrice}
                    </span>
                </p>
            </div>
        </section>
        
    </div>,CheckOutEle)
}

export default CheckOut