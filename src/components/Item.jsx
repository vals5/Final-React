import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
    <div className="producto">
      <img src={producto.img} alt={producto.nombre} />
      <div>
        <h4>{producto.nombre}</h4>
        <p>Precio: € {producto.precio}</p>
        <p>Categoria: {producto.categoria}</p>
        <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
      </div>
    </div>
  )
}

export default Item
