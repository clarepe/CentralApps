 
  document.addEventListener("DOMContentLoaded", function() {
    const h1Image = document.querySelector(".imagem-H1");
    const dynamicText = document.createElement("div");
    dynamicText.id = "dynamic-text";
    dynamicText.textContent = "Aproveite nossos apps";
    h1Image.parentElement.appendChild(dynamicText);

    h1Image.addEventListener("mouseover", function() {
      dynamicText.style.display = "block";
    });

    h1Image.addEventListener("mouseout", function() {
      dynamicText.style.display = "none";
    });
  });
 
