import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(){
        console.log('constructor')
        super()
        this.state={
            timer : 0,
            intervall : null,
        }
    }

    componentDidMount(){
        console.log('the Timer has mounted')
        this.setState({
            interval : setInterval(()=> this.setState({timer: this.state.timer + 1}),1000)
        })
    }

    componentDidUpdate(){
        console.log('Timer has updated')
        console.log(this.state.timer);
    }

    componentWillUnmount(){
        console.log('Timer has been killed!!')
        clearInterval(this.state.intervall)
    }

  render() {
    return (
      <div>
        <h2>Timer</h2>
        <h3>The Timer has mounted since {this.state.timer}</h3>
      </div>
    )
  }
}
