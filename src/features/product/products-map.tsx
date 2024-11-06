import { useGetAllProductsQuery } from "../products-api";
import EachProductCard from "./products";

function ProductMap() {
  const { data } = useGetAllProductsQuery();

  return (
    <div className="flex flex-wrap justify-center gap-2 ">
      {data?.map((products) => (
        <div key={products.id}>
          <EachProductCard key={products.id} product={products} />
        </div>
      ))}
    </div>
  );
}
export default ProductMap;
