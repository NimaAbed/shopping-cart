const shortString = (string) => {
    const sliped = string.split(" ")
    const result = `${sliped[0]} ${sliped[1]}`
    return result
}

const totals = (state) => {
    const count = state.itemSelected.reduce((total, count) => total + count.quentity, 0)
    const total = state.itemSelected.reduce((total, count) => total + count.quentity * count.price, 0)

    console.log(count)

    return { itemCounter: count, total: total }
}

const findProduct = (product, id) => {
    const result = product.itemSelected.find(item => item.id == id)

    return result
}


export { shortString, totals, findProduct }