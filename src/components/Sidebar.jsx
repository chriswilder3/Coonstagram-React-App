import React, {useState} from 'react'


export default function Sidebar() {

    const [ darkMode, changeDarkMode ] = useState('bg-slate-200');
    
    // document.querySelector('ul').classList.add(darkMode)

    function F1(){
        changeDarkMode((prevColor) => prevColor === 'bg-slate-200'?'bg-slate-400':'bg-slate-200');
    }
    return (
        <div className=" ">
            
                <ul className= {` fixed md:flex flex-col p-2 justify-start gap-5 
                        bg-red-300  z-10 rounded-md ${darkMode}`} >
                    <li>
                        <a href=""> Messages </a>
                    </li>
                    <li>
                        <a href=""> Communities </a>
                    </li>
                    <li>
                        <a href=""> Profile </a>
                    </li>
                    
                    <li>
                        <button onClick={ F1 } type='button' className=' bg-sky-500 text-slate-200 p-1 rounded-md'>
                            Dark Mode
                        </button>
                    </li>
                </ul>
            
        </div>
    )
}