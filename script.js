let money = 0;
let mineValue = 1
const elementResult = document.getElementById("money");
elementResult.innerHTML = `Money: $${money}\nMine value: $${mineValue}`;

function Mine() {
  money += mineValue;
  elementResult.innerHTML = `Money: $${money}\nMine value: $${mineValue}`;
  clicks += 1
}

function WoodUpgrade() {
  if (money >= 10) {
    mineValue += 1
    money -= 10
    elementResult.innerHTML = `Money: $${money}\nMine value: $${mineValue}`;
  }
}

function StoneUpgrade() {
  if (money >= 100) {
    mineValue += 5
    money -= 100
    elementResult.innerHTML = `Money: $${money}\nMine value: $${mineValue}`;
  }
}

function IronUpgrade() {
  if (money >= 1000) {
    mineValue += 25
    money -= 1000
    elementResult.innerHTML = `Money: $${money}\nMine value: $${mineValue}`;
  }
}

function GoldUpgrade() {
  if (money >= 10000) {
    mineValue += 150
    money -= 10000
    elementResult.innerHTML = `Money: $${money}\nMine value: $${mineValue}`;
  }
}

function DiamondUpgrade() {
  if (money >= 50000) {
    mineValue += 800
    money -= 50000
    elementResult.innerHTML = `Money: $${money}\nMine value: $${mineValue}`;
  }
}

function PlatinumUpgrade() {
  if (money >= 200000) {
    mineValue += 4000
    money -= 200000
    elementResult.innerHTML = `Money: $${money}\nMine value: $${mineValue}`;
  }
}

function BedrockUpgrade() {
  if (money >= 500000) {
    mineValue += 15000
    money -= 500000
    elementResult.innerHTML = `Money: $${money}\nMine value: $${mineValue}`;
  }
}