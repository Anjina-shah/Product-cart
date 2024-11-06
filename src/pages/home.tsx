import ProductMap from "../features/product/products-map";
import NavBar from "../components/navbar";
function Home() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <NavBar />
      <ProductMap />
    </div>
  );
}

export default Home;
