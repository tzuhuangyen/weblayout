// import flatpickr from "flatpickr";
document.addEventListener("DOMContentLoaded", function () {
  // 在頁面載入完成後執行以下代碼

  // 獲取日期選擇器的input元素
  const datePickerInput = document.getElementById("datepicker");

  // 初始化日期選擇器
  flatpickr(datePickerInput, {
    dateFormat: "Y-m-d", // 日期格式
    minDate: "today", // 最小可選日期為今天
    disableMobile: true, // 在移動設備上禁用內置日期選擇器
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
