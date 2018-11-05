import React, { Component } from 'react';
import { DatePicker,Icon,Switch,Button } from 'antd';
import 'antd/dist/antd.css'; 
import '../css/cart.scss';
class Cart extends Component{
    render(){
        return(
            <div id="cart">
                <div className="title">
                    <span className="wenzi"><strong>购物车</strong></span>
                </div>
                <div className = "box">
                    <Icon type="exception" theme="outlined" />
                    <p>您的购物车有点寂寞</p>
                    <Button type="primary" ghost>去喝一杯</Button>
                </div>

            </div>
        )
    }
}

export default Cart;