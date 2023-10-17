let coins = 0
let cpsValue = 0
let cpcValue = 1
let cpsCost = 1
let cpcCost = 1
let button = document.getElementById("my-button")
let cpsUpgrade = document.getElementById("cps-upgrade")
let cps = document.getElementById("cps")
let cpcUpgrade = document.getElementById("cpc-upgrade")
let cpc = document.getElementById("cpc")
let clicks = document.getElementById("clicks")

let updateUpgradeStyle = function() {
  if (coins >= cpsCost) {
    cpsUpgrade.classList.remove("btn-secondary")
    cpsUpgrade.classList.add("btn-primary")
  } else {
    cpsUpgrade.classList.remove("btn-primary")
    cpsUpgrade.classList.add("btn-secondary")
  }

  if (coins >= cpcCost) {
    cpcUpgrade.classList.remove("btn-secondary")
    cpcUpgrade.classList.add("btn-primary")
  } else {
    cpcUpgrade.classList.remove("btn-primary")
    cpcUpgrade.classList.add("btn-secondary")
  }
}

let updateCoins = function() {
  clicks.innerHTML = `${coins} Coins`
  updateUpgradeStyle()
}

let cpsUpdate = function() {
  coins+=cpsValue
  updateCoins()
}

let cpsLabelUpdate = function() {
  cps.innerHTML = `Clicks per second: ${cpsValue}`
  cpsUpgrade.innerHTML = `Upgrade clicks per second: ${cpsCost} Coins`
}

let cpcLabelUpdate = function() {
  cpc.innerHTML = `Coins per click: ${cpcValue}`
  cpcUpgrade.innerHTML = `Upgrade coins per click: ${cpcCost} Coins`
}

let notEnoughCoins = function() {
  alert("You don't have enough coins!")
}

button.onclick = function(){
  coins += cpcValue
  updateCoins()
}

cpsUpgrade.onclick = function() {
  if (coins >= cpsCost) {
    coins -= cpsCost
    cpsCost *= 2
    cpsValue++
    cpsLabelUpdate()
  } else {
    notEnoughCoins()
  }
}

cpcUpgrade.onclick = function() {
  if (coins >= cpcCost) {
    coins -= cpcCost
    cpcCost *= 2
    cpcValue++
    cpcLabelUpdate()
  } else {
    notEnoughCoins()
  }
}

// setInterval(updateCoins, 500)
setInterval(cpsUpdate, 1000)