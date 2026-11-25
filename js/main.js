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