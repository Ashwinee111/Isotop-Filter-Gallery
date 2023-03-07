// console.log("omm nama sivaya");

let text = document.querySelectorAll(".text");
let imageBox = document.querySelectorAll(".image-box");

text.forEach((i) => {
  i.addEventListener("click", function () {
    text.forEach((j) => {
      j.classList.remove("active");
    });
    this.classList.add("active");

    let valueStore = this.getAttribute("data-value");

    imageBox.forEach((k) => {
      k.classList.add("hide");
      k.classList.remove("active");

      if (k.getAttribute("data-set") == valueStore || valueStore == "All") {
        k.classList.remove("hide");
      } else {
        k.classList.add("active");
      }
    });
  });
});
