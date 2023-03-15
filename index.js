var xyz=document.querySelector(".container");
var youtuber=["Youtuber","Freelancer","Instructor"];
var i=0;
var y=0;
axyz()
function axyz(){
    i++
    xyz.textContent="I am "+(youtuber[y].slice(0,1)==="I"? "an ":"a ")+youtuber[y].slice(0,i);
    if(i==youtuber[y].length){
        i=0;
        y++;
        if(youtuber.length==y){
            y=0;
        }
    }
}   
setInterval(() => {
    axyz()
}, 400);


/* const containerEl = document.querySelector(".container");
const careers = ["YouTuber", "Web Devloper","Freelancer","Instructor"];
let careerIndex = 0;
let characterIndex= 0;
updateText()
function updateText(){characterIndex++;
    containerEl.innerHTML=`<h1>I am ${careers[careerIndex].slice(0,1)==="I" ? "an" : "a"} ${careers[careerIndex].slice(0,characterIndex)}</h1>`;

    if (characterIndex===careers[careerIndex].length){careerIndex++;
    characterIndex=0;}
    if(careerIndex===careers.length){
        careerIndex=0;
    }
    setTimeout(updateText,400);
}
 */








































