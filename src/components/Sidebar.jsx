

export default function Sidebar() {
    return (
        <div className="relative ">
            
                <ul className="fixed md:flex flex-col p-2 justify-start gap-5 
                        bg-red-300   z-10 rounded-md">
                    <li>
                        <a href=""> Messages </a>
                    </li>
                    <li>
                        <a href=""> Communities </a>
                    </li>
                    <li>
                        <a href=""> Profile </a>
                    </li>
                </ul>
            
        </div>
    )
}