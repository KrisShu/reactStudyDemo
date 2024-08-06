import classes from './Counter.module.css'

import CartContext from '../../../store/CartContext'
import { useContext } from 'react'
const Counter = (props)=>{

    const CartCtx = useContext(CartContext)

    // 加的操作事件
    const addEvent = (e)=>{
        // e.stopPropagation();
        CartCtx.addCart(props.meal)
    }

    // 
    const reduceEvent = (e)=>{
        // e.stopPropagation();
        CartCtx.reduceCart(props.meal)
    }

    return(
        <div className={classes.counter}>
          

            {
                // 如果存在num 就显示减号和数量
                (props.meal.num && props.meal.num !== 0) ?
                (
                    <>
                        <button onClick={reduceEvent} className={classes.reducetn}>－</button>
                        <span className={classes.num}>{props.meal.num}</span>
                    </>
                ): null
            }
            <button onClick={addEvent} className={classes.addtn}>＋</button>
        </div>
    )
}

export default Counter