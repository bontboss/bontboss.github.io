let clicks = 0;
let multiplier = 1;
let price = 50;

function formatClicks(clicks) {
  if (clicks < 1e3) {
    return clicks.toString();
  } else if (clicks < 1e6) {
    return (clicks / 1e3).toFixed(1) + "K";
  } else if (clicks < 1e9) {
    return (clicks / 1e6).toFixed(1) + "M";
  } else if (clicks < 1e12) {
    return (clicks / 1e9).toFixed(1) + "B";
  } else if (clicks < 1e15) {
    return (clicks / 1e12).toFixed(1) + "T";
  } else if (clicks < 1e18) {
    return (clicks / 1e15).toFixed(1) + "Q";
  } else if (clicks < 1e21) {
    return (clicks / 1e18).toFixed(1) + "QT";
  } else if (clicks < 1e24) {
    return (clicks / 1e21).toFixed(1) + "S";
  } else if (clicks < 1e27) {
    return (clicks / 1e24).toFixed(1) + "SP";
  } else if (clicks < 1e30) {
    return (clicks / 1e27).toFixed(1) + "OC";
  } else if (clicks < 1e33) {
    return (clicks / 1e30).toFixed(1) + "NO";
  } else {
    return clicks.toString();
  }
}

function click() {
  clicks += 1 * multiplier;
  const clicksDisplay = document.querySelector(".clicksDisplay");
  clicksDisplay.textContent = `${formatClicks(clicks)} clicks`;
}

function multiply() {
  if (clicks >= price) {
    multiplier += 1;
    price = Math.round(price * 2);
    clicks = -price
    const clicksDisplay = document.querySelector(".clicksDisplay");
  clicksDisplay.textContent = `${formatClicks(clicks)} clicks`;
  } else {
    console.log("Cannot afford.");
  }

  const multDisplay = document.querySelector(".multiplierDisplay");
  multDisplay.textContent = `${multiplier}x multiplier / next will cost ${price} clicks`;
}

const clickButton = document.getElementById("click");
const multButton = document.getElementById("mult");
clickButton.addEventListener("click", click);
multButton.addEventListener("click", multiply);
