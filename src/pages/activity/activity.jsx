// import BaseComponent from '../../baseComponent.jsx';
// import React from 'react';
import React, { Component } from 'react'

// import {Tool} from '../../config/ToolSet.jsx';
import './activity.css';


// export default class Activity extends BaseComponent{
  export default class Activity extends Component {

    // constructor (props) {
    //     super(props);
    // }
    //
    // componentDidMount() {
    //     super.componentDidMount();
    // }

    goDetail = (skuId) => {
      // Tool.loadModule('/category/goodsDetail','skuId='+skuId);
    }

    render(){

        return (
            <div className="container">
              <ul className='activity'>

                <li className='top-bann'>
                  <a >
                    <img src={require('./assets/top.jpg')} alt=''/>
                  </a>
                </li>

                {/* 金龙鱼 稻香贡米--1 */}
                <li onClick={this.goDetail.bind(this,2004338)} >
                  <a>
                    <img src={require('./assets/1.jpg')} alt=''/>
                  </a>
                </li>

                {/* 北琳娜 橄榄油--2*/}
                <li onClick={this.goDetail.bind(this,2214103)}>
                  <a>
                    <img src={require('./assets/2.jpg')} alt=''/>
                  </a>
                </li>

                {/*  福临门 食用油--3*/}
                <li onClick={this.goDetail.bind(this,838866)}>
                  <a >
                    <img src={require('./assets/3.jpg')} alt=''/>
                  </a>
                </li>

                {/* 葡萄酒--4*/}
                <li onClick={this.goDetail.bind(this,2483855)}>
                  <a >
                    <img src={require('./assets/4.jpg')} alt=''/>
                  </a>
                </li>

                {/* 小吃--5*/}
                <li onClick={this.goDetail.bind(this,1160140)}>
                  <a >
                    <img src={require('./assets/5.jpg')} alt=''/>
                  </a>
                </li>

                {/* 三只松鼠礼包--6*/}
                <li onClick={this.goDetail.bind(this,6023844)}>
                  <a>
                    <img src={require('./assets/6.jpg')} alt=''/>
                  </a>
                </li>

                {/* 三只松鼠核桃仁--7*/}
                <li onClick={this.goDetail.bind(this,5971354)}>
                  <a >
                    <img src={require('./assets/7.jpg')} alt=''/>
                  </a>
                </li>

                {/* 德国进口饼干--8*/}
                <li onClick={this.goDetail.bind(this,2624432)}>
                  <a >
                    <img src={require('./assets/8.jpg')} alt=''/>
                  </a>
                </li>

                {/* bottom--*/}
                <li >
                  <a >
                    <img src={require('./assets/bottom.jpg')} alt=''/>
                  </a>
                </li>

              </ul>
            </div>
        )
    }
}
