/* Xử lý sự kiện click vào card để cuộn và thêm lớp active */

const cards = document.querySelectorAll('.card');
const scrollContainer = document.querySelector('.scroll-container');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Nếu đã active rồi thì bỏ active (tùy bạn muốn toggle hay không)
    if (card.classList.contains('active')) {
      card.classList.remove('active');
      return;
    }

    // Xóa active khỏi card khác
    cards.forEach(c => c.classList.remove('active'));

    // Thêm active vào card được click
    card.classList.add('active');

    // Tính vị trí giữa card và giữa cửa sổ
    const containerRect = scrollContainer.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    // Tính khoảng scroll cần di chuyển để card nằm giữa màn hình
    const scrollLeft =
      scrollContainer.scrollLeft +
      (cardRect.left - containerRect.left) -
      (window.innerWidth / 2 - cardRect.width / 2);

    // Cuộn đến giữa
    scrollContainer.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
  });
});

/* Xử lý menu thả xuống trong mục */

document.addEventListener('DOMContentLoaded', function () {
  const danhSachMuc = document.querySelectorAll('.muc');

  danhSachMuc.forEach(muc => {
    const chinh = muc.querySelector('.muc-chinh');
    const menu = muc.querySelector('.muc-menu');

    chinh.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  });
});