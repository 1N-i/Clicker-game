let money = 0;
let mineValue = 1
let clicks = 0
const elementResult = document.getElementById("money");
elementResult.innerHTML = `Money: $${money}\nMine value: $${mineValue}`;

function checkVictory() {
  if (money >= 1000000) {
    const winBtn = document.getElementById("win-btn");
    winBtn.style.display = "block";
  }
}

function updateDisplay() {
  elementResult.innerHTML = `Money: $${money}\nMine value: $${mineValue}`;
  checkVictory();
}

function Mine() {
  money += mineValue;
  updateDisplay()
  clicks += 1
}

function WoodUpgrade() {
  if (money >= 10) {
    mineValue += 1
    money -= 10
    updateDisplay()
  }
}

function StoneUpgrade() {
  if (money >= 100) {
    mineValue += 5
    money -= 100
    updateDisplay()
  }
}

function IronUpgrade() {
  if (money >= 1000) {
    mineValue += 25
    money -= 1000
    updateDisplay()
  }
}

function GoldUpgrade() {
  if (money >= 10000) {
    mineValue += 150
    money -= 10000
    updateDisplay()
  }
}

function DiamondUpgrade() {
  if (money >= 50000) {
    mineValue += 800
    money -= 50000
    updateDisplay()
  }
}

function PlatinumUpgrade() {
  if (money >= 200000) {
    mineValue += 4000
    money -= 200000
    updateDisplay()
  }
}

function BedrockUpgrade() {
  if (money >= 500000) {
    mineValue += 15000
    money -= 500000
    updateDisplay()
  }
}

function Victory() {
  if (money >= 1000000) {
    money -= 1000000
    elementResult.innerHTML = `You mined ${clicks} times`;
  }
}