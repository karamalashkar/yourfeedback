import { FaUserAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai"
import { MdFeedback } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Sidebar = () =>{
    const navigation=useNavigate();
    const logout = () =>{
        localStorage.clear();
        navigation('/')
    }
    
    return(
        <div className="w-1/5 h-full fixed flex flex-col items-center bg-red-700">
            <div className="flex flex-col h-4/5 w-3/4 mt-4">
                <a href='/profile' className="ml-8 my-4 lg:flex text-white items-center text-2xl font-semibold"><FaUserAlt /> <span className="hidden lg:block">Profile</span></a>
                <a href='/home' className="ml-8 my-4 lg: flex text-white items-center text-2xl font-semibold"><AiFillHome /> <span className="hidden lg:block">Home</span></a>
                <a href='/feedback' className="ml-8 my-4 lg: flex text-white items-center text-2xl font-semibold"><MdFeedback /> <span className="hidden lg:block">Feedback</span></a>
                <a href='/discount' className="ml-8 my-4 lg: flex text-white items-center text-2xl font-semibold"><TbDiscount2 /> <span className="hidden lg:block">Discount</span></a>
            </div>
            <div className="flex flex-col h-1/5 w-3/4">
                <button onClick={logout}><a className="ml-8 my-4 lg: flex text-white items-center text-2xl font-semibold"><FiLogOut /> <span className="hidden lg:block">Logout</span></a></button>
            </div>
        </div>
    )
}

export default Sidebar;
