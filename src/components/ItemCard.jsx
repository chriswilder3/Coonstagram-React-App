export default function ItemCard(){
    return( 
        
    <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800"> 
            <div className="flex items-center justify-between">
                <span className="text-sm font-light text-gray-600 dark:text-gray-400">Dec 7, 2024</span>
                <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-blue-500 rounded cursor-pointer hover:bg-blue-400" tabIndex="0" role="button">Technology</a>
            </div>

            <div className="mt-2">
                <a href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabIndex="0" role="link">Exploring the Future of AI</a>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    The rapid advancements in AI are reshaping industries. From autonomous vehicles to personalized healthcare, the possibilities are endless. What excites you most about the future of AI?
                </p>
            </div>

            <div className="flex items-center justify-between mt-4">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline" tabIndex="0" role="link">Comment</a>

                <div className="flex items-center">
                    <img className="object-cover w-10 h-10 mx-4 rounded-full" src="https://via.placeholder.com/40" alt="User Avatar" />
                    <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabIndex="0" role="link">John Doe</a>
                </div>
            </div>
        </div>


        
    </div>
    );
}