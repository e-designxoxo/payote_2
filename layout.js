const currentPage = window.location.pathname.split("/").pop() || "index.html";

const navHTML = `
  <nav class="project-nav">
    <div class="pnav-inner">
      <a href="index.html" class="pnav-brand">PAYOTE</a>
      <a href="homepage.html" class="pnav-link ${currentPage === "homepage.html" ? "active" : ""}">Store</a>
      <a href="products.html" class="pnav-link ${currentPage === "products.html" ? "active" : ""}">Products</a>
      <a href="currency_selector.html" class="pnav-link ${currentPage === "currency_selector.html" ? "active" : ""}">Currency</a>
      <a href="shoe_size.html" class="pnav-link ${currentPage === "shoe_size.html" ? "active" : ""}">Shoe sizes</a>
      <a href="payment_shipping_returns.html" class="pnav-link ${currentPage === "payment_shipping_returns.html" ? "active" : ""}">Payment & Shipping</a>
    </div>
  </nav>
`;

document.addEventListener("DOMContentLoaded", () => {
  const navTarget = document.getElementById("project-nav");
  if (navTarget) {
    navTarget.innerHTML = navHTML;
  }
});
