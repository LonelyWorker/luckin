import React, { Component } from 'react';
import { Icon } from 'antd';
import Img from "../img/logo.fw.png";
import '../css/mine.scss';
import '../css/base.scss';

class Mine extends Component{
    constructor(){
        super();
        this.state={
            list:[
                {
                    id: 1,
                    text:"个人资料",
                    type: 'idcard',
                    icon: ">"
                },
                {
                    id: 2,
                    text:"咖啡钱包",
                    type: 'coffee',
                    icon: ">"
                },
                {
                    id: 3,
                    text:"优惠券",
                    type: 'idcard',
                    icon: ">"
                },
                {
                    id: 4,
                    text:"发票管理",
                    type: 'idcard',
                    icon: ">"
                }, 
                {
                    id: 5,
                    text:"帮助反馈",
                    type: 'idcard',
                    icon: ">"
                },

            ]
        }
    }

    render(){
        return(
            <div id="mine">
                <header className = "head">
                    <div className = "headLeft">
                        <div className = "logo">
                            <img src = {Img} />
                        </div>
                        <span>立即登录</span>
                        <code> > </code>
                    </div>
                </header>
                <section>
                    <main className = "nav"> 
                        <ul className="navList">
                            {
                                this.state.list.map(item => {
                                    return <section>
                                        <Icon type={item.type} theme="outlined"/>
                                        <li key={item.id}>
                                                {item.text}
                                                <code>{item.icon}</code>
                                        </li>
                                    </section>
                                })
                            }
                        </ul>
                    </main>
                </section>
                <footer className = "foot">
                </footer>
            </div>
        )
    }
}

export default Mine;