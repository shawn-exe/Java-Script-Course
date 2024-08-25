function callbackfun(callback) {
    setTimeout(callback, 2000); 
}
  
function display() {
    console.log("Callback executed after 2 seconds");
};
  
callbackfun(display)