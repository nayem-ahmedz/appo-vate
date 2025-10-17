function getCart(){
    const storedCart = localStorage.getItem('appsId');
    if(storedCart){
        const cart = JSON.parse(storedCart);
        return cart;
    } else{
        return [];
    }
}

function addToCart(appId){
    const cart = getCart();
    const newCart = [...cart, appId];
    updateCart(newCart);
}

const removeFromCart = appId => {
    const cart = getCart();
    const filteredCart = cart.filter(item => item !== appId);
    updateCart(filteredCart);
}

const updateCart = (cart) => {
    const newCart = JSON.stringify(cart);
    localStorage.setItem('appsId', newCart);
}

export { getCart, addToCart, removeFromCart };