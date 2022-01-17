const color = document.getElementById('color')
const colorCode = document.getElementById('code')
const generateButton = document.getElementById('generate-button') 

const generateColor = () => {
    const patterns = '0123456789abcdefg'
    let newColor = '#'

    for (let i = 0; i < 6 ; i++) { //รอบเริ่มที่ 0 ถ้า i น้อยกว่า 6 โค้ดจะทำงาน แล้ว i จะเพิ่มอีก 1 จนครบ 5 รอบ(5<6)
        const random = Math.floor((Math.random() * 16))  //0 - 15
        newColor += patterns[random]

        
    }
    //console.log(newColor)
    colorCode.innerHTML = newColor
    color.style.backgroundColor = newColor
}

generateButton.addEventListener('click', generateColor)
