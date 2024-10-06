import { Link } from "react-router-dom"
import { useAuth } from "../utils/AuthContext"


function Navbar() {

    const {user} = useAuth()


    return (
        <div className="w-screen">

            <nav className="flex gap-3 items-center justify-center bg-purple-700 w-screen h-12 px-8">
                <div className="flex gap-3 items-center flex-grow">
                    <Link to="/" className="text-white hover:text-black" href="#">Home</Link>
                    <Link to="/blogs" className="text-white hover:text-black" href="#">Blog</Link>
                    <Link className="text-white hover:text-black" href="#">Profile</Link>
                </div>


                {!user ? <Link to="/login" className="text-white hover:text-black" >Log In</Link> : <h1>Log Out</h1>}
            </nav>

        </div>
    )
}

export default Navbar