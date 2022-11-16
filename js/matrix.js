const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const screenWidth = canvas.width
const screenHeight = canvas.height

const katakana = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン"
const latim = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"

const alphabet = katakana + latim + numbers

const fontSize = 18
const columns = Math.floor(screenWidth/fontSize)
const drops = []

for(let x = 0; x < columns; x ++) {
    drops[x] = 1
}

const matrixEffect = () => {
    for(let i = 0; i < drops.length; i ++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        context.fillText(text, i * fontSize, drops[i] * fontSize)
        
        if(drops[i] * fontSize > screenHeight && Math.random() > 0.975) {
            drops[i] = 0
        }
        drops[i]++
    }
}

const styleContext = () => {
    context.fillStyle = "rgba(0, 0, 0, 0.05)"
    context.fillRect(0, 0, screenWidth, screenHeight)
    context.fillStyle = "#0f0"
    context.font = fontSize + "px sans-serif"

    matrixEffect()    
}
setInterval(styleContext, 30)