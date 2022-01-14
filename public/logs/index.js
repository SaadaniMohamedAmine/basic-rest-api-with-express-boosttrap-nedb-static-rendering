console.log("Start working !!");

getUsers();
async function getUsers() {
  const response = await fetch("/users");
  const data = await response.json();
  const root = document.getElementById("row");
  data.users.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("col-md-6", "col-lg-3", "item");
    div.innerHTML = `<div class="box"><img class="rounded-circle" src=${
      item.avatar ?? "../assets/no-one.png"
    }>
    <h3 class="name">${item.firstName}-${item.lastName}</h3>
    <p class="title">${item.job}</p>
    <p class="description">${item.intention}.</p>
    <p class="date">Member since: ${new Date(item.timestamp).toDateString()}</p>
    <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
</div>`;
    root.append(div);
  });
}
