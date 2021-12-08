
export default function Search() {
    return (
        <div className="bg-white py-6 px-6 shadow-md">
            <div className="container mx-auto flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input className="w-full appearance-none focus:outline-none py-2 px-3 text-gray-700" type="text" placeholder="search" />
            </div>
        </div>
    )
}
