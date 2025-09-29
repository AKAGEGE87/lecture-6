// Create three functions:
function downloadMovie1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Movie 1 downloaded");
    }, 1000);
  });
}

function downloadMovie2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Movie 2 downloaded");
    }, 2000);
  });
}
function downloadMovie3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Movie 3 downloaded");
    }, 3000);
  });
}

//    Part A - Sequential
async function downloadPage() {
  const movie1 = await downloadMovie1();
  console.log(movie1);

  const movie2 = await downloadMovie2();
  console.log(movie2);

  const movie3 = await downloadMovie3();
  console.log(movie3);
}

downloadPage();

// Part B – Parallel with Promise.all

async function downloadAll() {
  const movieAll = await Promise.all([
    downloadMovie1(),
    downloadMovie2(),
    downloadMovie3()
  ]);
  console.log(movieAll);
}

downloadAll();

// Part C – Fastest with Promise.race

async function downloadRase() {
  const movieRace = await Promise.race([
    downloadMovie1(),
    downloadMovie2(),
    downloadMovie3()
  ]);
  console.log(movieRace);
}

downloadRase();
