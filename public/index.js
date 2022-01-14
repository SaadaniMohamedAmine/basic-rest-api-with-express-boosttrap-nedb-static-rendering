console.log("Start working !!");

let person = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  job: "",
  intention: "",
};

const inputs = document.querySelectorAll("input");
inputs.forEach((item) => {
  item.addEventListener("change", (e) => {
    person = { ...person, [e.target.name]: e.target.value };
  });
});

// Array.prototype.slice.call(forms).forEach(function (form) {
//   form.addEventListener(
//     "submit",
//     function (event) {
//       if (!form.checkValidity()) {
//         event.preventDefault();
//         event.stopPropagation();
//       }

//       form.classList.add("was-validated");
//     },
//     false
//   );
// });

// const form = document.getElementById("form");
// form.addEventListener("submit", getData, false);
// async function getData(e) {
//   e.preventDefault();
//   const options = {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify(person),
//   };
//   //validation
//   function validate(e) {
//     if (!form.checkValidity()) {
//       e.preventDefault();
//       e.stopPropagation();
//       console.log(form.checkValidity());
//     }
//     form.classList.add("was-validated");
//     console.log("Validation is complete  !!!");
//   }
//   validate(e);
//   console.log("yes");
//   // const response = await fetch("/users", options);
//   // const data = await response.json();
//   // data ? (window.location.href = "./logs/index.html") : alert("Bugs !!");
// }

const forms = document.querySelectorAll(".needs-validation");

Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener(
    "submit",
    async function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        const options = {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(person),
        };
        const response = await fetch("/users", options);
        const data = await response.json();
        data ? (window.location.href = "./logs/index.html") : alert("Bugs !!");
      }
      form.classList.add("was-validated");
    },
    false
  );
});

// function for uploading avatar with javascript
const avatar = document.querySelector("#avatar");
avatar.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display").style.height = "200px";
    document.querySelector("#display").style.width = "200px";
    document.querySelector(
      "#display"
    ).style.backgroundImage = `url(${uploaded_image})`;
    person.avatar = reader.result;
  });
  reader.readAsDataURL(this.files[0]);
});
