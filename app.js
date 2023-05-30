const progress = document.querySelector(".progress");
const loading = document.querySelector(".loading");

const uploads = [0, 10, 25, 40, 42, 60, 70, 75, 90, 100];

let i = 0;
const interval = setInterval(() => {
  progress.style.width = uploads[i] + "%";
  loading.innerHTML = uploads[i] + "%";
  i++;
  console.log(i);
  if (i == uploads.length) {
    clearInterval(interval);
    loading.innerHTML = "completed";
  }
}, 1000);
