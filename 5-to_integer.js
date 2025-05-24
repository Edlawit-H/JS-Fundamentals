let arg=process.argv[2];
let newarg=parseInt(arg);
if (isNaN(newarg)){
    console.log("Not a number");
}else {
    console.log("My number: " + newarg);
}