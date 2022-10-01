// while loop
let count =  1;

console.log("WHILE LOOP");
while (count <= 5) {
     console.log(count);
     count++;
}

count = 0
console.log("DO WHILE LOOP");
do {
    console.log(count);
    count++;
} while (count <= 5)


console.log("FOR LOOP");
for(let i = 0; i <= 5; i++) {
    console.log(i);
}

console.log("BREAK");
let s = '';
count = 0;
while (count <= 10) {
    s += `${count} `;
    count++;
    if (count == 5) {
        break;
    }
}
console.log(s);

console.log("CONTINUE");
s = '';
for(let i = 0; i < 10; i++) {
    if (i % 2 == 1) {
        continue;
    }
    s += `${i} `;
}
console.log(s);

console.log("BREAK WITH LABEL");
outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i + j == 4) {
        break outer;
      }
      console.log(i, j);
    }
}