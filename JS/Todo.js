var ul = document.getElementById("list");
var li;
let div = document.querySelector(".controls");

var addButton = document.getElementById("add").addEventListener("click",addItem);
var removeButton = document.getElementById("remove").addEventListener("click",removeItem);
var removeAllButton = document.getElementById("removeAll").addEventListener("click",removeAll);

function addItem(){
    var item = document.getElementById("input").value;
    var textNode = document.createTextNode(item);
    var errorValue = document.getElementById("error");
    if(item === ""){
        if(!errorValue.innerHTML) {
            var pTag = document.createElement("p") //Adding P tag
            pTag.setAttribute("id", "errorPara");
            var text = document.createTextNode("Todo cannot be Null") // creating text 
            pTag.appendChild(text); // merging P tag and text
            document.getElementById("error").appendChild(pTag); // where to be appended
            document.querySelector("p").style.color ="red";
            document.querySelector("p").style.fontWeight ="Bold";
            document.querySelector("p").style.fontSize ="25px";
        } else {
        }
    }else{
        var errorPara = errorValue.querySelector("p");
        if(errorPara) {
            errorPara.remove();
        }
        li = document.createElement("li"); // create li
        var input = document.createElement("input");
        input.type ="checkbox"; // crete checbox
        input.setAttribute("id","check"); // assigning id to checkbox
        
        var label = document.createElement("Label"); // Label created
        label.setAttribute("for","check"); // assigning for to label

        //Adding above elements to html file/web page -:

        ul.appendChild(li); //ul will hold now li
        li.appendChild(input); // checkbox is holding the input tag
        li.appendChild(label); // li will hold label
        label.appendChild(textNode); // will hold the input from user
        ul.insertAdjacentElement("afterbegin",li); // now we have to diplay the recent added todo on top
        //ul.insertBefore(li,ul.children[0]); 
        setTimeout(()=>{ //For some effects
            li.className="visual"; //class we cretaed in CSS
        },250);
        item =""; // to Clear the input field
    }
}

function removeItem(){
    li = ul.children;
    for (let index = 0; index < li.length; index++) { // for loop inorder to go through all indexs of li
        // const element = li[index];  // for cehcking the children and index of li
        // console.log(element);
        while (li[index] && li[index].children[0].checked) { //li[index] =  for checking the element && go theough the element index and do a search in children at index 0 and look for checked property
            ul.removeChild(li[index]) // remove the child of ul i.e li where the checked is found on that index
        }
    }
}

function removeAll(){
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index].children) {
            ul.removeChild(li[index])
        }
    }
}