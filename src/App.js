import './App.css';
import React,{Component} from 'react';
import Timer from './Components/Timer';

class App extends Component {

  constructor(){
    super()
    this.state={
      Description:'This is a ws of state -- class',
      name:'Syrine Dridi',
      counter : 0,
      show : false
    }
  }

 Increment(){
    this.setState({
      counter: this.state.counter + 1
    })
  }

  Decrement(){
    if(this.state.counter>0){
      this.setState({
        counter : this.state.counter-1
      })
    }
    
  }

  Incerement_with_value = (val)=>{
      this.setState({
        counter : this.state.counter + val
      })
    }

    Reset=()=>{
      this.setState({
        counter : 0
      })
    }

    Toggle=()=>{
      this.setState({
        show : !this.state.show
      })
    }

  

  render(){
    let name = this.state.name
    return (
      <div className="App">
        <h2>{this.state.Description}</h2>
        <h3>{name}</h3>
        <hr/>
        <h2>{this.state.counter}</h2>
        <button onClick={()=>this.Increment()}>+</button>
        <button onClick={()=>this.Decrement()}>-</button>
        <button onClick={()=> this.Reset()}>RESET</button>
        <input onChange={(e)=>this.Incerement_with_value(+e.target.value)} type='text' placeholder='put a number'/>
        <hr/>
        {this.state.show && <Timer/>}
        <button onClick={()=>this.Toggle()}>{this.state.show? 'hide Timer' : 'show Timer'}</button>
      </div>
    );
  }
  
}

export default App;
