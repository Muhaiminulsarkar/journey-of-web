console.log('chesk');

const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;

    productField.value = "";
    quantityField.value = "";

    console.log(product, quantity);

    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);

}

const displayProduct = (product, quantity) => {
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`
    const container = document.getElementById('product-container');
    container.append(li);
}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();

    cart[product] = quantity;
    const cartToString = JSON.stringify(cart);
    localStorage.setItem('cart', cartToString);

}

const displayProductFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    console.log(savedCart);
    for (let product in savedCart) {
        const quantity = savedCart[product];
        console.log(product , quantity);

        displayProduct(product,quantity);

    }
}

displayProductFromLocalStorage()