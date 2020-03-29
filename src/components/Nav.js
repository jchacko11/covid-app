import React from 'react'
import 'uikit/dist/css/uikit.css'
import 'uikit/dist/js/uikit.js'

function Nav(){
  return(
    <nav className="uk-navbar-container uk-dark uk-background-secondary" uk-navbar="true">
        <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
                <li className="uk-active"><a href="">Home</a></li>
                <li className="uk-parent"><a href="">About</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav
