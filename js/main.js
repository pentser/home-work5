let $textBoxAmount = document.querySelector("#id_type");
let $listOfCoins = document.querySelector("#id_list");
let $translateButton = document.querySelector("#translate");

$translateButton.addEventListener("click", () => {
  //validation
  if ($textBoxAmount.value === "") {
    console.error("שדה ריק ,הכנס ערך של שקלים");
 
  }

  console.log("Heelo:" +  $listOfCoins.value);
  if (
    $listOfCoins.value !== "dolar" ||
    $listOfCoins.value !== "uro" ||
    $listOfCoins.value !== "sterling"
  ) {
    console.error("ערך לא חוקי הכנס דולר|יורו|סטרלינג בלבד");
    
  }

  let dolarRate = 3.9;
  let uroRate = 4.2;
  let sterlingRate = 5.0;

  if ($listOfCoins.value === "dolar")
    alert(parseFloat($textBoxAmount.value) / dolarRate + " דולר");
  else if ($listOfCoins.value === " יורו")
    alert(parseFloat($textBoxAmount.value) / uroRate + " יורו");
  else {
    alert(parseFloat($textBoxAmount.value) / sterlingRate + " סטרלינג");
  }
});
