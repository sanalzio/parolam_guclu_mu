let loader = document.getElementById("loadla");
let pb = document.getElementById("load");
let text = document.getElementById("text");
let data = false;
fetch('./wordlist.txt') // https://cors-anywhere.herokuapp.com/https://github.com/utkusen/turkce-wordlist/raw/master/wordlist.txt
    .then(response => response.text())
    .then(dat => {
        data = dat.split("\n");
        pb.innerHTML = "100%";
        loader.style.display = "none";
    })
const chars = ["a", "b", "c", "ç", "d", "e", "f", "g", "h", "ğ", "ı", "i", "j", "k", "l", "m", "n", "o", "ö", "p", "r", "s", "t", "u", "ü", "v", "y", "z", "x", "w"];
const ints = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function main() {
    let upass = document.getElementById("upass").value;
    let secure = 2;
    let charvar = false;
    let ivar = false;
    let denpass = upass;
    if (isNaN(upass)) { secure += 2; }
    for (let ci = 0; ci < chars.length; ci++) {
        const char = chars[ci];
        if (upass.toLocaleLowerCase("tr").includes(char) && charvar == false) { charvar = true; secure++; }
        denpass = denpass.replaceAll(char, "");
    }
    for (let ii = 0; ii < ints.length; ii++) {
        if (upass.includes(ints[ii]) && ivar == false) { ivar = true; secure++; }
        denpass = denpass.replaceAll(ints[ii], "");
    }
    denpass = denpass.trimStart();
    if (denpass.length > 0) { secure++; }
    if (upass.length > 7) { secure += 3; }
    let cpb = count => {
        pb.innerHTML = `${count.toString()}0%`;
    };
    text.innerHTML = 'Sızdırılmış parola verileri taranıyor... (Bu işlem biraz uzun sürebilir.)';
    pb.innerHTML = '0%';
    for (let index = 0; index < data.length; index++) {
        const pass = data[index].replaceAll("\r", "");
        if (upass == pass || upass.toLocaleLowerCase("tr") == pass) {cpb(10); secure -= 2; break; }
        if ((index + 1) % 265000 === 0) { cpb((index + 1) / 265000); continue; }
    }
    if (secure < 4) {
        text.innerHTML = "Çok zayıf!";
        text.color = "rgb(128, 0, 0)";
    } else if (secure < 6) {
        text.innerHTML = "Zayıf!";
        text.color = "rgb(179, 0, 0)";
    } else if (secure < 9) {
        text.innerHTML = "Biraz tehlikeli.";
        text.color = "rgb(199, 169, 0)";
    } else if (secure < 10) {
        text.innerHTML = "İyi.";
        text.color = "green";
    } else if (secure == 10) {
        text.innerHTML = "Süper!";
        text.color = "rgb(0, 179, 0)";
    }
    setTimeout(() => {
        loader.style.display = "none";
        text.color = "#a3a3a3";
    }, 3000);
}

document.getElementById("si").addEventListener("click", () => {
    document.getElementById("si").style.display = "none";
    document.getElementById("hi").style.display = "inline-block";
    document.getElementById("upass").type = "text";
});document.getElementById("hi").addEventListener("click", () => {
    document.getElementById("hi").style.display = "none";
    document.getElementById("si").style.display = "inline-block";
    document.getElementById("upass").type = "password";
});

document.getElementById("mainbtn").addEventListener("click", () => {
    loader.style.display = "flex";
    text.innerHTML = "Test ediliyor...";
    pb.innerHTML = "0%";

    setTimeout(() => {
        main();
    }, 0);
});