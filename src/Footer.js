import React from 'react'

const Footer = ({length}) => {
  return (
    <footer>{length} list {length === 1 ? "item" : "items" }
    <p>----ava----</p>
    </footer>
  )
}

export default Footer
