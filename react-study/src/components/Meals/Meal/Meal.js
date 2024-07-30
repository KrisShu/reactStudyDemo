import classes from './Meal.module.css'
const Meal = ()=>{
    return(
        <div className={classes.meal}>
            <div className={classes.cover}>
                <img src="/imgs/1.jpg"></img>
            </div>
            <div className={classes.content}>
                <h2>公主</h2>
                <p className={classes.desc}>美丽的公主美丽的公主美丽的公主美丽的公主美丽的公主美丽的公主美丽的公主美丽的公主美丽的公主美丽的公主美丽的公主美丽的公主美丽的公主美丽的公主</p>
                <div className={classes.price_set}>
                    <span className={classes.price}>12</span>
                    <div>数量</div>
                </div>
            </div>
        </div>
    )
}
export default Meal