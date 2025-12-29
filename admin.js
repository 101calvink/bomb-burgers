const orders = JSON.parse(localStorage.getItem("orders")) || [];
const container = document.getElementById("orders");

if (orders.length === 0) {
  container.innerHTML = "<p>No orders yet.</p>";
}

orders.reverse().forEach(order => {
  const div = document.createElement("div");
  div.className = "item";

  div.innerHTML = `
    <h3>Order #${order.id}</h3>
    <p><strong>${order.customer.name}</strong></p>
    <p>${order.customer.phone}</p>
    <p>${order.customer.address}</p>
    <ul>
      ${order.items.map(i => `<li>${i.name} (£${i.price})</li>`).join("")}
    </ul>
    <small>${order.time}</small>
  `;

  container.appendChild(div);
});
