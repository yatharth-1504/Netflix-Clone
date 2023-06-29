module.exports.getRandomList = (list, len) => {
  const ans = [];
  const count = Array(len).fill(0);

  for (let i = 0; i < Math.min(len, 10); i++) {
    let r = Math.floor(Math.random() * list.length);
    while (count[r] == 1) {
      r = Math.floor(Math.random() * list.length);
    }
    ans.push(list[r]);
    count[r] = 1;
  }

  return ans;
};
