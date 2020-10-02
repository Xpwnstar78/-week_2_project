function fight() {
  let monster = prompt("What's'the name of the monster you're fighting?");
  let hero = prompt("What's the name of the hero you're fighting?");

  let monsterHealth = 50;
  let heroHealth = 50;

  heroDiceRoll = Math.floor(Math.random() * 20);

  monsterDiceRoll = Math.floor(Math.random() * 20);
  if ((heroDiceRoll = 1 || 2)) {
    heroHealth - 5;
    alert(`${hero} has accidently stabbed himself for 5 HP!`);
  }
  if ((monsterDiceRoll = 1 || 2)) {
    monsterHealth - 5;
    alert(`${monster} has accidently stabbed himself for 5 HP!`);
  }
  if (heroDiceRoll > 3 && heroDiceRoll < 10) {
    alert(`${hero} has missed the attack.`);
  }
  if (monsterDiceRoll > 3 && monsterDiceRoll < 10) {
    alert(`${monster} has missed the attack.`);
  }
  if (monsterDiceRoll > 11 && monsterDiceRoll < 18) {
    heroHealth - 10;
    alert(`You have damaged ${hero} for 10 HP!`);
  }
  if (heroDiceRoll > 11 && heroDiceRoll < 18) {
    monsterHealth - 10;
    alert(`You have damaged ${monster} for 10 HP!`);
  }
  if ((monsterDiceRoll = 19 || 20)) {
    heroHealth - 20;
    alert(`You have crit ${hero} for 20 Damage!`);
  }
  if ((heroDiceRoll = 19 || 20)) {
    monsterHealth - 20;
    alert(`You have crit ${monster} for 20 Damage!`);
  }
  alert(`${hero} has ${heroHealth} health left.`);
  alert(`${monster} has ${monsterHealth} health left.`);
}

fight();
