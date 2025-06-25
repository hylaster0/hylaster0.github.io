
const racers = {
    BabyPeach: {name: "Baby Peach", roadspeed: 3, terrainspeed: 3, waterspeed: 3, accel: 10, weight: 3, handling: 9, avgspeed: 3},
    BabyMario: {name: "Baby Mario", roadspeed: 4, terrainspeed: 3, waterspeed: 3, accel: 9, weight: 3, handling: 9, avgspeed: 3.5},
    BabyLuigi: {name: "Baby Luigi", roadspeed: 3, terrainspeed: 4, waterspeed: 3, accel: 9, weight: 3, handling: 9, avgspeed: 3.5},
    BabyRosalina: {name: "Baby Rosalina", roadspeed: 3, terrainspeed: 3, waterspeed: 4, accel: 9, weight: 3, handling: 9, avgspeed: 3},
    Toadette: {name: "Toadette", roadspeed: 5, terrainspeed: 4, waterspeed: 4, accel: 8, weight: 3, handling: 8, avgspeed: 4.5},
    Toad: {name: "Toad", roadspeed: 4, terrainspeed: 5, waterspeed: 4, accel: 8, weight: 3, handling: 8, avgspeed: 4.5},
    CheepCheep: {name: "CheepCheep", roadspeed: 4, terrainspeed: 4, waterspeed: 5, accel: 8, weight: 3, handling: 8, avgspeed: 4.5},
    Peach: {name: "Peach", roadspeed: 6, terrainspeed: 5, waterspeed: 5, accel: 7, weight: 6, handling: 7, avgspeed: 5.5},
    Yoshi: {name: "Yoshi", roadspeed: 5, terrainspeed: 6, waterspeed: 5, accel: 7, weight: 6, handling: 7, avgspeed: 5.5},
    Dolphin: {name: "Dolphin", roadspeed: 5, terrainspeed: 5, waterspeed: 6, accel: 7, weight: 6, handling: 7, avgspeed: 5},
    Mario: {name: "Mario", roadspeed: 7, terrainspeed: 6, waterspeed: 6, accel: 6, weight: 7, handling: 6, avgspeed: 6.5},
    Luigi: {name: "Luigi", roadspeed: 6, terrainspeed: 7, waterspeed: 6, accel: 6, weight: 7, handling: 6, avgspeed: 6.5},
    Penguin: {name: "Penguin", roadspeed: 6, terrainspeed: 6, waterspeed: 7, accel: 6, weight: 7, handling: 6, avgspeed: 6},
    Pauline: {name: "Pauline", roadspeed: 8, terrainspeed: 7, waterspeed: 7, accel: 5, weight: 8, handling: 5, avgspeed: 7.5},
    Conkdor: {name: "Conkdor", roadspeed: 7, terrainspeed: 8, waterspeed: 7, accel: 5, weight: 8, handling: 5, avgspeed: 7.5},
    Rosalina: {name: "Rosalina", roadspeed: 7, terrainspeed: 7, waterspeed: 8, accel: 5, weight: 8, handling: 5, avgspeed: 7},
    Wario: {name: "Wario", roadspeed: 9, terrainspeed: 8, waterspeed: 8, accel: 4, weight: 9, handling: 4, avgspeed: 8.5},
    Cow: {name: "Cow", roadspeed: 8, terrainspeed: 9, waterspeed: 8, accel: 4, weight: 9, handling: 4, avgspeed: 8.5},
    Pianta: {name: "Pianta", roadspeed: 8, terrainspeed: 8, waterspeed: 9, accel: 4, weight: 9, handling: 4, avgspeed: 8},
    Bowser: {name: "Bowser", roadspeed: 9, terrainspeed: 9, waterspeed: 9, accel: 3, weight: 10, handling: 3, avgspeed: 9}
}

