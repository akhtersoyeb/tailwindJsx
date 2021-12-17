import SnippetLayout from "../../components/SnippetLayout";

export default function brand_feature_card_1() {
    return (
        <SnippetLayout>
            <div className="container mx-auto py-8 flex flex-col items-center gap-4 bg-gradient-to-br from-indigo-600 to-indigo-900 text-white rounded-xl">
  <h1 className="text-2xl font-semibold text-center">Trusted by developer from over 80 planets</h1>
  <p className="filter opacity-80 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
  <div className="flex items-center gap-8">
    <div className="flex flex-col items-center">
      <h3 className="text-5xl font-bold">100%</h3>
      <p className="filter opacity-80 text-sm">Uptime</p>
    </div>
    <div className="flex flex-col items-center">
      <h3 className="text-5xl font-bold">24/7</h3>
      <p className="filter opacity-80 text-sm">Delivery</p>
    </div>
    <div className="flex flex-col items-center">
      <h3 className="text-5xl font-bold">100k+</h3>
      <p className="filter opacity-80 text-sm">Customers</p>
    </div>
  </div>
</div>

        </SnippetLayout>
    )
}
