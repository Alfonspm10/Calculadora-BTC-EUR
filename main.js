const cryptoInput =document.querySelector('#crytovalue')
const fiatInput = document.querySelector('#fiatvalue')
const crytoselect = document.querySelector('#crytoselect')
const fiatselect = document.querySelector('#fiatselect')
const fiat = [
    {
        currency: "EUR",
        country: "Euro"
    }
    ]
const coins = [
    {
        currency: "BTC",
        country: "Bitcoin"
    }
    ]

insertaDivisa(coins,crytoselect)
insertaDivisa(fiat,fiatselect) 

function insertaDivisa(curr, selectEl){
    curr.forEach(c=>{
        selectEl.appendChild(ordenacion(c.currency,c.country))
    })
    function ordenacion(value,title){
        const o=document.createElement('option')
        o.title = title
        o.value = value
        o.text = value
        o.className = 'calcoption'
        return o
        }
}
calc('crypto')
fiatInput.onkeyup = ()=>calc()
fiatInput.onchange = ()=>calc()
cryptoInput.onkeyup = ()=>calc('crypto')
cryptoInput.onchange = ()=>calc('crypto')
      
fiatselect.onchange = ()=>calc('crypto')
crytoselect.onchange = ()=>calc()
      
const res = await fetch(`https://api.coindesk.com/v1/bpi/currentprice/${fiat.toLowerCase()}.json`)
const json = await res.json() 
const exchangeRate = parseInt(json.bpi[fiat].rate_float)