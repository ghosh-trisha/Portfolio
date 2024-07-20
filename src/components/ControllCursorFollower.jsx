
import React, { Children, useContext } from 'react'
import { CursorContext } from './Context'

function ControllCursorFollower(props) {

    const {setIsHovered} = useContext(CursorContext);

  return (
    <>
      <span onMouseEnter={()=>setIsHovered(22)} onMouseLeave={()=>setIsHovered(8)}>
        {props.children}
      </span>
    </>
  )
}

export default ControllCursorFollower
