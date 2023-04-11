let iteracion5 = (caras) => {
  return Math.ceil(Math.random() * caras);
};

for (let i = 0; i < 100; i++) {
  console.log(rollDice(6));
}
