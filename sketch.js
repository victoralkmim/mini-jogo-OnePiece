let personagem;
let grama;
let recompensa;
let tamanho = 64;
let andarX = 0;
let andarY = 0;
let velocidade = 40;
let restartButton;

function setup() {
    createCanvas(576, 576);

    personagem = loadImage('imagens/person.png');
    grama = loadImage('imagens/grass.png');
    recompensa = loadImage('imagens/chest.png');
    pedra = loadImage('imagens/stone.png');
    arvore1 = loadImage('imagens/tree1.png');
    arvore2 = loadImage('imagens/tree2.png');
    inimigo = loadImage('imagens/enemy.png');
}

function draw() {
    limitaMovimento();

    background(220);

    desenhaCenario();

    image(recompensa, 520, 520, 50, 50);
    image(inimigo, 300, 280, 100, 100);
    image(personagem, andarX, andarY, tamanho, tamanho);

    if (andarX === tamanho * 8 && andarY === tamanho * 8) {
        gameOver();
    }
}

function limitaMovimento() {
    andarX = constrain(andarX, 0, tamanho * 8);
    andarY = constrain(andarY, 0, tamanho * 8);
}

function desenhaCenario() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            image(grama, tamanho * i, tamanho * j, tamanho, tamanho);
        }
    }

    const obstaculos = [
        { x: 50, y: 0 },
        { x: 0, y: 360 },
        { x: 510, y: 460 },
        { x: 460, y: 460 },
        { x: 250, y: 220 },
        { x: 320, y: 350 },
        { x: 100, y: 50 },
        { x: 100, y: 420 },
        { x: 420, y: 40 },
    ];

    for (const obstaculo of obstaculos) {
        image(pedra, obstaculo.x, obstaculo.y, tamanho, tamanho);
    }

    const arvores = [
        { x: 120, y: 270 },
        { x: 490, y: 410 },
        { x: 480, y: 10 },
        { x: 210, y: 120 },
        { x: 400, y: 120 },
        { x: 20, y: 480 },
    ];

    for (const arvore of arvores) {
        image(arvore1, arvore.x, arvore.y, tamanho, tamanho);
    }
}

function gameOver() {
    rect(160, 160, 256, 256);
    textSize(35);
    text('Ganhou!', 220, 300);

    restartButton = createButton('Reiniciar!');
    restartButton.mousePressed(reset);

    noLoop();
}

function reset() {
    andarX = 0;
    andarY = 0;

    if (restartButton) {
        restartButton.remove();
    }

    loop();
}

function keyPressed() {
    if (keyIsDown(UP_ARROW)) {
        andarY -= velocidade;
    }
    if (keyIsDown(DOWN_ARROW)) {
        andarY += velocidade;
    }
    if (keyIsDown(LEFT_ARROW)) {
        andarX -= velocidade;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        andarX += velocidade;
    }
}
