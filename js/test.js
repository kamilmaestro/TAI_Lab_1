for(let i = 0; i <= 10; i++) {
    let row = '';
    for(let j = 0; j <= 10; j++) {
        row += formatRow(i, j);
    }
    row = getRow(row);
}
console.log('\n');

const digits = [...Array(11).keys()];
for(let i in digits) {
    let row = '';
    for(let j in digits) {
        row += formatRow(i, j);
    }
    row = getRow(row);
}
console.log('\n');

digits.map(i => {
    let row = '';
    digits.map(j => {
        row += formatRow(i, j);
    });
    row = getRow(row);
});

function formatRow(i, j) {
    return i * j + '\t';
}

function getRow(row) {
    console.log(row);
    return '';
}