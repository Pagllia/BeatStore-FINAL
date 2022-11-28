import { useEffect, useState } from "react";
import { getProducts} from "../api/products";
import { ItemContainer } from "../components/ItemContainer";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts([]);
    setLoading(true);
    getProducts()
      .then((items) => {
        setProducts(items);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
      <main className="content">
        <ItemContainer products={products} loading={loading} />
      </main>
      
  );
};
