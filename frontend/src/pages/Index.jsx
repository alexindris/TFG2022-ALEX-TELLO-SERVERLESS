import React from 'react'
import banner from '../assets/img/BigPugLoans.jpg'
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div className='container'>
      <img src={banner} alt="banner" />
      <h2>Get your big fat pug loan here</h2>
      <Link to='/application'>
        <Button class="btn btn-primary btn-lg">Yes, I want to apply - &gt;</Button>
      </Link>
    </div>
  )
}
