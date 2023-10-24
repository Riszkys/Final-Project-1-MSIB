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
