let money = 0;
let mineValue = 1
const elementResult = document.getElementById("money");
elementResult.innerHTML = `Money: $${money}\nMine value: $${mineValue}`;

function Mine() {
  money += mineValue;
  elementResult.innerHTML = `Money: $${money}\nMine value: $${mineValue}`;
}

function WoodUpgrade() {
  if (money >= 5) {
    mineValue += 0.25
    money -= 5
    elementResult.innerHTML = `Money: $${money}\nMine value: $${mineValue}`;
  }
}