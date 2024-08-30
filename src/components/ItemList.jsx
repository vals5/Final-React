import Item from "./Item";
import {toCapital} from "../helpers/toCapital"

const ItemList = ({ productos, nombre }) => {
  return (
    <div className="container">
      <h2 className="main-title">{toCapital(nombre)}</h2>
      <div className="productos">
        {productos.map((prod) => <Item producto = {prod} key={prod.id}/>
        )}
      </div>
    </div>
  );
};

export default ItemList;
