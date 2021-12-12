import { useState } from "react"
import Link from "next/link"

import reactElementToJSXString from "react-element-to-jsx-string"

import CodeSyntaxHighlighter from "./CodeSyntaxHighlighter"

export default function SnippetLayout({ children }) {
    const [isPreviewMode, setIsPreviewMode] = useState(true)
    const [width, setWidth] = useState("xl")

    const togglePreViewMode = () => {
        setIsPreviewMode(!isPreviewMode)
    }

    return (
        <>
            <nav className="py-3 px-5 flex items-center justify-between bg-indigo-500">
                <div>
                    <div className="">
                        <Link href="/">
                            <a className="text-lg font-semibold flex items-center gap-3 text-white"><span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg></span> TailwindJSX</a>
                        </Link>
                    </div>
                </div>
                <div className="flex gap-4">
                    {isPreviewMode ? (
                        <>
                            <button onClick={() => setWidth("xl")} className="hidden xl:block text-white  opacity-80">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </button>
                            <button onClick={() => setWidth("md")} className="hidden xl:block text-white  opacity-80">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </button>
                            <button onClick={() => setWidth("sm")} className="hidden xl:block text-white  opacity-80">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </button>
                            <button onClick={togglePreViewMode} className="flex items-center gap-2 py-2 px-4 border border-opacity-50 uppercase font-semibold text-sm border-white rounded-lg text-white">
                                <span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg></span>View Code
                            </button>

                        </>
                    ) : (
                        <>
                            <button className=" text-white  opacity-80" onClick={() => navigator.clipboard.writeText(reactElementToJSXString(children))}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                </svg>
                            </button>
                            <button onClick={togglePreViewMode} className="flex items-center gap-2 py-2 px-4 border border-opacity-50 uppercase font-semibold text-sm border-white rounded-lg text-white">
                                <span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg></span>Preview
                            </button>

                        </>
                    )
                    }

                </div>
            </nav>
                {
                    isPreviewMode ? (
                        <div className={` container xl:max-w-screen-${width} mx-auto my-24`}>
                            {children}
                        </div>
                    ) : (
                        <div className="">
                            <CodeSyntaxHighlighter codeString={reactElementToJSXString(children)} />
                        </div>
                    )
                }
        </>
    )
}

