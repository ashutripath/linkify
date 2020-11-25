import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { TimelineMax } from 'gsap/all'

import { filterOptions } from 'appConstants'
import { setPostsFilter } from 'redux/home/action'
import { Container, HeaderCard, LeftSection, DropDownContainer, StyledDropDown } from './styles'

function Header(props) {
  const { onAddLinkClick, showAddLink, showFilter } = props
  const [tl] = useState(new TimelineMax({ repeat: -1 }))
  const nameRef = useRef(null)
  const addALinkRef = useRef(null)
  const profileRef = useRef(null)
  const dispatch = useDispatch()

  useEffect(() => {
    if (nameRef.current && addALinkRef.current) {
      tl.staggerTo([addALinkRef.current, profileRef.current], 1, { rotate: 360 }, 1, '+=0.5')
      tl.repeatDelay(5)
      tl.yoyo(true) // tween element's left from 0 to -100
    }
  }, [tl])

  function handleFilterChange(item) {
    dispatch(setPostsFilter(item.value))
  }

  return (
    <Container>
      <LeftSection>
        <Link to="/" ref={nameRef}>
          <HeaderCard py={1} height="100%">
            <p>Psy Cloud</p>
          </HeaderCard>
        </Link>

        {showAddLink && (
          <HeaderCard py={1} ml={5} onClick={onAddLinkClick} style={{ cursor: 'pointer' }} ref={addALinkRef}>
            <p>Add a Link</p>
          </HeaderCard>
        )}

        {showFilter && (
          <DropDownContainer>
            <StyledDropDown data={filterOptions} headerTitle="Filter Posts" handleItemSelection={handleFilterChange} initlalId={1} />
            {/* <DropDown data={bgColors} headerTitle="Magic Colors" handleItemSelection={handleSelection} initlalId={2} /> */}
          </DropDownContainer>
        )}
      </LeftSection>

      <Link to="/profile" ref={profileRef}>
        <HeaderCard py={1}>Your Profile</HeaderCard>
      </Link>
    </Container>
  )
}

Header.propTypes = {
  onAddLinkClick: PropTypes.func,
  showAddLink: PropTypes.bool,
  showFilter: PropTypes.bool,
}

Header.defaultProps = {
  onAddLinkClick: () => {},
  showAddLink: false,
  showFilter: false,
}

export default Header