const karts = {
    TuneThumper: {name: "Tune Thumper", roadspeed: 1, terrainspeed: 1, waterspeed: 1, accel: 9, weight: 0, handling: 6, avgspeed: 1},
    FinTwin: {name: "Fin Twin", roadspeed: 0, terrainspeed: 1, waterspeed: 5, accel: 8, weight: 0, handling: 6, avgspeed: 0.5},
    RallyBike: {name: "Rally Bike", roadspeed: 0, terrainspeed: 4, waterspeed: 1, accel: 8, weight: 0, handling: 6, avgspeed: 2},
    PipeFrame: {name: "Pipe Frame", roadspeed: 2, terrainspeed: 2, waterspeed: 2, accel: 9, weight: 1, handling: 5, avgspeed: 2},
    Biddybuggy: {name: "Biddybuggy", roadspeed: 1, terrainspeed: 5, waterspeed: 2, accel: 7, weight: 1, handling: 5, avgspeed: 3},
    MachRocket: {name: "Mach Rocket", roadspeed: 6, terrainspeed: 1, waterspeed: 2, accel: 7, weight: 0, handling: 6, avgspeed: 3.5},
    LocoMoto: {name: "Loco Moto", roadspeed: 4, terrainspeed: 3, waterspeed: 4, accel: 6, weight: 0, handling: 5, avgspeed: 3.5},
    BabyBlooper: {name: "Baby Blooper", roadspeed: 7, terrainspeed: 2, waterspeed: 3, accel: 6, weight: 0, handling: 5, avgspeed: 4.5},
    StandardKart: {name: "Standard Kart", roadspeed: 5, terrainspeed: 4, waterspeed: 5, accel: 5, weight: 2, handling: 4, avgspeed: 4.5},
    BlastronautIII: {name: "Blastronaut III", roadspeed: 5, terrainspeed: 4, waterspeed: 5, accel: 6, weight: 3, handling: 2, avgspeed: 4.5},
    DreadSled: {name: "Dread Sled", roadspeed: 3, terrainspeed: 8, waterspeed: 5, accel: 3, weight: 3, handling: 4, avgspeed: 5.5},
    RibbitRevster: {name: "Ribbit Revster", roadspeed: 4, terrainspeed: 3, waterspeed: 7, accel: 4, weight: 3, handling: 3, avgspeed: 3.5},
    FunkyDorrie: {name: "Funky Dorrie", roadspeed: 4, terrainspeed: 3, waterspeed: 7, accel: 5, weight: 5, handling: 1, avgspeed: 3.5},
    ZoomBuggy: {name: "Zoom Buggy", roadspeed: 4, terrainspeed: 7, waterspeed: 4, accel: 4, weight: 3, handling: 3, avgspeed: 5.5},
    BumbleV: {name: "Bumble V", roadspeed: 8, terrainspeed: 3, waterspeed: 4, accel: 4, weight: 3, handling: 3, avgspeed: 5.5},
    WTwinChopper: {name:"W Twin Chopper", roadspeed: 7, terrainspeed: 6, waterspeed: 6, accel: 3, weight: 2, handling: 4, avgspeed: 6.5},
    Billdozer: {name: "Billdozer", roadspeed: 9, terrainspeed: 5, waterspeed: 5, accel: 2, weight: 5, handling: 2, avgspeed: 7},
    Rallygator: {name: "Rally Gator", roadspeed: 9, terrainspeed: 5, waterspeed: 5, accel: 3, weight: 6, handling: 0, avgspeed: 7},
    StellarSled: {name: "Stellar Sled", roadspeed: 6, terrainspeed: 7, waterspeed: 9, accel: 0, weight: 5, handling: 3, avgspeed: 6.5},
    LobsterRoller: {name: "Lobster Roller", roadspeed: 7, terrainspeed: 6, waterspeed: 8, accel: 2, weight: 6, handling: 0, avgspeed: 6.5},
    MechaTrike: {name: "Mecha Trike", roadspeed: 7, terrainspeed: 6, waterspeed: 8, accel: 1, weight: 5, handling: 2, avgspeed: 6.5},
    BowserBruiser: {name: "Bowser Bruiser", roadspeed: 7, terrainspeed: 9, waterspeed: 6, accel: 1, weight: 5, handling: 2, avgspeed: 8},
    ReelRacer: {name: "Reel Racer", roadspeed: 8, terrainspeed: 7, waterspeed: 7, accel: 2, weight: 3, handling: 3, avgspeed: 7.5},
    JunkyardHog: {name: "Junkyard Hog", roadspeed: 8, terrainspeed: 7, waterspeed: 7, accel: 3, weight: 4, handling: 1, avgspeed: 7.5}
}

