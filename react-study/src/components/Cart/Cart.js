import classes from './Cart.module.css'
import bagImg from '../../assets/images/bag.png'
import CartContext from '../../store/CartContext'
import { useContext, useEffect, useState } from 'react'
import CartDetail from './CartDetail'
import CheckOut from './CheckOut/CheckOut'

const Cart = ()=>{
    const CartText = useContext(CartContext)

    const [showDetail,setShowDetail] = useState(false)

    // if(CartText.totalAmount == 0){
    //     setShowDetail(false)
    // }


    // 
    const showDetailHandler = ()=>{
        const newShowDetail = !showDetail
        if(CartText.totalAmount == 0) return
        setShowDetail(newShowDetail)
    }

    const [showCheckOut,setShowCheckOut] = useState(false)
    const checkOutHandle = ()=>{
        if(CartText.totalAmount == 0) return
        setShowCheckOut(true)
    }

    const checkOutClose = ()=>{
        setShowCheckOut(false)
    }

    useEffect(()=>{
        if(CartText.totalAmount == 0){
            setShowCheckOut(false)
            setShowDetail(false)
        }
    })
    return(
        <div onClick={showDetailHandler} className={classes.cart}>
            { showCheckOut && <CheckOut onclose={checkOutClose}></CheckOut> }
            {showDetail && <CartDetail></CartDetail>}
            <div className={classes.leftBox}>
                <div className={classes.bag}>
                    <img src={bagImg}></img>
                    { CartText.totalAmount === 0 ? null :  <span className={classes.totalAmount}>{CartText.totalAmount}</span>}
                </div>
                {CartText.totalAmount === 0 ? <p className={classes.noTip}>未选购商品</p> : <span className={classes.totalPrice}>{CartText.totalPrice}</span>} 
            </div>
            <button onClick={checkOutHandle} className={`${classes.settleBtn} ${CartText.totalAmount === 0 ? classes.disable :''}`}>去结算</button>
        </div>
    )
}

export default Cart