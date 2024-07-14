let boxes=document.querySelectorAll(".box")
let reset=document.querySelector(".reset")
console.log(boxes)
let won=document.querySelector("#win")
let turn0=true;
let wp=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
{
    if(turn0==true)
    {
        box.innerText="O";
        box.style.border="3px solid red";
        box.style.color="red";
        // box.style.font-weight="bold";
        turn0=false;
    }
    else
    {
        box.innerText="X";
        box.style.border="3px solid black";
        box.style.color="black";
        turn0=true;
    }
    box.disabled=true;
    checkwinner();
});
});
function checkwinner()
{
    let flag=0;
    wp.forEach((p)=>
{
    let p1=boxes[p[0]].innerText;
    let p2=boxes[p[1]].innerText;
    let p3=boxes[p[2]].innerText;
    if(p1!="" && p2!="" && p3!="")
    {
       if(p1==p2 && p2==p3)
       {
        console.log("winner"+p1);
        flag=1;
        won.innerText=p1+" IS THE WINNER";
        dis();
       }
    }
    // if(flag==0)
    // {
    //     let count=0;
    //     boxes.forEach((box)=>
    //     {
    //     if(box.innerText!="")
    //     {
    //         count=count+1;
    //     }
    //     });
    //     if(count==6)
    //     {
    //         won.innerText="!!!T.I.E!!!";
    //     }
    
    // }

})
}

let enable=()=>
{
    boxes.forEach((box)=>{
box.disabled=false;});
}
let dis=()=>
{
    boxes.forEach((box)=>
{
    box.disabled=true;
})
}
reset.addEventListener("click",()=>
{
    enable();
    boxes.forEach((box)=>
{
    box.innerHTML="";
    box.style.border="1px solid black";
})
turn0=true;
win.innerText="Hello";
})
