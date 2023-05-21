import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Container>
      <div>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> MyECommerce </span>
      </h5>
      <h5>All rights reserved</h5>
      <span> Asim Khan</span>
      </div>
      
    </Container>
  )
}

const Container = styled.footer`
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #352A36;
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.5rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
