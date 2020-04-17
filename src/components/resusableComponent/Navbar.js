import React, { Component } from 'react'
import {Link} from 'gatsby'
import logo from '../../images/logo.png'
import {FaCartArrowDown} from 'react-icons/fa'
//import '../layout.css'

class Navbar extends Component {
    state={
        navbarState: false,
        navbarClass:"collapse navbar-collapse",
        menus:[{id:1,url:"/" ,text:"Home"},{id:2,url:"/about" ,text:"About"},{id:3,url:"/contact" ,text:"Contact"}
    
            ]
    }

    onToggle = ( )=>{
      this.state.navbarState ? this.setState({navbarState:false, navbarClass:"collapse navbar-collapse "}) : 
      this.setState({ navbarState:true ,navbarClass:"collapse navbar-collapse show"})
    }

    render() {
        const {navbarClass,navbarState} = this.state;
        return (
           <nav className="navbar navbar-expand-sm bg-them text-white">
                <Link to ="/" className="navbar-brand ml-5">
                    <img src={logo} alt="my logo" width="40px"/> 
               </Link>

               <button className="navbar-toggler" type="button" onClick={this.onToggle} >
                 <span className="text-white">menu</span> 
               </button>
               <div className={navbarClass}>
                   <ul className="navbar-nav ml-auto mr-5" >
                       { this.state.menus.map( 
                           (menu) => {
                               return(<li key={menu.id} className="nav-item">
                               <Link to ={menu.url} className="nav-link text-white">
                                {menu.text}</Link>
                         </li>)
                           }
                       )}
                      
                     <li className="nav-item"> <Link to ="" className="nav-link text-white"><FaCartArrowDown className="cart-logo"/> </Link></li> 
                   </ul>

               </div>
           </nav>
        )
    }
}

export default Navbar;
