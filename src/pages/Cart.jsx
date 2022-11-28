import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import { addOrder } from "../api/orders";
import { updateManyProducts } from "../api/products";
import { Button } from "../components/Button";

export const Cart = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const { getTotal, cart, emptyCart } = useCartContext();

  const createOrder = async () => {
    const items = cart.map(({ id, imagen, song, artist, qty, precio }) => ({
      id,
      imagen,
      title: song,
      qty,
      price: precio,
      artist: artist,
    }));

    const order = {
      buyer: { name, phone, email },
      items,
      total: getTotal(),
    };

    const id = await addOrder(order);

    await updateManyProducts(items);

    emptyCart();

    navigate("/");
  };
  return (
    <div className="content">
      {cart.map((product) => (
        <div
          className="cart__items"
          key={product.id}
          artist={product.artist}
          style={{
            display: "flex",
            gap: 50,
            height: 100,
            alignItems: "center",
            width: "60%",
            justifyContent: "space-between",
          }}
        >
          <div>
            <img
              src={product.imagen}
              width="80"
              height="80"
              alignItems="left"
              alt="CoverIMG"
            />
          </div>
          <div style={{ fontWeight: 700, display: "flex", gap: 50 }}>
            {product.song}
          </div>
          <div className="">{product.artist}</div>
          <div>Cantidad: {product.qty}</div>
        </div>
      ))}
      <span
        style={{
          marginBottom: 50,
          textAlign: "right",
          width: "100%",
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        ${getTotal()}
      </span>
      <div className="form" style={{ display: "grid", gap: 15 }}>
        <span>Nombre</span>
        <input
          className="form__input"
          onChange={(e) => setName(e.target.value)}
        />
        <span>Telefono</span>
        <input
          className="form__input"
          onChange={(e) => setPhone(e.target.value)}
        />
        <span>Email</span>
        <input
          className="form__input"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button onClick={createOrder}>Comprar</Button>
    </div>
  );
};
