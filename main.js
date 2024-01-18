let count = 0;
let img = document.getElementsByTagName('img');
function qiao() {
    console.log("功德+1");
    let div = document.createElement("div");
    div.className = "message";
    div.innerHTML = "功德+1";
    //文字效果
    document.body.append(div);
    setTimeout(() => div.remove(), 1000);
    //音效
    let mp3 = document.getElementById('music');
    mp3.src = "";
    mp3.src = "./src/muyu.mp3";
    mp3.play();
    //计数
    count++;
    let num = document.getElementById("num");
    num.innerHTML = "功德：" + count;
    // 动画效果
    if (img) {
        img['img'].classList.add('enlarged');
        setTimeout(() => {
            img['img'].classList.remove('enlarged');
        }, 500);
    }
}