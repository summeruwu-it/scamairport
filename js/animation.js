const config = {
  threshold: 0,     // 10% phần tử xuất hiện là kích hoạt
  rootMargin: "50px 0px -30px 0px",  // Có thể đổi thành "0px 0px -50px 0px" để chạy sớm hơn
  animateOnce: false, // ❗ Đặt false nếu muốn chạy lại mỗi khi cuộn
};

const hiddenElements = document.querySelectorAll(".muc,.demuc,.topmot,.tophai,hr,.card,.item,.chuy,.noidungabout,.chitietabout, .contentthongbao");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      // 👇 Chỉ chạy nếu animateOnce = false
      if (!config.animateOnce) {
        entry.target.classList.remove("show");
      }
    }
  });
}, {
  threshold: config.threshold,
  rootMargin: config.rootMargin,
});

hiddenElements.forEach(el => observer.observe(el));

/* Hiển thị/hide gợi ý cuộn trong muc-menu */

