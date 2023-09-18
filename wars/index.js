const battingbutton = document.getElementById("batting")
const resetbutton = document.getElementById("restart")
const total_scoreteam1 = document.getElementById("totalscore-team1")
const total_scoreteam2 = document.getElementById("totalscore-team2")
const wickets_team1 = document.getElementById("wickets-team1")
const wickets_team2 = document.getElementById("wickets-team2")

var totalscore_team1 = 0;
var totalscore_team2 = 0;
var totalwickets_team1 = 0;
var totalwickets_team2 = 0;
var totalballs = 0;
var totalballs2 = 0;
var toss = 1;

const runs = ["W", 1, 2, 3, 4, 5, 6, 0]

resetbutton.onclick = ()=>{
    window.location.reload();
}


function update(){
    total_scoreteam1.textContent = totalscore_team1;
    wickets_team1.textContent = totalwickets_team1;
    total_scoreteam2.textContent = totalscore_team2;
    wickets_team2.textContent = totalwickets_team2;
}

function gameover(){
    if(totalscore_team1>totalscore_team2){
        alert("IND wins!")
    }
    if(totalscore_team2>totalscore_team1){
        alert("PAK wins!")
    }
    if(totalscore_team1 == totalscore_team2){
        alert("There is a tie")
    }
}



battingbutton.onclick = () =>{
    const randomNum = runs[Math.floor(Math.random()*8)]
    
    if(toss === 2){
        totalballs2++;
        document.querySelector(`#team2score div:nth-child(${totalballs2})`).textContent = randomNum

        if(randomNum === "W"){
            totalwickets_team2++;
        }else{
            console.log(randomNum)
            totalscore_team2 += randomNum

            
        }
        if(totalballs2 == 6 || wickets_team2 == 2 || total_scoreteam2>total_scoreteam1){
            toss = 3;
            gameover();
        }
    }
    if(toss === 1){
        totalballs++;
        // console.log(totalballs)
        document.querySelector(`#team1score div:nth-child(${totalballs})`).textContent = randomNum

        if(randomNum === "W"){
            totalwickets_team1++;
        }else{
            totalscore_team1 += randomNum

            
        }
        if(totalballs == 6 || wickets_team1 == 2){
            toss = 2;
        }
    }
    update();
   




}







// for(let i= 0; i<=3; i++){
//     var sum = 0;
//     sum+=i
//     console.log(sum)
// }



// console.log(document.getElementById("team1score").innerHTML)
// console.log(document.getElementById("team1score").innerText)
// console.log(document.getElementById("team1score").textContent)

// console.log("hello world totalballs")


// add(4, 5) //function calling
// add(5, 7)

// function add(num1, num2){ //function definition  def add(a, b):
//     console.log(num1+num2)
// }

// const name = "sdf"
// const name = "gfh" //redeclaration
// name = "jhsdv "  reassignment

// var num = 0
// console.log(num)
// num = 2 //reassignmnet
// console.log(num)
// var num = 5 //redeclaration
// console.log(num)

// let num1 = 4;
// console.log(num1)
// num1 = 8;
// console.log(num1)
// // let num1  = 1;
// // console.log(num1)


// var num3 = 5;
// console.log(num3++) //post increment

// console.log(++num3) //pre increment
// num3 = 7;
// console.log(num3)
// const num3 = 4;
// console.log(num3)


  




// document.getElementById("someid").addEventListener("click", function(){
     // anonymous functions
// }, 3rd value)


// function changecolor(){
//    
// }





// const random = Math.random()*1000
// console.log(Math.floor(random))