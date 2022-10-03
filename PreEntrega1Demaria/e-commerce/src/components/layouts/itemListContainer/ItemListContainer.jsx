export const buscarStock = async () => {
    const response = await fetch('../json/stock.json')
    const productos = await response.json()
    return productos
}