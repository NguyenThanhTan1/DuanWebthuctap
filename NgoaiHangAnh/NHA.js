// Đặt ngày và giờ đếm ngược (ngày/tháng/năm giờ:phút:giây)
const countdownDate = new Date("2024-08-17T00:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        document.querySelector(".countdown").innerHTML = "EXPIRED";
        return;
    }

    // Tính toán thời gian còn lại
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Cập nhật nội dung của các ô
    document.querySelector(".Day").textContent = String(days).padStart(2, '0');
    document.querySelector(".Hour").textContent = String(hours).padStart(2, '0');
    document.querySelector(".Minute").textContent = String(minutes).padStart(2, '0');
    document.querySelector(".Second").textContent = String(seconds).padStart(2, '0');
}

// Cập nhật đếm ngược mỗi giây
setInterval(updateCountdown, 1000);

// Cập nhật ngay lập tức khi trang được tải
updateCountdown();
