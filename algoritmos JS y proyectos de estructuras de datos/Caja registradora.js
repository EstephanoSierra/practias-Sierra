function checkCashRegister(price, cash, cid) {
  const currencyUnits = [
    { name: "PENNY", value: 0.01 },
    { name: "NICKEL", value: 0.05 },
    { name: "DIME", value: 0.1 },
    { name: "QUARTER", value: 0.25 },
    { name: "ONE", value: 1.0 },
    { name: "FIVE", value: 5.0 },
    { name: "TEN", value: 10.0 },
    { name: "TWENTY", value: 20.0 },
    { name: "ONE HUNDRED", value: 100.0 }
  ];

  let changeDue = cash - price;
  let change = [];

  let totalCashInDrawer = cid.reduce((total, currency) => total + currency[1], 0.0);
  totalCashInDrawer = Math.round(totalCashInDrawer * 100) / 100;

  if (totalCashInDrawer < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalCashInDrawer === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  for (let i = currencyUnits.length - 1; i >= 0; i--) {
    const currencyName = currencyUnits[i].name;
    const currencyValue = currencyUnits[i].value;
    let currencyAvailable = cid[i][1];
    let currencyUsed = 0;

    while (changeDue >= currencyValue && currencyAvailable > 0) {
      changeDue -= currencyValue;
      changeDue = Math.round(changeDue * 100) / 100;
      currencyAvailable -= currencyValue;
      currencyUsed += currencyValue;
    }

    if (currencyUsed > 0) {
      change.push([currencyName, currencyUsed]);
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: change };
}

console.log(
  checkCashRegister(
    19.5,
    20,
    [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ]
  )
);
