let $textBoxAmount = document.querySelector("#id_type");
let $listOfCoins = document.querySelector("#id_list");
let $translateButton = document.querySelector("#translate");

$translateButton.addEventListener("click", () => {
  //validation
  if ($textBoxAmount.value === "") {
    console.error("empty field, Enter integer value for NIS amount");
    $textBoxAmount.value = 0;
  }

  console.log("Heelo:" + $listOfCoins.value);
  if (
    $listOfCoins.value !== "dolar" ||
    $listOfCoins.value !== "uro" ||
    $listOfCoins.value !== "sterling"
  ) {
    console.error("Invalid value write dolar|uro|");
  }

  let dolarRate = 3.9;
  let uroRate = 4.2;
  let sterlingRate = 5.0;

  if ($listOfCoins.value === "dolar")
    alert(parseFloat($textBoxAmount.value) / dolarRate + " dolar");
  else if ($listOfCoins.value === "uro")
    alert(parseFloat($textBoxAmount.value) / uroRate + " euro");
  else {
    alert(parseFloat($textBoxAmount.value) / sterlingRate + " sterling");
  }
});
