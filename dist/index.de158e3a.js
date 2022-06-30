let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/*你好，我是前端新人小陈
*接下来我要加样式了
*我要加的是*/
body{
    color:red;
}
/*下面我要展示一下我的前端功底
*首先需要一个div
*/
#div1{
    border: 1px solid red;
    width:200px;
    height:200px;
}
/*我将会把div变成一个八卦图
*看好了
*首先变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*八卦是由阴阳形成的
*一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*这时候
加上两个球球
就大功告成啦*/
/*首先是个黑球*/
#div1::before{
    width:100px;
    height:100px;
    left:0;
    top:0;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);

}
/*然后是个白球*/
#div1::after{
    width:100px;
    height:100px;
    left:0;
    bottom:0;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = "";
let n = 0;
let step = ()=>{
    setTimeout(()=>{
        if (string[n] === "\n") string2 += "<br>";
        else if (string[n] === " ") string2 += "&nbsp";
        else string2 += string[n];
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 999999);
        html.scrollTo(0, 999999);
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 10);
};
step();

//# sourceMappingURL=index.de158e3a.js.map
