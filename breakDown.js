var products = [
    { phoneName: 'iphone', price: 8000 },
    { phoneName: 'xioami', price: 7000 },
    { phoneName: 'nokia', price: 9000 },
    { phoneName: 'samsung', price: 4000 },
    { phoneName: 'oppo', price: 6000 },
];
for (const product of products) {
    if (product.price < 5000) {
        continue;
    }
    console.log(product);
}