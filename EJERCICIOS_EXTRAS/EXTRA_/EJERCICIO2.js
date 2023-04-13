const price1 = 8;
// const ivaPrice1 = price1 * 1.21;
// const totalPrice1 = ivaPrice1 + 4.95;

const price2 = 20;
// const ivaPrice2 = price2 * 1.21;
// const totalPrice2 = ivaPrice2 + 4.95;

const calcularIVA = (price) => {
  const ivaPrice = price * 1.21;
  const totalPrice = ivaPrice + 4.95;
  return totalPrice;
};
console.log(calcularIVA(price1));
console.log(calcularIVA(price2));
