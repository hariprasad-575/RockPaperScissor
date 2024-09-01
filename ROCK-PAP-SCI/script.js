let userscore=0
let compscore=0

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const genComCh=()=>{
    const ch=["rock","paper","scissor"]
    let id=Math.floor(Math.random()*3);
    return ch[id];
}
const drawgame=()=>{
    console.log("Game draw")
    msg.innerText="Draw."
    document.querySelector(".emoji").innerText="🫂"
    msg.style.backgroundColor="#0D1321"
}
const usercsorecard=document.getElementById("myscore");
const compcsorecard=document.getElementById("compscore");
const displaywin=(user,usch,cmch)=>{
    if(user){
        userscore++
        usercsorecard.innerText=userscore
        console.log("YOU WONN")
        msg.innerText=`You won! your ${usch} beats  Computers ${cmch}`
        msg.style.backgroundColor="green"
        document.querySelector(".emoji").innerText=`🥳`
        
    }
    else{
        compscore++
        compcsorecard.innerText=compscore
        console.log("COMPUTER WINN")
        msg.innerText=`You Lose. Computers ${usch} beats your ${cmch}`
        document.querySelector(".emoji").innerText=`😭`
        msg.style.backgroundColor="red"
    }
}
const playgame=(userch)=>{
    console.log("User choice =",userch);
    const comp=genComCh();
    console.log("Computer choice =",comp);
    if(userch===comp){
        drawgame();
    }
    else{
        let user=true;
        if(userch==="rock"){
            user=comp==="paper"?false:true;
        }
        else if(userch==="paper"){
            user=comp==="scissor"?false:true;
        }
        else{
            user=comp==="rock"?false:true;
        }
        displaywin(user,userch,comp);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})
document.querySelector("a").addEventListener("click",()=>{
    usercsorecard.innerText=0;
    compcsorecard.innerText=0;
    msg.innerText="Play your move"
    msg.style.backgroundColor="#0D1321"
    document.querySelector(".emoji").innerText=""
    
})