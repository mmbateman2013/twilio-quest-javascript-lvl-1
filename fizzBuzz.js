let n = Number(process.argv[2]);
let out = "";

if (n % 3 === 0) {
    out += "Java";
}

if (n % 5 === 0) {
    out += "Script";
}

console.log(out === "" ? n : out);