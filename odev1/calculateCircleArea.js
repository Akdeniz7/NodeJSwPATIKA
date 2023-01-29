const arguments = process.argv.slice(1)

function calculateCircleArea(r) {
    let area = Math.PI * r * r ;
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${area}`)
}

calculateCircleArea(arguments[1])