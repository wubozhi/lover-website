let prizes = [
    "LV白棋盘包包", "蒂芙尼项链", "阿玛尼手表", "香奈儿香水", 
    "YSL口红", "海鲜自助餐", "小辣鱼", "RMB10元", "男朋友香吻"
];

let prizeOrder = [8, 7, 0];  // First two are "男朋友香吻" and "RMB10元", last one is "LV白棋盘包包"
let currentDraw = 0;

const gridItems = document.querySelectorAll('.prize-item');
const startButton = document.getElementById('startButton');
const message = document.getElementById('message');

startButton.addEventListener('click', startLottery);

function startLottery() {
    if (currentDraw < 3) {
        message.textContent = "正在抽奖...";
        rotateGrid();
    } else {
        message.textContent = "已经没有抽奖机会了！";
    }
}

function rotateGrid() {
    let currentIndex = 0;
    let interval = setInterval(() => {
        gridItems[currentIndex].classList.add('highlight'); // Add new highlight
        gridItems.forEach(item => item.classList.remove('highlight')); // Remove previous highlight       
        
        currentIndex = (currentIndex + 1) % gridItems.length;
    }, 100);

    // Slow down and stop the grid rotation
    setTimeout(() => {
        clearInterval(interval);
        highlightPrize();
    }, 3000); // Adjust duration for speed of rotation
}

function highlightPrize() {
    const selectedPrize = prizeOrder[currentDraw];
    gridItems[selectedPrize].classList.add('highlight');
    message.textContent = `恭喜你！你抽中了：${prizes[selectedPrize]}`;

    currentDraw++;
}
