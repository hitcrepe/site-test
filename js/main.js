const profileBtn = document.getElementById("profile-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

function openSidebar() {
  sidebar.classList.add("open");
  profileBtn.classList.add("active");
  profileBtn.setAttribute("aria-expanded", "true");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  profileBtn.classList.remove("active");
  profileBtn.setAttribute("aria-expanded", "false");
}

if (profileBtn && sidebar) {
  // EB click: toggle the sidebar
  profileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebar.classList.contains("open") ? closeSidebar() : openSidebar();
  });

  // X button: close
  if (closeBtn) closeBtn.addEventListener("click", closeSidebar);

  // Click anywhere outside the sidebar: close
  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !profileBtn.contains(e.target)) {
      closeSidebar();
    }
  });

  // Escape key: close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSidebar();
  });
}



const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalUser = document.getElementById("modal-user");
const commentsList = document.getElementById("comments");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");

// open the popup when a shelf is clicked
document.querySelectorAll(".shelf_one").forEach(function (img) {
    img.addEventListener("click", function () {
        modalImg.src = img.src;
        modalUser.textContent = img.dataset.user || "@user";
        modal.classList.add("open");
    });
});

function closeModal() {
    modal.classList.remove("open");
}

document.getElementById("modal-close").addEventListener("click", closeModal);

// click the dark background to close
modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
});

// Escape key closes it
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
});

// post a comment
commentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const text = commentInput.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    const name = document.createElement("strong");
    name.textContent = "you ";
    li.appendChild(name);
    li.appendChild(document.createTextNode(text));

    commentsList.appendChild(li);
    commentsList.scrollTop = commentsList.scrollHeight;
    commentInput.value = "";
});