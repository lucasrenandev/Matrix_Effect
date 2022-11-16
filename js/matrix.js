// SELECIONANDO ELEMENTO CANVAS
const canvas = document.getElementById("canvas")

// DEFININDO CONTEXTO
const context = canvas.getContext("2d")

// DIFININDO LARGURA + ALTURA
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// ATRIBUINDO LARGURA + ALTURA EM VARIÁVEIS 
const screenWidth = canvas.width
const screenHeight = canvas.height

// VARIÁVEIS/CÓDIGOS PARA O EFEITO MATRIX
const katakana = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン"
const latim = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"

const alphabet = katakana + latim + numbers

const fontSize = 16
const columns = Math.floor(screenWidth / fontSize)
const drops = []

for(let x = 0; x < columns; x ++) {
    drops[x] = 1
}

// FUNÇÃO PARA CRIAR O ESTILO DO EFEITO(MATRIX)
const contextMatrixStyle = () => {
    context.fillStyle = "rgba(0, 0, 0, 0.05)"
    context.fillRect(0, 0, screenWidth, screenHeight)
    context.fillStyle = "#0f0"
    context.font = fontSize + "px sans-serif"   
}

// FUNÇÃO PARA CRIAR O EFEITO(MATRIX)
const matrixEffect = () => {
    for(let i = 0; i < drops.length; i ++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        context.fillText(text, i * fontSize, drops[i] * fontSize)
        
        if(drops[i] * fontSize > screenHeight && Math.random() > 0.975) {
            drops[i] = 0
        }
        drops[i]++
    }
    contextMatrixStyle()
}
// CHAMANDO A FUNÇÃO EFEITO MATRIX NO DOCUMENTO
setInterval(matrixEffect, 30)