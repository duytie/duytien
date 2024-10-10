const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questionPrompt = document.querySelector(".question-prompt");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Tuyệt quá, em đồng ý rồi 😁😁😁😁";
  gif.src = "https://anhdephd.vn/wp-content/uploads/2022/05/hinh-gif-cam-on-de-thuong.gif";

  // Cập nhật kích thước hình ảnh
  gif.style.width = "auto";  // Tự động điều chỉnh chiều rộng
  gif.style.maxWidth = "100%";  // Giới hạn chiều rộng tối đa để không vượt quá chiều màn hình
  gif.style.height = "auto";  // Giữ nguyên tỷ lệ khung hình

  // Ẩn cả hai nút Yes và No
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  questionPrompt.style.display = "none"; // Ẩn dòng chữ khi người dùng nhấn vào nút Yes
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Cập nhật vị trí của nút "Không đồng ý"
  noBtn.style.position = "absolute"; // Đảm bảo nút có thể di chuyển tự do
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
