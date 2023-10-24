const inputbox = document.getElementById("input-box"); //object js
const listcontainer = document.getElementById("list-container"); //object js

function addTask() {
  //function atau method
  if (inputbox.value === "") {
    //simbol ===
    alert("Masukkan Pesan Anda !!");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
  inputbox.value = "";
}

listcontainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  const tasks = Array.from(listcontainer.querySelectorAll("li"));
  const data = tasks.map((task) => task.outerHTML).join("");
  localStorage.setItem("data", data);
}

function showTask() {
  const data = localStorage.getItem("data");
  if (data) {
    listcontainer.innerHTML = data;
  }
}
showTask();

document.addEventListener("DOMContentLoaded", function () {
  const allLink = document.getElementById("all");
  const sistemInformasiLink = document.getElementById("sistem_informasi");
  const profilLink = document.getElementById("profil");
  const workList = document.querySelectorAll(".work");

  allLink.addEventListener("click", function (e) {
    e.preventDefault();
    filterWorks("all");
  });

  sistemInformasiLink.addEventListener("click", function (e) {
    e.preventDefault();
    filterWorks("sistem_informasi");
  });

  profilLink.addEventListener("click", function (e) {
    e.preventDefault();
    filterWorks("profil");
  });

  // filter function
  function filterWorks(category) {
    workList.forEach(function (work) {
      //foreach
      if (category === "all" || work.id === category) {
        work.style.display = "block";
      } else {
        work.style.display = "none";
      }
    });
  }
});

const noOption = document.getElementById("noOption");
const yesOption = document.getElementById("yesOption");
const optionAnswer = document.getElementById("optionAnswer");

function clickOption() {
  optionAnswer.classList.add("show");
  noOption.style.visibility = "hidden";
  yesOption.style.visibility = "hidden";
}

// ternary operaror
function getAnswer(theAnswer) {
  return theAnswer
    ? "Mantap, hubungi kami untuk informasi lebih lanjut."
    : "Baik, kami hargai keputusan Anda.";
}
noOption.addEventListener("click", function () {
  optionAnswer.innerHTML = getAnswer(false);
});
yesOption.addEventListener("click", function () {
  optionAnswer.innerHTML = getAnswer(true);
});

// navbar
const navbar = `

<div class="navbar-top">
  <div class="container">
    <div class="row">
      <div class="col-md-3 text-start text">
        <i class="fa-solid fa-phone"></i>
        <a href="#" style="text-decoration: none; color: aliceblue"
          >+628598899120</a
        >
      </div>
      <div class="col-md-5 text-start text">
        <i class="fa-brands fa-instagram"></i>
        <a
          href="https://www.instagram.com/"
          style="text-decoration: none; color: aliceblue"
          >My Instagram</a
        >
      </div>
      <div class="col text-end text">
        <i class="fa-brands fa-instagram"></i>
        <a
          href="https://www.instagram.com/"
          style="text-decoration: none; color: aliceblue"
          >Follow Us</a
        >
      </div>
    </div>
    <div></div>
  </div>
  </div>
  <section>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" id="homeLink" href="/index.html">Home</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="portfolioLink"
                href="/portofolio/portofolio.html"
                >Portofolio</a
              >
            </li>
            <li class="nav-item">
              <a class "nav-link" id="aboutLink" href="/about/about.html">About Us</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="contactLink"
                href="/contact/contact.html"
                >Contact Us</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link todo_list"
                id="todoListLink"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                >Todo List</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</div>
`;

document.getElementById("navbar-container").innerHTML = navbar;