function minimizeList(graph, stat1, stat2) {
    let minimizedgraph = [];
    let lowestValue = 0;
    for (let i = 0; i < graph.length; i++) {
        if (graph[i][0] > lowestValue) {
            minimizedgraph.push(graph[i]);
            lowestValue = graph[i][0];
        } else if (graph[i][0] == lowestValue) {
            if (graph[i][1] == minimizedgraph[minimizedgraph.length-1][1])
            minimizedgraph.push(graph[i])
        }
    }

    //minimized graph now has the best value possible for each stat1
    //however, sometimes, a certain value is entirely outclassed
    
    let twiceMinimized = [];
    for (let i = 0; i < minimizedgraph.length; i++) {
        let superiorOptionFound = false;
        for (let j = i+1; j < minimizedgraph.length; j++) {
            if (minimizedgraph[i][0] < minimizedgraph[j][0] && minimizedgraph[i][1] <= minimizedgraph[j][1]) {
                superiorOptionFound = true;
                break;
            }
        }
        if (!superiorOptionFound) {
            twiceMinimized.push(minimizedgraph[i])
        }
    }

    return twiceMinimized
}
function checkForOptimalPicks(character, kart, stat1, stat2) {
    console.log(racers[character])
    let totalStat1 = racers[character][stat1] + karts[kart][stat1];
    let totalStat2 = racers[character][stat2] + karts[kart][stat2];
    let statTotal = totalStat1 + totalStat2;

    let betterOptions = [];
    let alternateOptions = [];
    for (const nnpc in racers) {
        const npc = racers[nnpc]
        for (const ccar in karts) {
            const car = karts[ccar]
            let compStat1 = npc[stat1] + car[stat1]
            let compStat2 = npc[stat2] + car[stat2]
            let compStatTotal = compStat1 + compStat2
            if ((compStat1 > totalStat1 && compStat2 >= totalStat2) || (compStat2 > totalStat2 && compStat1 >= totalStat1)) {
                betterOptions.push({npc, car}) 
            } else if (((compStat1 > totalStat1 && compStat2 < totalStat2) || (compStat1 < totalStat1 && compStat2 > totalStat2)) && (Math.abs(totalStat1-compStat1) <= 2 && Math.abs(totalStat2-compStat2) <=2)) {
                alternateOptions.push({npc, car})
            }
        }
    }
    
    let optimizedPicks = buildGraph(stat1, stat2)
    let strictlyBetter = [];
    for (arr in optimizedPicks) {
        let combo = optimizedPicks[arr];
        console.log(combo[0] + " vs" + totalStat1)
        if ((combo[0] > totalStat1 && combo[1] >= totalStat2) || (combo[1] > totalStat2 && combo[0] >= totalStat1)) {
            strictlyBetter.push(combo)
        }
    }

    strictlyBetterText = ""
    if (strictlyBetter.length > 0) {
        for (arr in strictlyBetter) {
            combo = strictlyBetter[arr];
            strictlyBetterText += combo[2] + ": " + combo[0] + " " + stat1 + " | " + combo[1] + " " + stat2 + "<br/>"

        }

        return {
            resultText: "<b>Strictly Superior Options Found</b>. You have" + totalStat1 + " " + stat1 + " and " + totalStat2 + " " + stat2,
            options: strictlyBetterText,
            better: true
        }
    }
    if (betterOptions.length > 0) {
        return {resultText: "<b>Strictly superior</b> option(s) have been found. You have" + totalStat1 + " " + stat1 + " and " + totalStat2 + " " + stat2,
            options: betterOptions
        }
    } else {
        return {resultText: "<b>No strictly superior options</b>. Use the optimal curve below to consider tradeoffs. You have " + totalStat1 + " " + stat1 + " and " + totalStat2 + " " + stat2,
            options: ""
        }
    }
}

const btn = document.getElementById("OptimizeButton")

function buildGraph(stat1, stat2){
    let graph = [];
    for (npc in racers) {
        const player = racers[npc];
        for (kart in karts) {
            car = karts[kart];
            let s1 = player[stat1] + car[stat1];
            let s2 = player[stat2] + car[stat2];
            graph.push([s1, s2, player.name + " & " + car.name])
        }
    }

    graph.sort((a,b)=> {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return b[1] - a[1];
    })

    let twiceMinimized = minimizeList(graph)
    console.log(twiceMinimized)

    return twiceMinimized;
}

btn.addEventListener("click", function(){
    let rcrs = document.getElementsByName("charSelect")
    let char = ""
    let kart = ""
    let stat1 = ""
    let stat2 = ""
    for (i = 0; i < rcrs.length; i++) {
        if (rcrs[i].checked) {
            char = rcrs[i].value
        }
    }
    
    let cars = document.getElementsByName("kartSelect")
    for (i = 0; i < cars.length; i++) {
        if (cars[i].checked) {
            kart = cars[i].value
            break;
        }
    }

    let stats1 = document.getElementsByName("Stat1")
    for (i = 0; i < stats1.length; i++){
        if (stats1[i].checked) {
            stat1 = stats1[i].value;
            break;
        }
    }

    let stats2 = document.getElementsByName("Stat2")
    for (i = 0; i < stats2.length; i++) {
        if (stats2[i].checked) {
            stat2 = stats2[i].value;
            break;
        }
    }

    console.log(stat1)
    console.log(stat2)
    let results = checkForOptimalPicks(char, kart, stat1, stat2)
    console.log(results.resultText)
    let kartText = ""
    if (results.better) {
        console.log("better kart found")
        kartText = results.options;
    } else {
        for (kar in results.options) {
            let m = results.options[kar]
            kartText += m.npc.name + " & " + m.car.name + ": " + (m.npc[stat1] + m.car[stat1]) + " " + stat1 + " | " + (m.npc[stat2] + m.car[stat2]) + " " + stat2 + "<br/>"
        }

    }
    document.getElementById("resultsBlurb").innerHTML = results.resultText
    document.getElementById("resultsText").innerHTML = kartText

    let minimalResults = buildGraph(stat1, stat2);
    minText = ""
    for (arr in minimalResults) {
        let combo = minimalResults[arr]
        minText += combo[2] + ": " + combo[0] + " " + stat1 + " | " + combo[1] + " " + stat2 + "<br/>"
    }

    document.getElementById("paretocurve").innerHTML = minText;

})