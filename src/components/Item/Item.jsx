import { useNavigate } from "react-router-dom";
import "./Item.scss";
import { useCartContext } from "../../context/cartContext";
import { Button } from "../Button";

const Item = ({ id, precio, imagen, bpm, year, song, categoria,artist,album }) => {
  const navigate = useNavigate();
  const {addProduct} = useCartContext();
 

return (
  <div className={"item"} onClick={() => navigate(`/product/${id}`)}>
    <div className="item__top">
      <img src={imagen} alt="CoverIMG" />
      <span className="item__price">${precio}</span>
      <span className="item__bpm">{bpm}</span>
      <span className="item__year">{year}</span>
    </div>
    <div
      className="item__content"
      onClick={() => alert("Presiono contenido")}
    >
      <span className="item__name">{song} - "{year}"</span>
      <span className="item__name">{artist}</span>
      <span className="item__category">{categoria}</span>
      <span className="item__category">{album}</span>
      
      <Button
        onClick={(e) => {
          e.stopPropagation();
          addProduct({id, song, precio, categoria,artist, imagen}, 1)
        }}
      >
        Añadir al carrito
      </Button>
    </div>
  </div>
);
      }
export default Item;
