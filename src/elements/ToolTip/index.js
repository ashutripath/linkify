import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import { Tip, Parent } from './styles'

export default function ToolTip({ renderToolTip, children }) {
  const [show, setShow] = useState(false)
  const [parentPosition, setParentPosition] = useState({})
  const parentRef = useRef(null)

  useEffect(() => {
    function updatePosition() {
      setParentPosition({
        left: parentRef.current.getBoundingClientRect().left,
        top: parentRef.current.getBoundingClientRect().top + parentRef.current.getBoundingClientRect().height,
      })
    }
    window.addEventListener('resize', updatePosition)
    updatePosition()

    return () => window.removeEventListener('resize', updatePosition)
  }, [])

  return (
    <>
      {show ? ReactDOM.createPortal(<Tip parentPosition={parentPosition}>{renderToolTip()}</Tip>, document.body) : null}
      <Parent
        onClick={() => {
          setShow((prevState) => !prevState)
        }}
        ref={parentRef}
      >
        {children}
      </Parent>
    </>
  )
}

ToolTip.propTypes = {
  renderToolTip: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
