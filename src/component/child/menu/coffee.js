import React, {Component} from "react";

import '../../css/css/coffee.scss';

class Coffee extends Component{
    render(){
        let link = {
            height: 300
        }
        return(
            <div id = "coffee" style = {link}>
                <div className = "title">
                    <h4>大师咖啡</h4>
                    <h6><small>WEB(世界咖啡大赛)冠军团队拼配</small></h6>
                    <ul className = "list">
                        
                    </ul>
                </div>
            </div>
        )
    }
}
export default Coffee;