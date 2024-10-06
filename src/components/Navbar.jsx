import { Link } from "react-router-dom"
import { useAuth } from "../utils/AuthContext"


function Navbar() {
    
    const {isAuthenticated,logout} = useAuth()


    function handleLogout(){


        logout()
        console.log("You are logged out")

    }



    return (
        <div className="w-screen">

            <nav className="flex gap-3 items-center justify-center bg-purple-700 w-screen h-12 px-8">
                <div className="flex gap-3 items-center flex-grow">
                    <Link to="/" className="text-white hover:text-black" href="#">Home</Link>
                    <Link to="/blogs" className="text-white hover:text-black" href="#">Blog</Link>
                    <Link className="text-white hover:text-black" href="#">Profile</Link>
                </div>


                {!isAuthenticated ? 
                    <Link to="/login" className="text-white hover:text-black" >Log In </Link> 
                        : <button onClick={handleLogout}>Log Out</button>}
            </nav>

        </div>
    )
}

export default Navbar