
const { Fore } = require('./colorama');
const bars = [
    `${Fore.Red}░░░░░░░░░░ 0/10 ${Fore.Underscore}Çok zayıf!${Fore.Reset}`,
    `${Fore.Red}█░░░░░░░░░ 1/10 ${Fore.Underscore}Çok zayıf!${Fore.Reset}`,
    `${Fore.Red}██░░░░░░░░ 2/10 ${Fore.Underscore}Çok zayıf!${Fore.Reset}`,
    `${Fore.Red}███░░░░░░░ 3/10 ${Fore.Underscore}Çok zayıf!${Fore.Reset}`,
    `${Fore.BrightRed}█████░░░░░ 5/10 ${Fore.Underscore}Zayıf!${Fore.Reset}`,
    `${Fore.BrightRed}████░░░░░░ 4/10 ${Fore.Underscore}Zayıf!${Fore.Reset}`,
    `${Fore.Yellow}██████░░░░ 6/10 ${Fore.Underscore}Biraz teklikeli.${Fore.Reset}`,
    `${Fore.Yellow}███████░░░ 7/10 ${Fore.Underscore}Biraz teklikeli.${Fore.Reset}`,
    `${Fore.Yellow}████████░░ 8/10 ${Fore.Underscore}Biraz teklikeli.${Fore.Reset}`,
    `${Fore.Green}█████████░ 9/10 ${Fore.Underscore}İyi.${Fore.Reset}`,
    `${Fore.BrightGreen}██████████ 10/10 ${Fore.Underscore}Mükemel!${Fore.Reset}`,
]
const fs = require('fs');
var prompt = require('prompt-sync')();
const argv = process.argv;
const simple = (argv.includes("--simple") || argv.includes("-s"));
const appName = "parolatesti";
const chars = ["a","b","c","ç","d","e","f","g","h","ğ","ı","i","j","k","l","m","n","o","ö","p","r","s","t","u","ü","v","y","z","x","w"];
const ints = ["1","2","3","4","5","6","7","8","9","0"];

console.log(Fore.Yellow + '\n\n                   Parolam güçlü mü?' + Fore.Reset);
console.log('    Parolanızın güçlü olup olmadığını kontrol eder.\n');
if (argv.includes("--help") || argv.includes("?")) {
    console.log(Fore.Green + '    Kullanım: \n' + Fore.Reset + `Winodws: ./${appName}.exe <argümanlar> <parola>\n Linux : ./${appName}-linux <argümanlar> <parola>\n`);
    console.log(Fore.Yellow + 'Argümanlar:\n' + Fore.Reset, `  ${Fore.BrightMagenta}--simple${Fore.Reset} yada ${Fore.BrightMagenta}-s${Fore.Reset} : sızdırılmış parolalar verilerini kullanmaz.\n  ${Fore.BrightMagenta}--help${Fore.Reset} yada ${Fore.BrightMagenta}?${Fore.Reset} : bu menüyü açar.\n`);
    process.exit(0);
}
console.log('    Daha fazla bilgi için "--help" argümanı ile başlatın.\n');

