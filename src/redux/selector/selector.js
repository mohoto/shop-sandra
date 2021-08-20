
const selectItems = state => state.cart.items;
export const selectCartTotal = (state) => {
    return selectItems(state)
    .map(item => item.price * item.quantity)
    .reduce((acc, it) => acc + it, 0)
} 