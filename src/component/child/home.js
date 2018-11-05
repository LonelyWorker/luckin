import React, { Component } from 'react';
import {HashRouter as Router,Route,NavLink,withRouter} from 'react-router-dom';
import { DatePicker,Icon,Switch } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import '../css/home.scss';
import Img from '../img/tangwei.png';

class Home extends Component{
    constructor (){
        super();
        this.state = {
            list:[
                {
                    id:1,
                    title:"现在下单",
                    text: 'OREDER NOW',
                    icon: "coffee",
                },
                {
                    id:2,
                    title:"咖啡钱包",
                    text: 'COFFEE WALLET',
                    icon: "dollar",
                },
                {
                    id:3,
                    title:"送TA咖啡",
                    text: 'SEND COFFEE',
                    icon: "gift",
                },
                {
                    id:4,
                    title:"企业账户",
                    text: 'ENTERPRISE ACCOUNT',
                    icon: "team",
                },
            ]
        }

    }
    render(){
        return(
            <div id="home">
                {/* 轮播图 */}
                <header className="swiper">
                    <div className="vid">
                    <video id="videoAd" src="https://s1.luckincoffeecdn.com/luckywaprm/media/luckincoffee_TVC30.9f40f6de.mp4" controls="controls" autobuffer="true" height="358" loop=""></video>
                    </div> 
                </header>
                <footer className="list">
                    <ul className="tab">
                        <article>
                            <hgroup>
                                <h4>现象梦工厂</h4>
                                <span>距你123米</span>
                            </hgroup>
                            <figure>
                                <Switch checkedChildren="自提" unCheckedChildren="外送" defaultChecked/>
                            </figure>
                        </article>
                        {
                            this.state.list.map(item =>{
                                return <li key={item.id}>
                                    <a href="javascript:">
                                        <hgroup>
                                            <h4>{item.title}</h4>
                                            <span>{item.text}</span>
                                        </hgroup>
                                        <section><Icon type={item.icon} theme="outlined" /></section>
                                    </a>
                                </li>
                            })
                        }
                    </ul>
                </footer>
            </div>
        )
    }
}

export default Home;