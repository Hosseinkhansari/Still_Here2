let icon = document.getElementById("icon")
let mainTalkDiv = document.querySelector(".talk_to_me")
let row1 = document.querySelector(".row1")
let row2 = document.querySelector(".row2")
let row3 = document.querySelector(".row3")
let yellowLamps = "ACELOTXZ"
let redLamps = "BGJMNPRUY"
let blueLamps = "DHKSW"
let greenLamps = "FIV"
let yellow = "#ffd60a"
let red = "#e63946"
let blue = "#3a86ff"
let green = "#2dc653"
let quotes = [
    {text: "Mornings are for coffee and contemplation.", who: "-Jim Hopper-", season: "S1" },
    {text: "I don’t care if anyone believes me!", who: "-Joyce Byers-", season: "S1" },
    {text: "We never would’ve upset you if we knew you had superpowers.", who: "-Dustin Henderson-", season: "S1" },
    {text: "FRIENDS DON’T LIE", who: "-ELEVEN-", season: "S1"},
    {text: "Nobody normal ever accomplished anything meaningful in this world.", who : "-Jonathan Byers-", season: "S1"},
    {text: "The hurt is good. It means you’re out of that cave.", who: "-Jim Hopper-", season: "S3"}
]
let quoetP = document.getElementById("p_random_quoet")
let quoetBtn = document.getElementById("random_quoet_btn")
let lastQuoetIndex
let changeModeBtn = document.getElementById("change_mode")
let spores = document.querySelector(".spores")

window.addEventListener("load", () => icon.style.display = "none")

for (let i = 65; i <= 90; i++){
    let lamp = document.createElement("div")
    lamp.classList.add("lamp")
    let str = String.fromCharCode(i)
    let angle = Math.random() * 12 - 5


    let bulb = document.createElement("div")
    let letter = document.createElement("p")


    bulb.classList.add("bulb")
    letter.classList.add("letter")
    letter.innerHTML = str
    letter.style.transform = `rotate(${angle}deg)`


    if (yellowLamps.includes(str)){
        letter.style.setProperty("--color", yellow)
        bulb.style.setProperty("--color", yellow)

    }

    else if (redLamps.includes(str)){
        letter.style.setProperty("--color", red)
        bulb.style.setProperty("--color", red)
    }

    else if (blueLamps.includes(str)){
        letter.style.setProperty("--color", blue)
        bulb.style.setProperty("--color", blue)

    }

    else if (greenLamps.includes(str)){
        letter.style.setProperty("--color", green)
        bulb.style.setProperty("--color", green)

    }


    lamp.appendChild(bulb)
    lamp.appendChild(letter)
    lamp.addEventListener("click", () => lamp.classList.toggle("on"))

    if (i <= 72)
        row1.appendChild(lamp)

    else if (i <= 81)
        row2.appendChild(lamp)


    else if (i >= 82)
        row3.appendChild(lamp)

}

quoetBtn.addEventListener("click", () =>{
    let index = Math.floor(Math.random() * quotes.length)

    while (index == lastQuoetIndex){
        index = Math.floor(Math.random() * quotes.length)
    }
    
    lastQuoetIndex = index
    let q = quotes[index]
    quoetP.innerHTML = `<span class="q_text">${q.text}</span><span class="q_who">${q.who} ${q.season}</span>`
    quoetP.style.display = "block"

})

changeModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("upside_down")
    if (changeModeBtn.innerHTML == "UD"){
        changeModeBtn.innerHTML = "ST"
        spores.style.display = "block"

        for (let i = 1; i <= 20; i++){
            let spore = document.createElement("div")
            let sporeTop = Math.floor(Math.random() * 100) + 1
            let sporeLeft = Math.floor(Math.random() * 100) + 1
            let sporePx = Math.floor(Math.random() * 10) + 5
            let sporeDeltaLeft = Math.floor(Math.random() * 100) + 50
            let sporeDeltaTop = Math.floor(Math.random() * 100) + 50
            let sporeBlur = (Math.floor(Math.random() * 5) + 2) / 10
            let sporeDelay = Math.floor(Math.random() * 13) + 8
            let randomChance = Math.floor(Math.random() * 21)

            if (randomChance < 5){
                sporeDeltaLeft = -sporeDeltaLeft
                sporeDeltaTop = -sporeDeltaTop
            }
            else if(randomChance < 10){
                sporeDeltaLeft = -sporeDeltaLeft
            }
            else if (randomChance < 15){
                sporeDeltaTop = -sporeDeltaTop
            }

            spore.classList.add("spore")
            spore.style.setProperty("--px", `${sporePx}px`)
            spore.style.setProperty("--top", `${sporeTop}%`)
            spore.style.setProperty("--left", `${sporeLeft}%`)
            spore.style.setProperty("--deltaTop", `${sporeDeltaTop}px`)
            spore.style.setProperty("--deltaLeft", `${sporeDeltaLeft}px`)
            spore.style.setProperty("--blur", sporeBlur)
            spore.style.setProperty("--delay", `${sporeDelay * -1}s`)

            spores.appendChild(spore)



        }
    }

    else{
        changeModeBtn.innerHTML = "UD"
        spores.innerHTML = ""
        spores.display = "none"
    }

})