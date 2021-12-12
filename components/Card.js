import Image from "next/image"
import Link from "next/link"
export default function Card({ id, imageUrl }) {
    return (
        <div className="bg-white rounded-lg border hover:shadow-xl transform duration-75 w-full h-60 overflow-hidden">
            <Link href={`snippets/${id}`}>
                <img className="w-full h-full object-scale-down" src={imageUrl} alt="unable to load" />
            </Link>
        </div>
    )
}
