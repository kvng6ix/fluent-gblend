function hashStringToNumber(str, min, max) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash % (max - min + 1)) + min;
}

document.getElementById("check").addEventListener("click", function () {
  const username = document.getElementById("username").value.trim();
  if (username) {
    const count = hashStringToNumber(username, 5, 200);
    const resultText = `@${username} has said "gblend" ${count} times.`;
    document.getElementById("result").innerText = resultText;

    // Share button logic
    const shareBtn = document.getElementById("share");
    const shareText = encodeURIComponent(`${resultText} Check yours at https://yourapp.vercel.app`);
    shareBtn.onclick = () => {
      window.open(`https://twitter.com/intent/tweet?text=${shareText}`, "_blank");
    };
  }
});
