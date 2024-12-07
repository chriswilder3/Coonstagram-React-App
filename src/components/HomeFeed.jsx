import ItemCard from "./ItemCard";

import Sidebar  from "./Sidebar";

import Newsfeed from "./NewsFeed";

export default function(){
    return (
        
        <div className=" sm:grid grid-cols-5 m-2 gap-2">
            <Sidebar className="col-span-1" />
            <div className="flex flex-col m-2 sm:m-3 gap-2 col-span-3">
                <h2 className="max-w-2xl px-8 py-3  bg-white rounded-lg shadow-md dark:bg-gray-800">
                    
                    <textarea className="p-2 w-2/3  rounded  transition delay-75 hover:scale-105 focus:scale-110 " type="text" placeholder="Write a post |"/>
                </h2>
                <ItemCard></ItemCard>
            </div>
            <Newsfeed className="col-span-1" ></Newsfeed>

        </div>
    );
}