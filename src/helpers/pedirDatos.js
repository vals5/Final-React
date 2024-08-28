import data from "../data/productos.json"

export const pedirDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
    })
}

export const pedirItemPorId = () => {
    return new Promise ((resolve, reject) => {

        const item = data.find((el) => el.id === id);

        if (item) {
            resolve (item)
        } else {
            reject ({
                error: "No se encontró el producto"
            })
        }
    })
}