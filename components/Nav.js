import Link from "next/link";
import { useState } from "react";

import ContactPopUp from "./ContactPopUp";

export default function Nav() {
    const [showPopUp, setShowPopUp] = useState(false)

    const closePopUp = () => {
        setShowPopUp(false)
    }

    return (
        <>
            <ContactPopUp display={showPopUp ? "block" : "hidden"} closePopUp={closePopUp} />
            <header className="bg-gradient-to-tr from-purple-600 to-indigo-500">
                <nav className="flex items-center justify-between p-5 border-b border-gray-600">
                    <div className="flex items-center gap-2">
                        <svg className="h-12 w-12 text-white opacity-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                        <p className="text-2xl font-semibold text-white">TailwindJSX</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="https://rzp.io/l/tailwindjsx">
                            <div className="flex items-center gap-2 cursor-pointer text-white opacity-80">
                                <p>Your donation is needed</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </nav>
                <div className="container px-8 mx-auto flex flex-col gap-6 items-center xl:flex-row xl:justify-between pt-16 pb-14">
                    <div className="flex flex-col items-center xl:items-start gap-8">
                        <h1 className="text-white text-center xl:text-left text-4xl font-medium">Beautiful hand-crafted snippets <span className=" block opacity-60">by Sk Soyeb Akhter 😉</span></h1>
                        <div className="flex items-center gap-4 text-white ">
                            <p>Premium Snippets</p>
                            <p>MIT Licensed</p>
                            <p>Tailwind + JSX</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <Link href="https://rzp.io/l/tailwindjsx" >
                            <a className="text-purple-600 bg-white px-5 py-3 rounded-md">Donate Now</a>
                        </Link>
                        <button 
                            onClick={() => setShowPopUp(true)}
                            className="text-purple-600 bg-white px-5 py-3 rounded-md"
                            >Contact Me
                        </button>

                    </div>
                </div>
            </header>
        </>
    )
}
