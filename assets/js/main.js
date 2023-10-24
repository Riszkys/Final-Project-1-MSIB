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
