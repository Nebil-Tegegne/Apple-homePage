import React from 'react';
import AppleLogo from "./images/icons/logo.png";
import SearchIcon from "./images/icons/search-icon.png";
import CartIcon from "./images/icons/cart.png";
function Header(){
    return(

        <header className="header-wrapper">
			<div className="internal-wrapper"> 
				<div className="header-links-wrapper">
					<ul>
						<li className="logo-link"><a href="/"><img src={AppleLogo} alt='apple logo'/></a></li>
						<li><a href="/Mac/">Mac</a></li>
						<li><a href="iphone">iphone</a></li>
						<li><a href="ipad">ipad</a></li>
						<li><a href="Watch">watch</a></li>
						<li><a href="TV">tv</a></li>
						<li><a href="Music">Music</a></li>
						<li><a href="Support">Support</a></li>
						<li className="search-link"><a href="/search/"><img src={SearchIcon} alt='search icon'/></a></li>
						<li className="cart-link"><a  href="/cart/"><img src={CartIcon} alt="cart icon"/></a></li>
					</ul>					
				</div>
			</div>
		</header>
   
    );
}

export default Header;