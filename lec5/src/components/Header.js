const Title=()=>(
    <div className="title">
        <a href="">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfLK3kEJcq5i7QL17xo98YIzvb7-4iD0Yaag&usqp=CAU"/>
        </a>
    </div>
);
 const Header=()=>(
    
    <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>contact</li>
                <li>Cart</li>
            </ul>

        </div>
    </div>
);
 export default Header;