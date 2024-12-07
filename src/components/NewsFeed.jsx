

export default function Newsfeed() {
    return (
        <div className="p-5">
            <h1 className="text-xl font-bold mb-4">Latest News</h1>
            <ul className="space-y-4">
                <li className="p-4 border rounded-md bg-gray-100">
                    <h2 className="font-semibold">Tech Innovations of 2024</h2>
                    <p>From AI breakthroughs to quantum computing, discover the top tech trends shaping the future.</p>
                    <a href="#" className="text-blue-500">Read more...</a>
                </li>
                <li className="p-4 border rounded-md bg-gray-100">
                    <h2 className="font-semibold">Health and Wellness Tips</h2>
                    <p>10 simple ways to boost your mental and physical well-being in daily life.</p>
                    <a href="#" className="text-blue-500">Read more...</a>
                </li>
                <li className="p-4 border rounded-md bg-gray-100">
                    <h2 className="font-semibold">Global News Highlights</h2>
                    <p>A snapshot of the major events happening around the world this week.</p>
                    <a href="#" className="text-blue-500">Read more...</a>
                </li>
                <li className="p-4 border rounded-md bg-gray-100">
                    <h2 className="font-semibold">Sports Updates</h2>
                    <p>Catch up on the latest scores and highlights from your favorite teams and leagues.</p>
                    <a href="#" className="text-blue-500">Read more...</a>
                </li>
            </ul>
        </div>
    );
}
