import React, { Component } from 'react'
import './home.scss'
import { Button } from 'antd'


export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      iconLoading: false,
    }
  }

  enterLoading = () => {
    this.setState({ loading: true });
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }



  render() {
    return (
      <div className="home">
        <Button type="primary" size="small" loading>
           Loading
         </Button>
      </div>
    )
  }
}
