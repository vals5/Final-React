import Item from "./Item";
import {toCapital} from "../helpers/toCapital"

const ItemList = ({ productos }) => {
  return (
    <div className="container">
      <h2 className="main-title">PRODUCTOS</h2>
      <div className="productos">
        {productos.map((prod) => <Item producto = {prod} key={prod.id}/>
        )}
      </div>
    </div>
  );
};

export default ItemList;
