var emocao = 0;
var idade = 0;
var bagunceiro = 0;
var protetor = 0;

var redação = 0;
var legal = ["cobra", "gato", "hamster", "rato", "papagaio", "passaro"];
var sigmabro = ["sigma", "skibidi", "skibidi toilet", "67", "42", "mewing"];
var pontos = ["fofinho", "valente", "heroi", "cuidador", "carente", "ajudante", "ajudador", "maneiro", "descolado", "engraçado", "bonitinho", "dahora", "bobinhos"];

const ok = document.getElementById("legenda2");
const envia = document.getElementById("legenda");
const pastel = document.getElementById("pontos");

document.getElementById("bravo").addEventListener("click", function() {
    emocao = 200;
    console.log(emocao);
});

document.getElementById("feliz").addEventListener("click", function() {
    emocao = 450;
    console.log(emocao);
});

document.getElementById("triste").addEventListener("click", function() {
    emocao = 320;
    console.log(emocao);
});


///////////////////////////////////////////////////////////////////////

document.getElementById("15").addEventListener("click", function() {
    idade = 340;
    console.log(idade);
});

document.getElementById("630").addEventListener("click", function() {
    idade = 450;
    console.log(idade);
});

document.getElementById("3050").addEventListener("click", function() {
    idade = 500;
    console.log(idade);
});

document.getElementById("6m").addEventListener("click", function() {
    idade = 130;
    console.log(idade);
});

///////////////////////////////////////////////////////////////////////

    document.getElementById("c1").addEventListener("click", function() {
        bagunceiro = 15;
        console.log(bagunceiro);
    });

document.getElementById("c2").addEventListener("click", function() {
    bagunceiro = -20;
    console.log(bagunceiro);
});

document.getElementById("c3").addEventListener("click", function() {
    bagunceiro = 50;
    console.log(emocao + bagunceiro + idade);
});

///////////////////////////////////////////////////////////////////////

document.getElementById("d1").addEventListener("click", function() {
    protetor = 150;
    console.log(protetor);
});

document.getElementById("d2").addEventListener("click", function() {
    protetor = 300;
    console.log(protetor);
});

document.getElementById("d3").addEventListener("click", function() {
    protetor = 450;
    console.log(protetor);
});

document.getElementById("d3").addEventListener("click", function() {
    protetor = -200;
});

document.getElementById("legenda").addEventListener("click", function() {

    if (ok.value.includes("legal") || ok.value.includes("LEGAL")) {
        redação += 300;
        console.log("nic");
    }
    if (ok.value.includes("otimo") || ok.value.includes("OTIMO")) {
        redação += 300;
        console.log("nic");
    }
    if (ok.value.includes("amigo") || ok.value.includes("AMIGO") || ok.value.includes("amigavel") || ok.value.includes("amigavel")) {
        redação += 600;
        console.log("nic");
    }
        if (ok.value.includes("protetor") || ok.value.includes("PROTETOR")) {
        redação += 600;
        console.log("nic");
    }
    if (ok.value.includes("corre")) {
        redação += 600;
        console.log("nic");
    }

        if (ok.value.includes("forte")) {
        redação += 600;
        console.log("nic");
    }

    if (ok.value.includes("esperto")) {
        redação += 600;
        console.log("nic");
    }

    if (legal.some(word => ok.value.includes(word))) {
        redação += -439234894889120893129831289312093;
        console.log("morre");
    }

    if (sigmabro.some(word => ok.value.includes(word))) {
        redação += 670000000;
    }

    if (pontos.some(word => ok.value.includes(word))) {
        redação += 320;
    }

    if (ok.value.includes("porque")) {
        redação += 100;
        console.log("ok");
    }

    envia.style.setProperty("pointer-events", "none");

    console.log(redação);
    console.log(legal);
    document.getElementById("legenda2").value = "";
});

var score = 0;
var textozinho = "oi";

document.getElementById("botao").addEventListener("click", function() {
    score = emocao + bagunceiro + idade + protetor + redação;

    if (score >= 1500) {
        textozinho = "seu cãozinho passou!";
        pastel.style.setProperty("color", "rgb(49, 230, 64)");
        pastel.style.setProperty("-webkit-text-stroke", "0.5px rgb(28, 73, 32)");
        
    }
    else {
        textozinho = "seu cachorro não passou :(";
        pastel.style.setProperty("color", "rgb(255, 0, 0)");
        pastel.style.setProperty("-webkit-text-stroke", "0.5px rgb(107, 37, 37)");
    }

    document.getElementById("botao").style.setProperty("pointer-events", "none");
    document.getElementById("pontos").textContent = textozinho + " sua pontução foi de " + score;
});