import { useState } from "react";


function Navbar(){
    const [inboxCount, changeInbox] = useState(0)
    return ( <div >
        <nav>
            <ul className="flex flex-row bg-slate-200 p-3 justify-around 
                ">
                <li className="bg-slate-400 px-3 py-1 rounded">
                    <a href="#"> Home </a>
                </li>
                <li className="bg-slate-400 px-3 py-1 rounded">
                    <a href="#"> Videos </a>
                </li>
                <li className="bg-slate-400 px-3 py-1 rounded relative">
                    <a href="#" className="z-20"> Inbox </a>
                    <div className=" absolute rounded-full min-w-6 text-center -left-2 -top-1
                            bg-red-400 border-2 border-white z-10">
                        {inboxCount}
                    </div>
                </li>
                
            </ul>
        </nav>
    </div> );
}

export default Navbar;