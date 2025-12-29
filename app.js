let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
  document.getElementById("cartCount").innerText = cart.length;
  localStorage.setItem("cart", JSON.stringify(cart));
}

updateCart();

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

document.getElementById("cartBtn").addEventListener("click", () => {
  document.getElementById("checkout").classList.toggle("hidden");
});

function placeOrder() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!name || !phone || !address) {
    alert("Please fill in all fields");
    return;
  }

  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.push({
    id: Date.now(),
    customer: { name, phone, address },
    items: cart,
    time: new Date().toLocaleString()
  });

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.removeItem("cart");
  cart = [];
  updateCart();

  alert("Order placed successfully!");
}
