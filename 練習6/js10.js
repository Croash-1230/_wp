function calculateTotal(cart, discountFunc) {
    let total = cart.reduce((sum, price) => sum + price, 0);

    return discountFunc(total);
}

const result = calculateTotal(
    [100, 200, 300],
    function (total) {
        return total - 50;
    }
);

console.log(result);
