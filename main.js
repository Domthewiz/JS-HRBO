// Batch Obfuscation SET,[SPACE],[=] GENERATOR + NONSENSE

// Set the array function to avoid duplicates
// ++++++++++++++++++++++++++++++++++++++++++
// IMPORTANT!!!!   Type each line of your code at the end in this format
// +++++++++++++++++++++++++++++++++++++++++++++
//
// console.log(lines("color a"));
// console.log(lines("echo Hello World!"));
// console.log(lines("pause>nul"));
//
let pos = []
function genStr(j) {
    
    // Avoiding a permanent loop
    let jtes = j
    while (pos.length > (26^jtes)) {
        jtes++
    }
    if (j<300) {

    // Refrences

    let r = "abcdefghijklmnopqrstuvwxyz";
    let t = "QWERTYUIOPASDFGHJKLZXCVBNM";

    // Variables

    let i = 1;
    let o = 0;
    let oe = 0;
    let h = "";
    let str = "";
    while (true) {
        o = j;
        while (j>0) {

            // Picking a letter

            oe = Randomizer.nextInt(0,1);
            i = Randomizer.nextInt(0,25);
            if (oe == 1) {
                h = t.substring(i,i + 1);
            } else {
                h = r.substring(i,i + 1);
            }

            // Adding letter to string

            str = str + h;
            j--
        }

        // Checking for duplicates

        if (!pos.includes(str.toLowerCase())) {
            break
        } else {
            str = "";
        }
    }

    // Adding non-case sensitive string to list

    pos.push(str.toLowerCase())
    return str

// Extreme nonsense !<>! function
} else {
    return -1;
}
}
function bse(n1,n2) {
    let bq = Randomizer.nextInt(n1,n2);
    let srt = "";
    while (bq > 0) {
        srt = srt + "!" + genStr(Randomizer.nextInt(40,90)) + "!";
        bq--
    }
    return srt;
}

// Mild nonsense %<>% function

function bsp(n1,n2) {
    let bq = Randomizer.nextInt(n1,n2);
    let srt = "";
    while (bq > 0) {
        srt = srt + "%" + genStr(Randomizer.nextInt(20,40)) + "%";
        bq--
    }
    return srt;
}

// Mild nonsense !<>! function

function bsee(n1,n2) {
    let bq = Randomizer.nextInt(n1,n2);
    let srt = "";
    while (bq > 0) {
        srt = srt + "!" + genStr(Randomizer.nextInt(20,40)) + "!";
        bq--
    }
    return srt;
}

// Extreme nonsense %<>% function

function bspe(n1,n2) {
    let bq = Randomizer.nextInt(n1,n2);
    let srt = "";
    while (bq > 0) {
        srt = srt + "%" + genStr(Randomizer.nextInt(40,90)) + "%";
        bq--
    }
    return srt;
}
//for (let zyz = 0; zyz < 20; zyz++) {    console.log(genStr(Randomizer.nextInt(1,2)));}
function lines(string) {
    let iii = 0;
    let hhh = Randomizer.nextInt(1,2);
    let hmult = Randomizer.nextInt(0,2);
    let fin = bsee(1,2);
    while (iii < string.length) {
        fin = fin + string.substring(iii,iii+hhh+hmult) + bsee(1,4);
        iii = iii+hhh+hmult;
        hhh = Randomizer.nextInt(1,3);
    }
    return fin;
}
// Setting < SET [SPACE] = >  variables
let set_v = genStr(Randomizer.nextInt(7,45));
let space_v = genStr(Randomizer.nextInt(7,45));
let equals_v = genStr(Randomizer.nextInt(7,45));
// First line is "setlocal enabledelayedexpansion" with nonsense in between each letter
console.log(bsp(1,3) + "s" + bsp(1,3) + "e" + bsp(1,3) + "t" + bsp(1,3) + "l" + bsp(1,3) + "o" + bsp(1,3) + "c" + bsp(1,3) + "a" + bsp(1,3) + "l" + bsp(1,3) + " " + bsp(1,3) + "e" + bsp(1,3) + "n" + bsp(1,3) + "a"+ bsp(1,3) + "b"+ bsp(1,3) + "l"+ bsp(1,3) + "e"+ bsp(1,3) + "d"+ bsp(1,3) + "e"+ bsp(1,3) + "l"+ bsp(1,3) + "a"+ bsp(1,3) + "y"+ bsp(1,3) + "e"+ bsp(1,3) + "d"+ bsp(1,3) + "e"+ bsp(1,3) + "x"+ bsp(1,3) + "p"+ bsp(1,3) + "a"+ bsp(1,3) + "n"+ bsp(1,3) + "s"+ bsp(1,3) + "i"+ bsp(1,3) + "o"+ bsp(1,3) + "n");
// Set Set
console.log("!" + genStr(Randomizer.nextInt(7,45)) + "!s!" + genStr(Randomizer.nextInt(15,45)) + "!et \"" + set_v + "=set\"" + bse(5,11));
// Set [Space]
console.log("!" + set_v + "!" + bse(3,9) + " \"" + space_v + "= \"" + bse(5,11));
// Set =
console.log(bse(3,9) + "!" + set_v + "!!" + space_v + "!\"" + equals_v + "==\"" + bse(5,11));
console.log(lines("start https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
console.log(lines("start https://www.youtube.com/watch?v=e7MC6ozaPxY"));
console.log(lines("start https://www.youtube.com/watch?v=iTFp4DtN2LA"));
console.log(lines("start https://www.youtube.com/watch?v=TWb4KlM2vts"));
console.log(lines("start https://www.youtube.com/watch?v=P5zRHdGJI9I"));
console.log(lines("exit /b"));
