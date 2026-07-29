import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaSearch, FaShoppingBag } from "react-icons/fa";
import BrandLogo from "../components/BrandLogo";

const products = [
  { id: 1, name: "Pro Boxing Gloves", price: 1899, category: "Training gear", image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=85" },
  { id: 2, name: "Fitness Dumbbells", price: 1199, category: "Strength", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=85" },
  { id: 3, name: "Speed Jump Rope", price: 699, category: "Cardio", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=85" },
  { id: 4, name: "Training Kettlebell", price: 1499, category: "Strength", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=85" },
];

function Shop() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All products");
  const [cart, setCart] = useState([]);

  const visibleProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = category === "All products" || product.category === category;
    return matchesCategory && product.name.toLowerCase().includes(query.toLowerCase());
  }), [category, query]);

  function addToCart(product) {
    setCart((items) => [...items, product]);
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const categories = ["All products", "Cardio", "Training gear", "Strength"];

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#202020]">
      <header className="border-b border-zinc-200 bg-white px-5 py-5 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
          <Link to="/" aria-label="Fitness Gym home">
            <BrandLogo className="h-16 w-24" />
          </Link>
          <div className="flex items-center gap-4 text-sm font-semibold sm:gap-7">
            <Link to="/" className="hidden hover:underline sm:block">Home</Link>
            <Link to="/plans" className="hidden hover:underline sm:block">Plans</Link>
            <Link to="/contacts" className="hidden hover:underline sm:block">Contacts</Link>
            <span className="flex items-center gap-2 rounded-full bg-[#ff4657] px-4 py-2 text-white"><FaShoppingBag /> {cart.length}</span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:px-12 lg:grid-cols-[1fr_290px]">
        <section>
          <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#ff4657]">Gym shop</p>
              <h1 className="text-4xl font-extrabold sm:text-5xl">Training essentials</h1>
            </div>
            <p className="text-sm text-zinc-500">{visibleProducts.length} products</p>
          </div>

          <div className="mb-8 grid gap-4 sm:grid-cols-[1fr_auto]">
            <label className="flex items-center gap-3 rounded-lg border border-zinc-300 bg-white px-4 py-3">
              <FaSearch className="text-zinc-400" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search for products..." className="w-full outline-none" />
            </label>
            <select value={category} onChange={(event) => setCategory(event.target.value)} className="rounded-lg border border-zinc-300 bg-white px-4 py-3 font-medium outline-none">
              {categories.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>

          {visibleProducts.length ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {visibleProducts.map((product) => (
                <article key={product.id} className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-square overflow-hidden bg-white">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <button className="absolute right-4 top-4 rounded-full bg-white p-3 shadow transition hover:text-[#ff4657]" aria-label={`Save ${product.name}`}><FaHeart /></button>
                  </div>
                  <div className="p-5">
                    <p className="mb-2 text-sm text-zinc-500">{product.category}</p>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-xl font-bold">{product.name}</h2>
                        <p className="mt-2 text-lg font-semibold">₹{product.price.toLocaleString()}</p>
                      </div>
                      <button onClick={() => addToCart(product)} className="shrink-0 rounded-lg bg-[#ff4657] p-3 text-white transition hover:bg-[#e63c4c]" aria-label={`Add ${product.name} to cart`}><FaShoppingBag /></button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : <p className="rounded-xl bg-white p-8 text-center text-zinc-500">No products match your search.</p>}
        </section>

        <aside className="h-fit rounded-xl bg-white p-6 shadow-sm lg:sticky lg:top-6">
          <h2 className="mb-5 text-2xl font-extrabold">Cart</h2>
          {cart.length ? (
            <>
              <ul className="space-y-4 border-b border-zinc-200 pb-5">
                {cart.map((item, index) => <li key={`${item.id}-${index}`} className="flex items-center justify-between gap-4 text-sm"><span>{item.name}</span><strong>₹{item.price.toLocaleString()}</strong></li>)}
              </ul>
              <div className="flex justify-between py-5 font-bold"><span>Total</span><span>₹{total.toLocaleString()}</span></div>
              <Link to="/contacts" className="block rounded-lg bg-[#ff4657] px-5 py-3 text-center font-bold text-white transition hover:bg-[#e63c4c]">Proceed to enquiry</Link>
            </>
          ) : <p className="text-zinc-500">No products in the cart.</p>}

          <h3 className="mb-4 mt-10 text-xl font-extrabold">Categories</h3>
          <ul className="space-y-3 text-zinc-600">
            {categories.slice(1).map((item) => <li key={item}><button onClick={() => setCategory(item)} className="transition hover:text-[#ff4657] hover:underline">{item}</button></li>)}
          </ul>
        </aside>
      </div>
    </main>
  );
}

export default Shop;
