const ramenMenu = [
  { name: "醤油ラーメン", price: "¥800" },
  { name: "味噌ラーメン", price: "¥850" },
  { name: "豚骨ラーメン", price: "¥900" },
  { name: "辛味噌ラーメン", price: "¥950" }
];

function displayMenu() {
  const container = document.getElementById("menu");
  ramenMenu.forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `<h3>${item.name}</h3><p>${item.price}</p>`;
    container.appendChild(div);
  });
}

function showModal(src) {
  const modal = document.getElementById("modal");
  const img = document.getElementById("modal-img");
  img.src = src;
  modal.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("menu")) displayMenu();

  const galleryImages = document.querySelectorAll(".gallery-img");
  galleryImages.forEach(img => {
    img.addEventListener("click", () => showModal(img.src));
  });

  const closeBtn = document.getElementById("close-modal");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      document.getElementById("modal").style.display = "none";
    });
  }

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("予約フォーム送信:", form.name.value);
      alert("ご予約ありがとうございます！");
    });
  }
});