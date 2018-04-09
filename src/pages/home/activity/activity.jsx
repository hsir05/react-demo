import BaseComponent from '../../baseComponent.jsx';
import React from 'react';
import {Tool} from '../../config/ToolSet.jsx';
import '../../less/jd/common.css';
import '../../less/jd/activity.css';

export default class Activity extends BaseComponent{

    constructor (props) {
        super(props);
    }

    componentDidMount() {
        super.componentDidMount();
    }

    rices = () => {// 金龙鱼 稻香贡米--1
      Tool.loadModule('/category/search');
    }
     olive = () => {//北琳娜 橄榄油--2
       Tool.loadModule('/category/search');
     }
    render(){

        return (
            <div className="container">
              <ul className='activity'>

                {/* 金龙鱼 稻香贡米--1 */}
                <li onClick={this.rices}>
                  <a href='#'>
                    <img src={require('./assets/1.jpg')} alr=''/>
                  </a>
                </li>

                {/* 北琳娜 橄榄油--2*/}
                <li onClick={this.olive}>
                  <a href='#'>
                    <img src={require('./assets/1.jpg')} alr=''/>
                  </a>
                </li>

              </ul>
            </div>
        )
    }
}
