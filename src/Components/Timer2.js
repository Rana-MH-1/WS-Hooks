import React, { useEffect, useState } from 'react'

const Timer2 = () => {
    const [timer,setTimer] =useState(0)
    const [intervall,setIntervall]=useState(null)
    //useEffect
    useEffect(()=>setIntervall(setInterval(()=>setTimer(timer+1)),1000),[timer])
  return (
    <div>
      <h2>Timer</h2>
        <h3>The Timer has mounted since {timer}</h3>
    </div>
  )
}

export default Timer2