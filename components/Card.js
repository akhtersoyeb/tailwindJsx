import Image from "next/image"
import Link from "next/link"
export default function Card({ id, imageUrl }) {
    return (
        <div className="bg-blue-400 rounded-lg hover:shadow-xl transform duration-75 h-60 e  w-full overflow-hidden">
            <Link href={`snippets/${id}`}>
                <img className="w-full h-full" src={imageUrl} alt="unable to load" />
            </Link>
        </div>
    )
}
