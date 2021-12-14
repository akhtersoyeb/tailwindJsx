import SnippetLayout from "../../components/SnippetLayout";

export default function demo() {
    return (
        <SnippetLayout>
            <div className="my-24">
                <h1 className="text-center mb-8 text-4xl font-bold">From the blog</h1>
                <p className="text-center mb-8 max-w-md mx-auto text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                <div className="max-w-screen-lg  grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
                    <div className="rounded-xl mx-auto overflow-hidden shadow-lg w-96 md:w-auto">
                        <img className="w-full h-40 object-fill" src="https://picsum.photos/200" />
                        <div className="p-3">
                            <p className="text-sm text-purple-700 font-medium">Article</p>
                            <h3 className="text-lg text-gray-800 font-semibold">Boost your conversation rate</h3>
                            <p className="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                            <div className="mt-10 flex gap-2">
                                <img className="w-9 h-9 rounded-full" src="https://picsum.photos/200" />
                                <div>
                                    <p className="text-sm">Rorel Akhte</p>
                                    <p className="text-slate-500 text-sm">Mar 12, 2020 &#183; 6 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl mx-auto overflow-hidden shadow-lg w-96 md:w-auto">
                        <img className="w-full h-40 object-fill" src="https://picsum.photos/200" />
                        <div className="p-3">
                            <p className="text-sm text-purple-700 font-medium">Article</p>
                            <h3 className="text-lg text-gray-800 font-semibold">Boost your conversation rate</h3>
                            <p className="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                            <div className="mt-10 flex gap-2">
                                <img className="w-9 h-9 rounded-full" src="https://picsum.photos/200" />
                                <div>
                                    <p className="text-sm">Rorel Akhte</p>
                                    <p className="text-slate-500 text-sm">Mar 12, 2020 &#183; 6 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl mx-auto overflow-hidden shadow-lg w-96 md:w-auto">
                        <img className="w-full h-40 object-fill" src="https://picsum.photos/200" />
                        <div className="p-3">
                            <p className="text-sm text-purple-700 font-medium">Article</p>
                            <h3 className="text-lg text-gray-800 font-semibold">Boost your conversation rate</h3>
                            <p className="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                            <div className="mt-10 flex gap-2">
                                <img className="w-9 h-9 rounded-full" src="https://picsum.photos/200" />
                                <div>
                                    <p className="text-sm">Rorel Akhte</p>
                                    <p className="text-slate-500 text-sm">Mar 12, 2020 &#183; 6 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </SnippetLayout>
    )
}
