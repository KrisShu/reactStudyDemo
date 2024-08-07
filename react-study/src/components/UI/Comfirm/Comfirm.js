import BackDrop from "../Counter/BackDrop"
import classes from './Comfirm.module.css'
const Comfirm = (props)=>{
    return(
        <BackDrop onClick={props.onCancel} className={classes.comfirmIndex}>
            <div className={classes.comfirmBox}>
                <p className={classes.title}>{props.title}</p>
                <div className={classes.btnBox}>
                    <button onClick={(e)=>props.onCancel(e)} className={classes.cancel}>取消</button>
                    <button onClick={(e)=>props.onSure(e)} className={classes.sure}>确认</button>
                </div>
            </div>
        </BackDrop>
    )
}
export default Comfirm