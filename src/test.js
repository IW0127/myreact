let n = 6;
let string = ""
for (let i = 1; i <= n; i++) {
    for (let k = i; k < n; k++) {
        string += "   ";
    }
    let x = (i * 2) / 2;
    let tep = [];
    for (let j = 1; j < (i * 2); j++) {
        if (x < j) {
            let k = j - x;
            tep.push(k);
            let kd = tep.sort(function (a, b) { return b - a });

            if (((i * 2) - 1) === j) {
                string += "  ";
                string += kd.toString().replaceAll(',', '  ');
            }
        }
        else {
            string += "  ";
            string += j;
        }
    }
    string += "\n";
}
for (let i = n - 1; i >= 1; i--) {
    for (let k = i; k < n; k++) {
        string += "   ";
    }
    let x = (i * 2) / 2;
    let tep = [];
    for (let j = 1; j < (i * 2); j++) {
        if (x < j) {
            let k = j - x;
            tep.push(k);
            let kd = tep.sort(function (a, b) { return b - a });

            if (((i * 2) - 1) === j) {
                string += "  ";
                string += kd.toString().replaceAll(',', '  ');
            }
        }
        else {
            string += "  ";
            string += j;
        }
    }
    string += "\n";
}
console.log(string);