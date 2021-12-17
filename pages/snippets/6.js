import SnippetLayout from "../../components/SnippetLayout";

export default function contact_form_1() {
    return (
        <SnippetLayout>
            <div className="max-w-lg mx-auto">
  <h1 className="text-center font-semibold text-3xl mb-2">Contact sales</h1>
  <p className="text-center text-slate-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero consectetur adipiscing elit</p>
  <form className="flex flex-col gap-3" action="">
    <div className="grid grid-cols-2 gap-6">
      <div className="flex flex-col">
        <label className="text-sm text-slate-700" htmlFor="firstName">First name</label>
        <input className="border border-slate-200 focus:outline-none rounded-md px-4 py-2 text-sm text-slate-700" id="firstName" type="text" />
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-slate-700" htmlFor="lastName">Last name</label>
        <input className="border border-slate-200 focus:outline-none rounded-md px-4 py-2 text-sm text-slate-700" id="lastName" type="text" />
      </div>
    </div>

    <div className="flex flex-col gap-1">
      <label className="text-sm text-slate-700" htmlFor="company">Company</label>
      <input className="border border-slate-200 focus:outline-none rounded-md px-4 py-2 text-sm text-slate-700" id="company" type="text" />
    </div>
    <div className="flex flex-col gap-1">
      <label className="text-sm text-slate-700" htmlFor="email">Email</label>
      <input className="border border-slate-200 focus:outline-none rounded-md px-4 py-2 text-sm text-slate-700" id="email" type="text" />
    </div>
    <div className="flex flex-col gap-1">
      <label className="text-sm text-slate-700" htmlFor="phoneNumber">Phone Number</label>
      <input className="border border-slate-200 focus:outline-none rounded-md px-4 py-2 text-sm text-slate-700" placeholder="+91 123-456-7890" id="phoneNumber" type="text" />
    </div>
    <div className="flex flex-col gap-1">
      <label className="text-sm text-slate-700" htmlFor="message">Message</label>
      <textarea className="border border-slate-200 focus:outline-none rounded-md px-4 py-2 text-sm text-slate-700" rows="5"></textarea>
    </div>
    <div className="flex gap-3 items-center">
      <label className="text-sm text-slate-700 order-last" htmlFor="checkbox">By selecting this, you agree to the Privacy Policy and Cookie Policy</label>
      <input className="h-4 w-4" id="checkbox" type="checkbox" />
    </div>
    <button className="mt-4 text-white text-center bg-indigo-600 text-sm w-full py-3 rounded-md hover:bg-indigo-500">Let&apos;s talk</button>
  </form>
</div>

        </SnippetLayout>
    )
}
