menuListArray = ["Pizza Vegetariana",
               "Pizza Vegetariana"
               "Pizza Quatro Queijos"
               "Pizza de Frango"
               "Pizza Portuguêsa"
               "Pizza de Calabresa"
               "Pizza Extravaganza"];

function getMenu(){
var htmldata="";
menuListArray.sort();
i}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.lenght;i++){
    htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
}
document.getElementById("displayAddedMenu").innerHTML=htmldata;
}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}