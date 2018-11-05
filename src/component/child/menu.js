import React, {Component} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import {Carousel} from 'antd';

import '../css/menu.scss';
import Swiper from 'swiper';
import '../lib/swiper.min.css';
import Img01 from '../img/laofuzi.jpg';
import Img02 from '../img/team.jpg';
import Img03 from '../img/kunan.jpg';

import Coffee from './menu/coffee';
import Latte from './menu/latte';
import Ice from './menu/ice';
import Drink from './menu/drink';
import Juice from './menu/juice';
import Food from './menu/food';

class Menu extends Component {
	constructor() {
		super();
		this.state = {
			list: [{
				id: 1,
				text: "大师咖啡",
				path: "/Menu/coffee"
			},
			{
				id: 2,
				text: "零度拿铁",
				path: "/Menu/latte"
			},
			{
				id: 3,
				text: "瑞纳冰",
				path: "/Menu/ice"
			},
			{
				id: 4,
				text: "经典饮品",
				path: "/Menu/drink"
			},
			{
				id: 5,
				text: "健康轻食",
				path: "/Menu/food"
			},
			{
				id: 6,
				text: "鲜榨果蔬汁",
				path: "/Menu/juice"
			},
			],
		}

	}

	componentDidMount() {
		var swiper = new Swiper('.swiper-container', {
			spaceBetween: 30,
			centeredSlides: true,
			loop: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});
	}

	click(){
		var list = this.state.list;
		var id = 0;
		{
			list.map((item,key) => {
				console.log(key);
			})
		}
	}

	render() {
		return (
			<div id="menu" >
					<div className="title" >
						<span className="wenzi"><strong>选择咖啡与小食</strong></span >
					</div>
					<main className="content" >
						<header className="head" >
							<div className="swiper-container" >
								<div className="swiper-wrapper" >
									<div className="swiper-slide"> <img src={Img01}/></div >
									<div className="swiper-slide"> <img src={Img02}/></div >
									<div className="swiper-slide"> < img src={Img03}/></div >
								</div> 
							 </div> 
						</header> 
						<footer className="foot">
							<div className="foot_l">
								<ul className="list"> {
									this.state.list.map(item => {
										//利用方法，使用this绑定
										return <NavLink to={item.path} key={item.id} activeStyle={{color: 'rgb(52, 76, 103)'}} onClick = {this.click.bind(this)}> 
										{item.text}
										</NavLink>
									})
								  }
				 				</ul>
				  			</div>
				  			<div className="foot_r" >
								<Coffee />
								<Latte />
								<Ice />
								<Drink />
								<Food />
								<Juice />
								{/* <Switch> 
									<Route path="/Menu/coffee" component={Coffee}/>
									<Route path="/Menu/latte" component={Latte}/>
									<Route path="/Menu/ice" component={Ice}/>
									<Route path="/Menu/Drink" component={Drink}/>
									<Route path="/Menu/food" component={Food}/>
									<Route path="/Menu/juice" component={Juice}/>
								</Switch> */}
							</div> 
						</footer>
				</main>
			</div>
		)
	}
}
export default Menu;
