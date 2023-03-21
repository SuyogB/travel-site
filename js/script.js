let submit = document.querySelector(".submit");

submit.addEventListener("click", () => {
  var output = document.querySelector(".output");
  console.log(output);
 //storing the data in objects getting from form
  const data = {
    StartLoc: document.getElementById("start").value,
    WhereLoc: document.getElementById("where").value,
    Days: document.getElementById("days").value,
    Sdate: document.getElementById("sDate").value,
    Fdate: document.getElementById("fDate").value,
  };
  console.log(data);

  //Card Template
  let newlist = document.createElement("div");
//   newlist.classList.add("addData");
  newlist.innerHTML = `
      


<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="images/logo.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Enjoy your trip to ${data.WhereLoc} for ${data.Days} days.</h5>
    <p class="card-text">We will take care of everything , Go on and Explore the World</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Pickup:  ${data.StartLoc} on ${data.Sdate}</li>
    <li class="list-group-item">Drop:  ${data.WhereLoc} on ${data.Fdate}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Pay Now</a>
  </div>
</div>
      
    `;
  console.log(newlist);
  //adding the card one after the other
  output.appendChild(newlist);

  //clearing the input fields after submission
  let input = document.querySelectorAll("input");
  input.forEach((input) => {
    input.value = "";
  });
});
