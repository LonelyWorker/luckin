import React, { Component } from 'react';
import { Icon, Button } from 'antd';
import '../css/order.scss';
import '../css/base.scss';
import Img from "../img/loginLogo.jpg";


class Order extends Component{
    render(){
        return(
            <div id="order">
                <header className = "headContent">
                    <div className = "code">
                        <Icon type="left" theme="outlined" />
                    </div>
                </header>
                <main className = "mainText">
                    <div className = "logoIcon">
                        <img src= {Img} />
                    </div>
                    <div className = "login">
                        <div className = "loginText">
                            <input type = "text" required placeholder="请输入手机号"/>
                            <br/>
                            <input type = "password" required placeholder="请输入手机验证码" />
                        </div>
                        <div className = "btn">
                            <Button style = {{background: "#B8CFE6", color: "#fff", fontSize: 16}} disabled type="primary" >确 定</Button>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Order;