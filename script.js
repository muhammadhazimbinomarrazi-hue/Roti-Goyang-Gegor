let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart');
  cartList.innerHTML = '';
  cart.forEach(c => {
    const li = document.createElement('li');
    li.textContent = `${c.item} - RM${c.price.toFixed(2)}`;
    cartList.appendChild(li);
  });
  document.getElementById('total').textContent = total.toFixed(2);
}

document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Order dihantar! (Boleh sambung ke Google Sheet atau WhatsApp API)');
});
