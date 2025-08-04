document.addEventListener("DOMContentLoaded", function () {
  const emailBtn = document.getElementById("emailBtn");
  const detailsCard = document.getElementById("detailsCard");

  emailBtn.addEventListener("click", () => {
    // Toggle visibility
    if (detailsCard.style.display === "block") {
      detailsCard.style.display = "none";
    } else {
      detailsCard.style.display = "block";
    }
  });
});