if (!simple) {
    console.log(Fore.Yellow + 'Bilgilendirme: ' + Fore.Reset, 'Sızdırılmış parola verileri yükleniyor...');
    console.log(Fore.Yellow + 'Bilgilendirme: ' + Fore.Reset, 'Bu işlemi atlamak için "--simple" argümanı ile başlatın.');
    process.stdout.write(Fore.Green+"██"+Fore.Reset+"▒▒▒▒▒▒▒▒ 20%");
    var data = fs.readFileSync("wordlist.txt", { encoding:"utf-8", }).split("\n");
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(Fore.Green+"██████████"+Fore.Reset+" 100%");
    process.stdout.write("\n\n");
} else {
    var hvs = [
        "123456",
        "123456789",
        "linkedin",
        "galatasaray",
        "eminem",
        "fenerbahce",
        "123123",
        "istanbul",
        "12345",
        "mustafa",
        "12345678",
        "eminem1",
        "111111",
        "1234567890",
        "besiktas",
        "1234567",
        "123123123",
        "123321",
        "sanane",
        "ankara",
        "1234",
        "000000",
        "ibrahim",
        "bananas",
        "mehmet",
        "159753",
        "yasemin",
        "trabzon",
        "987654321",
        "14531453",
        "jasmine",
        "lovelife",
        "0123456789",
        "147258369",
        "ramazan",
        "654321",
        "ismail",
        "112233",
        "102030",
        "trabzon61",
        "spiderman",
        "123654",
        "121212",
        "malatya",
        "abdullah",
        "malatya44",
        "zeynep",
        "istanbul34",
        "ankara06",
        "melissa",
        "123654789",
        "sakarya",
        "trabzonspor",
        "159357",
        "kartal",
        "batuhan",
        "lovelife1",
        "666666",
        "serseri",
        "147852369",
        "kayseri",
        "qwerty",
        "kanarya",
        "kardelen",
        "galatasaray1905",
        "Linkedin",
        "magandaako",
        "sakarya54",
        "555555",
        "kelebek",
        "linkedin1",
        "password",
        "solmazz",
        "maganda",
        "karakartal",
        "19071907",
        "741852963",
        "kayseri38",
        "papatya",
        "jasmine1",
        "galatasaray1",
        "789456123",
        "telefon",
        "159951",
        "fatman1",
        "karaman",
        "linkedin123",
        "010203",
        "19051905",
        "antalya",
        "asdasd",
        "mustafa1",
        "aksaray",
        "sevgilim",
        "fatman",
        "kaktus",
        "cimbom",
        "147258",
        "323232",
        "turkiye",
        "fenerbahce1907",
        "fatima",
        "12341234",
        "linkedin2011",
        "212121",
        "erzurum",
        "sultan",
        "987654",
        "19851985",
        "789456",
        "9876543210",
        "19031903",
        "eminem123",
        "222222",
        "0123456",
        "denizli",
        "xxx",
        "livelife",
        "livelife1",
        "bursaspor",
        "merhaba",
        "12345678910",
        "aksaray68",
        "alperen",
        "besiktas1903",
        "furkan",
        "123456789a",
        "kastamonu",
        "avokado",
        "spiderman1",
        "eminem12",
        "19821982",
        "11111111"
    ]
}

function main() {
    const upass = prompt("Parolanız nedir?: ");
    console.log("");
    let secure = 2;
    let charvar = false;
    let ivar = false;
    let denpass = upass;
    if (isNaN(upass)) {secure+=2;}
    for (let ci = 0; ci < chars.length; ci++) {
        const char = chars[ci];
        if (upass.toLocaleLowerCase("tr").includes(char) && charvar==false) {charvar=true;secure++;}
        denpass=denpass.replaceAll(char, "");
    }
    for (let ii = 0; ii < ints.length; ii++) {
        if (upass.includes(ints[ii]) && ivar==false) {ivar=true;secure++;}
        denpass=denpass.replaceAll(ints[ii], "");
    }
    denpass = denpass.trimStart();
    if (denpass.length>0) {secure++;}
    if (upass.length>7) {secure+=3;}
    if (simple) {
        if (hvs.includes(upass) || hvs.includes(upass.toLocaleLowerCase("tr"))) {secure-=2;}
    } else {
        let cpb = count => {
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
            process.stdout.write(Fore.Green+"█".repeat(count)+Fore.Reset+"▒".repeat(10-count)+` ${count.toString()}%`);
        };
        console.log(Fore.Yellow + 'Bilgilendirme: ' + Fore.Reset, 'Sızdırılmış parola verileri taranıyor... (Bu işlem biraz uzun sürebilir.)');
        process.stdout.write(Fore.Green+"█".repeat(0)+Fore.Reset+"▒".repeat(10-0)+` 0%`);
        for (let index = 0; index < data.length; index++) {
            const pass = data[index].replaceAll("\r", "");
            if (upass==pass || upass.toLocaleLowerCase("tr")==pass) {secure-=2;cpb(10);break;}
            if ((index+1) % 475727===0) {cpb((index+1)/475727);continue;}
        }
        process.stdout.write("\n\n");
    }
    console.log(bars[secure]+"\n")
}

main();