let wallet = 0;
let message = document.getElementById("message");


function updateWallet() {
  wallet++;
  document.getElementById("wallet").textContent = wallet;
}

setInterval(updateWallet, 1000);


function buyCookie(cost) {
  if (wallet &gt;= cost) {
    wallet -= cost;
    document.getElementById("wallet").textContent = wallet;
    message.textContent = `You bought a cookie for ${cost} points!`;
}