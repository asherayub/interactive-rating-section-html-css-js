const ratingNumber = document.querySelectorAll(".rating-number");
let rated = null;
ratingNumber.forEach((number) =>
  number.addEventListener("click", (clickedNum) => {
    rated = clickedNum.target.id;
    ratingNumber.forEach((num) => {
      if (num.id <= rated) num.style.backgroundColor = "#fb7413";
      else num.style.backgroundColor = "#7c879855";
    });
  })
);
// for thankyou page
document.querySelector(".button button").addEventListener("click", () => {
  if (rated != null) {
    document.querySelector(".component").innerHTML = `
    <div class='thanks d-flex justify-content-center flex-column align-items-evenly text-center'>
        <div>
            <img src="./images/illustration-thank-you.svg" alt="" />
        </div>
        <p class='selected'>You selected ${rated}  out of 5 stars</p>
        <h1 class='fw-bold'>Thank You</h1>
        <p>We appreciate you taking the time to give a rating. If
        you ever need more support, don’t hesitate to get in touch!</p>
    </div>
    `;
  } else alert("Select a rating first!");
});
