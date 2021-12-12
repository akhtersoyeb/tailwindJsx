import SnippetLayout from "../../components/SnippetLayout"

export default function pricing_plan_1() {

    return (
        <SnippetLayout>
            <div className="container mx-auto px-3 py-20">
                <div className="flex flex-col gap-7">
                    <h1 className="text-6xl font-bold text-center">Pricing Plans</h1>
                    <p className="text-slate-600 text-xl text-center">Start building for free, then add a site plan to go live. Account plans unlock additional features.</p>
                    <div className="flex items-center bg-slate-200 mx-auto w-fit rounded-md p-0.5">
                        <button className="px-4 py-2 bg-white rounded-md">Monthly billing</button>
                        <button className="px-4 py-2 text-gray-600">Yearly billing</button>
                    </div>
                </div>

                <div className="my-20 max-w-sm grid-cols-1 gap-y-5  grid md:grid-cols-3 md:gap-x-5 md:max-w-4xl mx-auto ">
                    <div className="flex flex-col gap-6 border rounded-xl w-fit p-6 shadow-md shadow-slate-300/30">
                        <div className="flex flex-col gap-7">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl">Hobby</h3>
                                <p className="text-sm text-slate-600">All the basics for starting a new business</p>
                            </div>
                            <p className="text-slate-500 font-medium"><span className="text-4xl font-semibold text-black">$0</span>/mo</p>
                            <button className="bg-black text-white font-medium py-2 w-full rounded-lg">Buy Hobby</button>
                        </div>
                        <div>
                            <p className="uppercase mb-4">What&apos;s Included</p>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p className="text-sm text-slate-500">Potenti fell, in cras at ligula nunc and what else you want</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p className="text-sm text-slate-500">Potenti fell, in cras at ligula nunc</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 border rounded-xl w-fit p-6 shadow-md shadow-slate-300/30">
                        <div className="flex flex-col gap-7">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl">Golden</h3>
                                <p className="text-sm text-slate-600">All the basics for starting a new business</p>
                            </div>
                            <p className="text-slate-500 font-medium"><span className="text-4xl font-semibold text-black">$9</span>/mo</p>
                            <button className="bg-black text-white font-medium py-2 w-full rounded-lg">Buy Golden</button>
                        </div>
                        <div>
                            <p className="uppercase mb-4">What&apos;s Included</p>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p className="text-sm text-slate-500">Potenti fell, in cras at ligula nunc and what else you want</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p className="text-sm text-slate-500">Potenti fell, in cras at ligula nunc</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p className="text-sm text-slate-500">Potenti fell, in cras at ligula nunc</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 border rounded-xl w-fit p-6 shadow-md shadow-slate-300/30">
                        <div className="flex flex-col gap-7">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl">Premium</h3>
                                <p className="text-sm text-slate-600">All the basics for starting a new business</p>
                            </div>
                            <p className="text-slate-500 font-medium"><span className="text-4xl font-semibold text-black">$24</span>/mo</p>
                            <button className="bg-black text-white font-medium py-2 w-full rounded-lg">Buy Premium</button>
                        </div>
                        <div>
                            <p className="uppercase mb-4">What&apos;s Included</p>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p className="text-sm text-slate-500">Potenti fell, in cras at ligula nunc and what else you want</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p className="text-sm text-slate-500">Potenti fell, in cras at ligula nunc</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p className="text-sm text-slate-500">Potenti fell, in cras at ligula nunc</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p className="text-sm text-slate-500">Potenti fell, in cras at ligula nunc</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </SnippetLayout>
    )
}
