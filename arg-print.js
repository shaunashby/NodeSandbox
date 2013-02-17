var sys = require("sys");
var args = process.argv;

try {
    args.forEach(function(val, idx, array) {
		     console.log(idx + ": " + val);
		 });
} catch (err) {
    console.log("ERROR: " + err);
}
