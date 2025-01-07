
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header(){
    return <Navbar className="border-b border-b-slate-200 shadow-lg">
        <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"> 
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg text-white">
                UBlog
            </span>
        </Link>    
        <form>
            <TextInput
            type="text"
            placeholder="Search"
            rightIcon={ AiOutlineSearch }
            className="hidden lg:inline"
            />    
        </form>  
        <Button className="w-12 h-10 lg:hidden rounded-full" color='gray'>
            <AiOutlineSearch/>
        </Button>
        <div className="flex gap-2 md:order-2">
            <Button className="w-12 h-10 hidden sm:inline" ccolor="gray" pill>
                <FaMoon/>
            </Button>
            <Link
            to="/signin">
                <Button  gradientDuoTone="purpleToBlue">
                    Sign In
                </Button>
            </Link>
        </div>
        <Navbar.Collapse>
                <Navbar.Link>
                    <Link to="/">
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to="/About">
                        About 
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to="/Projects">
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
    </Navbar>
}