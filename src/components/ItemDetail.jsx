const ItemDetail = ({ item }) => {
  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.img} alt={item.nombre} />
      </div>
      <div>
        <h3 className="titulo">{item.nombre}</h3>
        <p className="descripcion">{item.desc}</p>
        <p className="precio">{item.precio}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
