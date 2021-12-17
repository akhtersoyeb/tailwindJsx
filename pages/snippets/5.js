import SnippetLayout from "../../components/SnippetLayout";

export default function banner_1() {
    return (
        <SnippetLayout>
        <div className="bg-indigo-600 flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between sm:items-center px-2 md:px-4 py-2 text-white md:m-3 md:rounded-lg">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-indigo-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
            </div>
            <p className="ml-3 font-medium truncate flex-1">
              <span className="md:hidden"> We announced a new product! </span>
              <span className="hidden md:inline"> Big news! We're excited to announce a brand new product. </span>
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:hidden" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex items-center gap-3">
            <a className="px-4 py-2 w-full text-center text-indigo-500 bg-white rounded-md" href="#">Learn more</a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hidden sm:inline" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        </SnippetLayout>
    )
}
