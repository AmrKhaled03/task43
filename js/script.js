document.addEventListener("DOMContentLoaded", () => {
  let links = document.querySelectorAll("a");
  links.forEach((element) => {
    element.addEventListener("click", (e) => {
      links.forEach((el) => {
        el.classList.remove("active");
      });
      setTimeout(() => {
        e.target.classList.add("active");
      }, 2000);
    });
  });
});
