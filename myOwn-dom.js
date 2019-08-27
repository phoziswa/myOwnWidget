var radioBtnElement = document.querySelector(".radio");
var addBtnElement = document.querySelector(".addBtn");
var countElement = document.querySelector(".count");


instance = PartiesFactory()

function votes() {
  var checkedRadioBtn = document.querySelector("input[name='party']:checked");
  if (checkedRadioBtn) {
    var chosedParty = checkedRadioBtn.value;
    instance.vote(chosedParty)
    var countSelector = ".count." + chosedParty;
    document.querySelector(countSelector).innerHTML = instance.voteCountForParty(chosedParty)
  }

}
addBtnElement.addEventListener('click', votes);