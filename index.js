const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const PlayerSkin = new Image();
const GroundSkin = new Image();
PlayerSkin.src = 'jonanekxd.webp'
GroundSkin.src = 'Ground.png'
var Hrac = new Player();
const Zem = new Ground();
ctx.canvas.height = okno.lp;
ctx.canvas.width = okno.ln;
class Game {
    static Status = null;
    static StatusPoint = null;

    Render() { //TODO - Top fix
        Hrac.Render();
        ctx.beginPath();
        Zem.Render();



    }
    Restart() {
        //TODO restart
    }


}

const game = new Game();







function Render() {


    game.Render();
    requestAnimationFrame(Render);
}
Render(); //TODO Podmínku (Načtení img)


window.addEventListener("keydown", e => {
    if (e.keyCode == 32) {
        Hrac.Jump();
    }
})
