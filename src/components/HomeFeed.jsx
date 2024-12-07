import ItemCard from "./ItemCard";

import Sidebar  from "./Sidebar";

export default function(){
    return (
        
        <div className="md:grid grid-cols-5 m-2 gap-2">
            <Sidebar className="col-span-1" />
            <div className="flex flex-col m-2 gap-2 grid-cols-4">
                <h2 className="max-w-2xl px-8 py-2  bg-white rounded-lg shadow-md dark:bg-gray-800">
                    
                    <input className="p-2 min-h-12 rounded mx-auto  " type="text" placeholder="Write a post |"/>
                </h2>
                <ItemCard></ItemCard>
            </div>
        </div>
    );
}