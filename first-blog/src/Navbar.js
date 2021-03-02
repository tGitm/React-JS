
const Navbar = () => {
    return (  
        <nav classname="navbar">
            <h1>Tim's Blog</h1>
            <div classname="links">
                <a href="/">Home</a>    {/*ni še routinga*/}
                <a href="/create">New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;