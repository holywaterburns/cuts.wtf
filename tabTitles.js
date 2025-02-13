const tabTitles = [
    "trap",
    "finesse",
    "cult",
    "runs this bitch",
    "@pr0pblood",
];

let index = 0;

function updateTabTitle() {
    document.title = tabTitles[index];
    index = (index + 1) % tabTitles.length;
}

updateTabTitle();

setInterval(updateTabTitle, 500);
