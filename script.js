let prizes = [
    "LV白棋盘包包一个", "蒂芙尼项链一条", "阿玛尼手表一只", "香奈儿香水一瓶", 
    "YSL口红一支", "海鲜自助餐一顿", "小辣鱼若干包", "人民币520元", "男朋友香吻一个"
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
        gridItems.forEach(item => item.classList.remove('highlight')); // Remove previous highlight
        gridItems[currentIndex].classList.add('highlight'); // Add new highlight       
        currentIndex = (currentIndex + 1) % gridItems.length;
    }, 100);

    // Slow down and stop the grid rotation
    setTimeout(() => {
        clearInterval(interval);
        gridItems[2].classList.remove('highlight');
        highlightPrize();
    }, 3000); // Adjust duration for speed of rotation
}

function highlightPrize() {
    const selectedPrize = prizeOrder[currentDraw];
    gridItems[selectedPrize].classList.add('highlight');
    message.textContent = `恭喜你！你抽中了：${prizes[selectedPrize]}`;

    currentDraw++;
}
