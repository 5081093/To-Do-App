let input= document.getElementById("inp");
let text=document.querySelector(".text");

function Add(){
    if(input.value==""){
        alert("Please Enter Task");
    }else{
        let newEle=document.createElement("ul");
        newEle.innerHTML=`${input.value} <i class="fa fa-trash-o" aria-hidden="true"></i>
   
        `;
        text.appendChild(newEle);
         input.value="";

         newEle.querySelector("i").addEventListener("click" , remove);
         function remove(){
            newEle.remove()
         }
    }
}