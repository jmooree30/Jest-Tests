var caesar = function(str, amount) {
  if (amount < 0) {
    amount += 26;
  }
  before = [];
  var reg = /^[a-z]+$/i;
  for (i = 0; i < str.length; i++) {
    if (reg.test(str[i])) {
      before.push(str.charCodeAt(i));
    } else {
      before.push(str[i]);
    }
  }
  for (i = 0; i < before.length; i++) {
    if (before[i] >= 97 && before[i] <= 122) {
      before[i] = String.fromCharCode((before[i] - 97 + amount) % 26 + 97);
    } else if (before[i] >= 65 && before[i] <= 90) {
      before[i] = String.fromCharCode((before[i] - 65 + amount) % 26 + 65);
    }
  }
  return before.join("");
};

module.exports = caesar;