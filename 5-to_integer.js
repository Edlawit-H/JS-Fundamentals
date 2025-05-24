let arg=process.argv[2];
let newarg=parseInt(arg);
if (isNaN(newarg)){
    console.log("Not anumber");
}else {
    console.log(newarg);
}