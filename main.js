let count=0;
function qiao(){
    console.log("功德+1");
    let div=document.createElement("div");
    div.className="message";
    div.innerHTML="功德+1";
    //文字效果
    document.body.append(div);
    setTimeout(() => div.remove(), 1000);
    //音效
    let mp3=document.getElementById('music');
    mp3.src="";
    mp3.src="./muyu.mp3";
    mp3.play();
    //计数
    count++;
    let num=document.getElementById("num");
    num.innerHTML="功德："+count;
}