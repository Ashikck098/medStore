import React from 'react'
import animation from "../../assets/animation.json"
import Lottie from "lottie-react";

const Animation = () => {
  return (
    <div>
        <Lottie animationData={animation} />
    </div>
  )
}

export default Animation