import { useState } from "react";
import Meals from "./components/Meals/Meals";
import CartContext from './store/CartContext'
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";
const Meals_Data = [
    {
        id:1,
        title:'艾莎',
        desc:'她是阿伦德尔王国的长公主，在她的妹妹安娜成为女王之前，艾莎在第一部电影中继承了王位。',
        star:5,
        img:'/imgs/1.jpg'
    },
    {
        id:2,
        title:'爱丽儿',
        desc:'爱丽儿是一位美人鱼公主，她的故事基于汉斯·克里斯蒂安·安徒生的同名童话故事。',
        star:4,
        img:'/imgs/2.jpg'
    },
    {
        id:3,
        title:'爱洛',
        desc:'爱洛公主，也称为奥罗拉公主或睡美人，是迪士尼动画电影《睡美人》中的主角。',
        star:3.5,
        img:'/imgs/3.jpg'
    },
    {
        id:4,
        title:'安娜',
        desc:'安娜是迪士尼动画电影《冰雪奇缘》（Frozen）中的主要角色之一，是阿伦戴尔王国的小公主。',
        star:4.5,
        img:'/imgs/4.jpg'
    },
    {
        id:5,
        title:'白雪',
        desc:'“白雪公主”是一个非常著名的童话故事中的角色，这个故事最早出现在德国格林兄弟收集的民间故事集中。',
        star:3.5,
        img:'/imgs/5.jpg'
    },
    {
        id:6,
        title:'贝儿',
        desc:'贝儿公主是迪士尼动画电影《美女与野兽》（Beauty and the Beast）中的女主角。',
        star:4,
        img:'/imgs/6.jpg'
    },
    {
        id:7,
        title:'花木兰',
        desc:'花木兰是中国古代传说中的一位女英雄，她的故事最早见于南北朝时期的民歌《木兰辞》',
        star:4,
        img:'/imgs/7.jpg'
    },
    {
        id:8,
        title:'乐佩',
        desc:'乐佩公主（Rapunzel）是迪士尼动画电影《魔发奇缘》（Tangled）中的女主角。',
        star:3.5,
        img:'/imgs/8.jpg'
    }
]






function App() {

    // 展示列表
    const [mealsData,setMealsData] = useState(Meals_Data)

    const [carData,setCarData] = useState({
        items:[],
        totalAmount:0,
        totalPrice:0
    });


    // 加入
    const addCart = (meal)=>{
        const newCart = {...carData}
        if(newCart.items.indexOf(meal) === -1 ){ //当前购物车不存在这个商品

            meal.num = 1
            newCart.items.push(meal)
           
        }else{ //存在
            meal.num += 1
        }


        newCart.totalAmount += 1 //购物车总数+1
        newCart.totalPrice += meal.star //购物车总价 + 当前商品的价格
        setCarData(newCart)
        
    }

    // 减少
    const reduceCart = (meal)=>{

        const newCart = {...carData}

         meal.num -= 1; //商品数量减一
        if(meal.num === 0){ //如果商品的num为0时  就要从购物车中移除该商品
            newCart.items.splice(newCart.items.indexOf(meal),1)
        }

        newCart.totalAmount -= 1 //购物车总数-1
        newCart.totalPrice -= meal.star //购物车总价 - 当前商品的价格
        setCarData(newCart)

    }

    // 清空购物车
    const clearCart = ()=>{

        const newCart = {...carData}
        newCart.items.forEach(item => delete item.num ) //要去删除每个meal的num值，避免清空购物车后每个商品列表还存在num
        newCart.items = [];
        newCart.totalAmount = 0
        newCart.totalPrice = 0
        setCarData(newCart)
    }

    // 过滤
    const filterEvent = (keyword)=>{
       const data =   Meals_Data.filter(item=> item.title.indexOf(keyword) !== -1)
        setMealsData([...data])
    }

    return (
        <CartContext.Provider value={{...carData,addCart,reduceCart,clearCart}}>
            <div>
                <Filter onFilter={filterEvent}></Filter>
                <Meals mealsData={mealsData}></Meals>
                <Cart></Cart>

            </div>
        </CartContext.Provider>
       
    );
}

export default App;
