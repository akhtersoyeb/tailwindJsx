import Image from "next/image"
export default function Card() {
    return (
        <div className="bg-blue-400 rounded-lg hover:shadow-lg cursor-pointer transform duration-75 h-60 hover:scale-105 w-full overflow-hidden">
            <img  className="w-full h-full" src="https://picsum.photos/500" alt="unable to load" />
        </div>
    )
}
