import { useState } from "react";
import coonstagram from './coonstagram.png';

function Navbar(){
    const [inboxCount, changeInbox] = useState(0)
    return ( <div >
        <nav>
            <ul className="flex flex-row p-3 gap-5 items-center
                ">
                <a href="" className=" z-10">
                    <img className="w-9 " src={coonstagram} alt="" />
                </a>
                <li className="bg-slate-700 hover:bg-slate-800 px-3 py-1 text-slate-300 hover:text-white rounded">
                    <a href="#"> Home </a>
                </li>
                <li className="bg-slate-700 hover:bg-slate-800 px-3 py-1 text-slate-300 hover:text-white rounded">
                    <a href="#"> Videos </a>
                </li>
                <li className="bg-slate-700 hover:bg-slate-800 px-3 py-1 text-slate-300 hover:text-white rounded relative">
                    <a href="#" className="z-20"> Inbox </a>
                    <div className=" absolute rounded-full w-6 h-6 text-center my-auto -left-2 -top-1
                            bg-red-400 border-2 border-white z-10">
                        {inboxCount}
                    </div>
                </li>
                
            </ul>
        </nav>
    </div> );
}

export default Navbar;