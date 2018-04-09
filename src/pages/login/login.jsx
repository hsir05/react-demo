import React, { Component } from 'react';
import './login.scss';
import axios from 'axios'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username:'',
      avatar:''
    }
  }

  componentDidMount () {
    this.init()
  }

  init () {
    axios.get('https://api.github.com/users/ideepspace').then(
          res => {
              console.log(res.data)
              this.setState({
                  username: res.data.login ,
                  avatar: res.data.avatar_url
              });
          }
      )
  }

  render() {
    return (
      <div className="login">
       <img src={this.state.avatar} alt=''/>
       <h2>{this.state.username}</h2>
      </div>
    )
  }
}
