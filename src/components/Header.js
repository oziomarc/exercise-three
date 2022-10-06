import React from "react";

function Header () {
    return (
        <div className="header--wrapper">
            <header>
            <a href="/?city=Paris">Paris</a>
            <a href="/?city=Baltimore">Baltimore</a>
            <a href="/?city=Lagos">Lagos</a>
            <a href="/?city=Washington DC">Washington DC</a>
            <a href="/?city=New York City">New York City</a>
        </header>
        </div>
        
    );
}

export default Header