import React from 'react'
import {AnimateSharedLayout} from "framer-motion"

const Card = (props)=>{
  const [expanded, setExpanded] = useState(false)
  return (
    <AnimatedSharedLayout>
      {
        expanded ? (
          "Expanded"
        ) : 
        <CompactCard param = {props}
      }
    </AnimatedSharedLayout>
    
  )
}

//Compact Card
const CompactCard = ({param}) =>{
  const Png = param.png
  return (
    <div className = "CompactCard">
      <div className = "radialBar">
        Chart
      </div>
      <div className="detail">
        <Png/>
        <span>${param.value}</span>
        <span>Last 24 Hours</span>
      </div>
    </div>
  )
}