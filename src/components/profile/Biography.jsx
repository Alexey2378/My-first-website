import React from 'react';


const Biography = (props) => {
  return (
    <div>
      <div>
        {props.name}
        {props.age}
        {props.city}
      </div>
    </div>
  )
}

export default Biography;