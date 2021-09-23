// alert('The file is connect') //with alert we can check if the file is connected

const cvs = document.getElementById('canvas')
const ctx = cvs.getContext('2d');

const bird = new Image();
const bg = new Image(); //bg = background
const fg = new Image(); //fg = frontground
const pipeUp = new Image();
const pipeBottom = new Image();

bird.src = "/img/flappy.png";
bg.src = "/img/flappy_bg.png";
fg.src = "/img/flappy_bird_fg.png";
pipeUp.src = "/img/flappy_bird_pipeUp.png";
pipeBottom.src = "/img/flappy_bird_pipeBottom.png";

//music files
const fly = new Audio();
const scoreAudio = new Audio();

fly.src = "audio/fly.mp3"
scoreAudio.src = "audio/score.mp3"

const gap = 90;

//if pushing any key
document.addEventListener('keydown', moveUp); //on pushing any key we calling for moveUp function

function moveUp() {
    yPos -= 25;
    fly.play();
}

//create the blocks
const pipe = []; //array 

pipe[0] = { //object 1 
    x: cvs.width, //width of canvas
    y: 0 //standing on y=0
}

let score = 0;

//positiot of bird
let xPos = 10; //x position of bird
let yPos = 150; //y position of burd
let grav = 1.5; //grivitatio of bird +1 


function draw() { //print the img
    ctx.drawImage(bg, 0, 0); //draw backgroud

    for (let i = 0; i < pipe.length; i++) {

        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap) //stand in the middle of img + pipe heigth + gap betwen them

        pipe[i].x--; //every x minus 1

        if (pipe[i].x == 100) { //if x=100
            pipe.push({ //we creat new block
                x: cvs.width, //width of canvas - for creating the block outside the canvas
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height //random num * height of pipe - height of pipe
            })
        }

        if (xPos + bird.width >= pipe[i].x && //if x position plus width of bird biggr that position of pipe
            xPos <= pipe[i].x + pipeUp.width && //if x position smaller than position of pipe plus width of pipeUp
            (yPos <= pipe[i].y + pipe.height || //if y position smaller than position of pipe plus height of pipe
                yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || //if y position plus height of bird bigger than height pipeUp plus gap
            yPos + bird.height >= cvs.height - fg.height) { //if y position plus height of bird bigger than height of canvas minus height of frongground
            location.reload(); //reload the page
        }

        if (pipe[i].x == 5) { //if x position of pipe =5 we give ++ score (+1)
            score++;
            scoreAudio.play();
        }
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height) //height of canvas - height of frontground = 512-118 = 394 -> y=394
    ctx.drawImage(bird, xPos, yPos)

    yPos += grav; //falling the bird every +1
    requestAnimationFrame(draw); //calling for draw function and this is what do animation of falling

    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText('Score:' + score, 10, cvs.height - 20) //score x=10 y=height - 20

}

function hendleStart() { }
pipeBottom.onload = draw; //when pipeBottopn onload we callig for draw function