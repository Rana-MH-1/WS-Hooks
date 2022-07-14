import React, { useEffect, useRef, useState } from 'react'
import Timer2 from './Components/Timer2'

const App2 = () => {
    const [name, setName]= useState('Syrine Dridi')
    const [description,setDescription] = useState('This is a ws of state -- class')
    const [counter,setCounter] = useState(0)
    const [show,setShow]=useState(false)
    const [text,setText] = useState('')

    //useRef
let textRef = useRef()
let counter2=useRef(0)

    //func
const Increment = (val)=>{
        setCounter(counter+val)
}

const Decrement = (val)=>{
    if(counter>0){
        setCounter(counter+val)
    }
}

const Reset =()=>{
    setCounter(0)
}

const Increment_with_value =(val)=>{
   setCounter(counter+val)
}

const Toggle =()=>{
    setShow(!show)
}
// const HandleChange=(value)=>{
//     setText(value)
// }
//useEffect
useEffect(()=>console.log('Iam mounted and updated'),[])
  return (
    <div>
     <h2>{description}</h2>
     <h3>{name}</h3>
     <hr/>
     <h2>{counter}</h2>
     <button onClick={()=>Increment(1)}>+</button>
     <button onClick={()=>Decrement(-1)}>-</button>
     <button onClick={()=>Reset()}>RESET</button>
     <input onChange={(e)=>Increment_with_value(+e.target.value)} type='text' placeholder='put a number'/>
     <hr/>
     {show &&<Timer2/>}
     <button onClick={()=>Toggle()}>{show? 'hide Timer' : 'show Timer'}</button>
     <hr/>
     <input ref={textRef} type='text' placeholder='put a text' />
     <button onClick={()=>{
        console.log(textRef);
        setText(textRef.current.value)}}>Change me</button>
      <hr/>
      <h3>{counter2.current}</h3>
      <button onClick={()=>setDescription(counter2.current)}>change counter</button>
    </div>
  )
}

export default App2