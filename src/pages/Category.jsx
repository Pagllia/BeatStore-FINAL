import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemContainer } from "../components/ItemContainer";
import { getProducts } from "../api/products";


export const Category = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts([]);
    setLoading(true);
    getProducts(categoryId)
      .then((items) => {
        setProducts(items);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [categoryId]);

  return (
    <>
      <div className="content">
        <h2 >
          The best songs of <div>{categoryId.toUpperCase()}</div>
        </h2>
      </div>
      <main className="content">
        <ItemContainer products={products} loading={loading} />
      </main>
    </>
  );
};
