
//Numbers
const no_1 = document.getElementById("no_1");
const no_2 = document.getElementById("no_2");
const no_3 = document.getElementById("no_3");
const no_4 = document.getElementById("no_4");
const no_5 = document.getElementById("no_5");
const no_6 = document.getElementById("no_6");
const no_7 = document.getElementById("no_7");
const no_8 = document.getElementById("no_8");
const no_9 = document.getElementById("no_9");
const no_0 = document.getElementById("no_0");





//Signs
const sign_C = document.getElementById("sign_C");
const sign_x = document.getElementById("sign_x");
const sign_del = document.getElementById("sign_del");
const sign_percent = document.getElementById("sign_%");
const sign_div = document.getElementById("sign_div");


const sign_minus = document.getElementById("sign_-");
const sign_plus = document.getElementById("sign_+");
const sign_exc = document.getElementById("sign_exc");
const sign_decimal = document.getElementById("sign_.");
const equals = document.getElementById("equals");



//essentials
const box = document.getElementById("box");
const show = document.getElementById("answer_box")
let input =[]

//Codes


box.addEventListener("click",function(event){
    switch(event.target){

        
        
        case no_1:
            console.log("1")
            input.push("1")
            show.textContent=input.join("")
            
            break

        case no_2:
            console.log("2")
            input.push("2")
            show.textContent=input.join("")
            break
        case no_3:
            console.log("3")
            input.push("3")
            show.textContent=input.join("")
            break
        case no_4:
            console.log("4")
            input.push("4")
            show.textContent=input.join("")
            break
        case no_5:
            console.log("5")
            input.push("5")
            show.textContent=input.join("")
            break
        case no_6:
            console.log("6")
            input.push("6")
            show.textContent=input.join("")
            break
        case no_7:
            console.log("7")
            input.push("7")
            show.textContent=input.join("")
            break
        case no_8:
            console.log("8")

            input.push("8")
            show.textContent=input.join("")
            break
        case no_9:
            console.log("9")
            input.push("9")
            show.textContent=input.join("")
            

            break
        case no_0:
            console.log("0")
            input.push("0")
            show.textContent=input.join("")
            break

        case sign_C:
            console.log("Clear")
            input.length=0
            show.textContent=input.join("")
            break

        case sign_del:
            console.log("Delete")
            input.pop()
            show.textContent=input.join("")
            break

        case sign_percent:
            console.log("%")
            input.push("%")
            show.textContent=input.join("")
            break

        case sign_div:
            console.log("Division")
            input.push("/")
            show.textContent=input.join("")
            break

        case sign_x:
            console.log("Multiplication")
            input.push("*")
            show.textContent=input.join("")
            break

        case sign_minus:
            console.log("Subtraction")
            input.push("-")
            show.textContent=input.join("")

            break

        case sign_plus:
            console.log("Addition")
            input.push("+")
            show.textContent=input.join("")

            break

        case sign_exc:
            console.log("Exchange")
            show.textContent=input.join("")

            break

        case sign_decimal:
            console.log(".")
            input.push(".")
            show.textContent=input.join("")

            break

        case equals:
            console.log("Equals")
            let assemble =input.join("")
            let result = eval(assemble)
            console.log(result)
            show.textContent=result
            input=[]
            break

       

        
      

        


    }
})

