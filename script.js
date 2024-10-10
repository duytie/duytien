const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questionPrompt = document.querySelector(".question-prompt");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Tuyệt quá, em đồng ý rồi 😁😁😁😁";
  question.style.fontSize = "30px"; 
  gif.src = "https://anhdephd.vn/wp-content/uploads/2022/05/hinh-gif-cam-on-de-thuong.gif";
  gif.style.width = "500px";  // Ảnh sẽ tự động điều chỉnh kích thước theo CSS
  gif.style.height = "auto";
  // Ẩn cả hai nút Yes và No
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  questionPrompt.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
