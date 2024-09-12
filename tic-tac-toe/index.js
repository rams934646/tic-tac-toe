let boxes=document.querySelectorAll(".box");
let reeset=document.querySelector(".btn");
let newbtn11=document.querySelector(".new-btn");
let msg1=document.querySelector(".msg");
let content1=document.querySelector(".content");
let true0=true;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const reset=()=>{
     enablebtn();
     content1.classList.add("hide");
}
    boxes.forEach((box)=>{
     box.addEventListener("click",()=>{
        console.log("it was clicked");
       if(true0){
        box.style.color="red";
           box.innerText="O";
           true0=false;
       }else{
           box.style.color="green";
           box.innerText="X";
           true0=true;
       }
      box.disabled=true;
      checkWinner();
     });
    });

    const enablebtn=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    }
const distablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const showwinner=(winner)=>{
    msg1.innerText=`congratulations you won the game ${winner}`;
    content1.classList.remove("hide");
    distablebtn();
}

  const checkWinner=()=>{
    for(let position of winpattern){
     let pav1=boxes[position[0]].innerText;
     let pav2=boxes[position[1]].innerText;
     let pav3=boxes[position[2]].innerText;
     if(pav1!=""&pav2!=""&&pav3!=""){
        if(pav1===pav2&&pav2===pav3){
            console.log("winner ",pav1);
            showwinner(pav1);
        }
     }

    }
  }

  newbtn11.addEventListener("click",reset);
  reeset.addEventListener("click",reset);