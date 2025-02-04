var Coo = window.document.getElementById("Coo");
var Coos = window.document.getElementById("Coos");
var Cps = window.document.getElementById('Cps');
var Cpc = window.document.getElementById('Cpc');

var maiscpc = window.document.getElementById('comprarcpc');
var maiscps = window.document.getElementById('comprarcps');

var quantidadecoos = 0;
var somador = 1; // CPC
var dps = 1; // CPS

var valorcpc = parseInt(maiscpc.value);
var valorcps = parseInt(maiscps.value);

Coo.addEventListener('click', clicar);

maiscpc.addEventListener("click", () => {
    pegarValores();
    ganharcpc();
});

maiscps.addEventListener("click", () => {
    pegarValores();
    ganharcps();
});

function pegarValores() {
    valorcpc = parseInt(maiscpc.value);
    valorcps = parseInt(maiscps.value);
}

function ganharcpc() {
    if (valorcpc <= quantidadecoos) {
        somador++;
        quantidadecoos -= valorcpc;
        Coos.innerHTML = `Quantidade de Coos: ${quantidadecoos}`;
        console.log(`Você comprou CPC! Somador agora: ${somador}`);

        valorcpc = Math.floor(valorcpc + somador / 2);  
        maiscpc.value = valorcpc;
    }
}

function ganharcps() {
    if (valorcps <= quantidadecoos) {
        dps++;
        quantidadecoos -= valorcps;
        Coos.innerHTML = `Quantidade de Coos: ${quantidadecoos}`;
        console.log(`Você comprou CPS! Agora você ganha ${dps} Coos por segundo`);

        valorcps = Math.floor(valorcps + dps / 2);  
        maiscps.value = valorcps;
    }
}

function clicar() {
    quantidadecoos += somador;
    Coos.innerHTML = `Quantidade de Coos: ${quantidadecoos}`;
    Coo.style.backgroundColor = "rgb(189, 130, 201)";
    Coo.innerHTML = `+${somador}`;
    setTimeout(() => {
        Coo.style.backgroundColor = "rgb(239, 186, 250)";
    }, 75);
    setTimeout(() => {
        Coo.innerHTML = `Coo`;
    }, 1000);
}

// Coos por segundo (CPS)
setInterval(() => {
    quantidadecoos += dps;
    Coos.innerHTML = `Quantidade de Coos: ${quantidadecoos}`;
}, 1000);
