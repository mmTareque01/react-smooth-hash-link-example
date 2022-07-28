import React from 'react'
import { HashLink } from 'react-smooth-hash-link'


export default function Navigation() {
  return (
    <div>
        <HashLink to="/#section1" menu="Section1"/>
        <HashLink stopSmooth to="/#section2" menu="Section2 (this is not smooth scrolling)"/>
        <HashLink to="/#section3" menu="Section3"/>
        <HashLink to="/#section4" menu="Section4"/>
        <HashLink to="/#section5" menu="Section5"/>
    </div>
  )
}
