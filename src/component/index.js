import React, { Component } from 'react';
import {HashRouter as Router,Route,NavLink,withRouter,Switch, Redirect} from 'react-router-dom';
import { DatePicker,Icon } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
 //第二种: Context
import PropTypes from "prop-types";
import octicons from 'octicons';
import './css/index.scss';


import Home from './child/home';
import Menu from './child/menu';
import Order from './child/order';
import Cart from './child/cart';
import Mine from './child/mine';
import Not from './child/not';

class Index extends Component{
    constructor(){
        super();
        this.state = {
            list:[
                {
                    id:1,
                    path: "/home",
                    text: "首页",
                    tag:"home",
                    icon: "home",
                },
                {
                    id:2,
                    path: "/menu",
                    text: "菜单",
                    tag:"home",
                    icon: "coffee",
                },
                {
                    id:3,
                    path: "/order",
                    text: "订单",
                    tag:"home",
                    icon: "solution",
                },
                {
                    id:4,
                    path: "/cart",
                    text: "购物车",
                    tag:"home",
                    icon: "shopping-cart",
                },
                {
                    id:5,
                    path: "/mine",
                    text: "我的",
                    tag:"home",
                    icon: "user",
                },
            ],
            currentIndex : 0
        }
        //未实验
        // this.setCurrentIndex = this.setCurrentIndex.bind(this)
    }
    // setCurrentIndex(event) {
    //     this.setState({
    //       currentIndex: parseInt(event.currentTarget.getAttribute('index'), 10)
    //     })
    //   }
    //   render() {
    //     let categoryArr = ['产品调整', '接口流量', '负载均衡', '第三方软件调整',
    //               '安全加固', '性能控制', '日志查询', '业务分析'];
    //     let itemList = [];
    //     for(let i = 0; i < categoryArr.length; i++) {
    //       itemList.push(<li key={i}
    //                className={this.state.currentIndex === i ? 'active' : ''}
    //                index={i} onClick={this.setCurrentIndex}
    //              >{categoryArr[i]}</li>);
    //     }
    //     return <ul className="category">{itemList}</ul>
    //   }
    // }

    // go(path){
    //     /*
    //         编程式导航获取history方式:
    //             (常用)
    //             1.利用Route渲染组件
    //             2.利用withRouter来包装组件,具有Router的功能(推荐)
    //             (不常用)
    //             3.利用Context(是谁暴露router出来,一般都是最外层router暴露,不建议)

    //     */
    //     //第一种:<Route />
    //     // console.log(path);
    //     console.log(this);
    //     let {history} = this.props;
    //     history.push({pathname: path});
    //     // history.replace(path);
        
    //     //第二种: Context
    //     // let {history} = this.context.router;
    //     // history.push({pathname: path});
    //     // history.replace(path);
    // }



    render(){
        let Link = {
            flex:1,
            color: '#000',
            textAlign: 'center',
            textDecoration: 'none'
        }
        return(
            <div id="index">
                <section className="content">   
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path="/menu" component={Menu}/>
                        <Route path="/order" component={Order}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/mine" component={Mine}/>
                        <Redirect from="/" to="/home" exact />  
                        <Route path='*' component={Not}/>
                    </Switch>
                </section>
                <nav className="nav">
                    <ul className = "tab">
                        {
                            this.state.list.map(item => {
                                //三种获取history的方法
                            //    return <NavLink style={Link} to={item.path} key={item.id} onClick={this.go.bind(this,item.path)}>{item.text}</NavLink>
                            return <NavLink style={Link} to={item.path} key={item.id} activeStyle={{color: 'rgb(52, 76, 103)'}}>
                                    <article>
                                        <Icon type={item.icon} theme="outlined" />
                                        <br />
                                        <span>{item.text}</span>
                                    </article>
                            </NavLink>
                            })
                        }
                    </ul>
                </nav>
            </div>
        );
    }
}

//第二种: Context
// Index.contextTypes = {
//     router:PropTypes.object
// }

//第三种:高级组件withRouter
// Index = withRouter(Index);

export default Index;