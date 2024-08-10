import { mod1function,mod1function2 } from "./mod1.js";
// import { mod1function as fun1} from "./mod1.js";
// import * as obj from "./mod1.js"
const testFucntion=()=>
{
   // console.log("In the main fun")
    // fun1();
    // obj.mod1function2();
    document.getElementById("isalive").addEventListener("click",()=>mod1function2())
}
testFucntion();