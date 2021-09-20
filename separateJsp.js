const searchBtn = document.querySelector(".header_search");
const menu = document.querySelector(".header_menu");
const icons = document.querySelector(".search_icon");

searchBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});

// 검색기능
function enterSearch() {
  if(event.keyCode == 13){
      myFunction();  // 실행할 이벤트
  }
}
function myFunction() {
  var x = document.getElementById("text").value;
  window.location.href = "http://cybertramp.net/search/"+x;
}