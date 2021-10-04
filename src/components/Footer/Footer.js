import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className='footer-basic mt-5 pt-5'>
        <footer>
          <div className='social'>
            <i className='fab fa-facebook icon'></i>

            <i className='fab fa-instagram-square icon'></i>

            <i className='fab fa-telegram icon'></i>

            <i className='fab fa-twitter icon'></i>
          </div>
          <ul className='list-inline'>
            <li className='list-inline-item'>
              <NavLink className='footNav' to='/home'>
                Home
              </NavLink>
            </li>
            <li className='list-inline-item'>
              <NavLink className='footNav' to='/service'>
                Services
              </NavLink>
            </li>
            <li className='list-inline-item'>
              <NavLink className='footNav' to='/about'>
                About
              </NavLink>
            </li>
            <li className='list-inline-item'>
              <NavLink className='footNav' to='/review'>
                Review
              </NavLink>
            </li>
          </ul>
          <p className='copyright'>Music Haven © 2021</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
