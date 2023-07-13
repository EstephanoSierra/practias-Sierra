function truthCheck(collection, pre) {
  return collection.every((obj) => obj[pre]);
}

const result = truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
console.log(result);