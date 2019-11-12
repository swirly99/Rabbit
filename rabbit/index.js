var PMx = 500;
var PMy = 800;
var app = new PIXI.Application(PMx,PMy);
document.body.appendChild(app.view);

var uiCeng = new PIXI.Container();   //界面层
app.stage.addChild(uiCeng);
var gameCeng2 = new PIXI.Container();   //游戏层2
app.stage.addChild(gameCeng2);
var gameCeng = new PIXI.Container();   //游戏层
app.stage.addChild(gameCeng);


var bg = new PIXI.Sprite.fromImage("res/lianxi/rabbit/bj.png");   //添加渐变色背景
uiCeng.addChild(bg);

var rabbit = new PIXI.Sprite.fromImage("res/lianxi/rabbit/rabbit.png");   //添加小兔子
gameCeng.addChild(rabbit);
rabbit.x = 70;
rabbit.y = 576;
rabbit.anchor.set(0.5,1);

var gameopen = false;

app.ticker.add(animate);   //创建帧频函数
function animate(){
    if(gameopen === true){
        rabbitscale();   //调用小兔子缩放函数
        moverabbit();   //调用小兔子移动函数
        movemountain1();   //调用移动山1函数
        movemountain2();   //调用移动山2函数
        movehuluobo();   //调用移动胡萝卜函数
        createyun2();   //调用创建云2函数
        moveyun2();     //调用移动云2函数
        moveyun1();   //调用移动云1函数
        createdimian();   //调用创建云2函数
        movedimian();   //调用移动地面函数
        diaotuzi();
        movehuluobo();
    }
    zhenping();
}

var isscale;   //定义小兔子是否缩放
var ismoverabbit;    //定义小兔子是否移动
var speedrabbit;   //定义小兔子移动距离、速度
var ismovemountain1;    //定义山2是否移动
var speedmountain1;   //定义山2移动距离、速度
var ismovemountain2;    //定义山1是否移动
var speedmountain2;   //定义山1移动距离、速度
var ismovehuluobo = false;    //定义胡萝卜是否移动
var speedhuluobo;   //定义胡萝卜移动距离、速度
var zdimianlist=[];  //定义地面总数组
var ismovedimian;  //定义地面是否移动
var speeddimian;   //定义地面移动距离、速度

bg.interactive = true;
bg.on("mousedown",mousedown);   //创建鼠标按下事件
function mousedown(){   //创建鼠标按下
    if(rabbit.y == 576){
    isscale = true;   //小兔子开始缩放
    ismoverabbit = false;   //小兔子不移动
    ismovemountain1 = false;   //山1不移动
    ismovemountain2 = false;   //山2不移动
    ismovehuluobo = false;   //胡萝卜不移动
    ismovedimian = false;   //地面不移动
    }
}

bg.on("mouseup",mouseup);   //创建鼠标松开事件
function mouseup(){
    isscale = false;    //小兔子停止缩放
    ismoverabbit = true;    //小兔子开始移动
    rabbit.scale.y = 1;   
    ismovemountain1 = true;   //山1开始移动
    ismovemountain2 = true;   //山2开始移动
    ismovehuluobo = true;   //胡萝卜开始移动
    ismovedimian = true;   //地面开始移动
}

function rabbitscale(){
    if(isscale === true){   //小兔子开始缩放
     rabbit.scale.y -= 0.02;
     speedrabbit = (1-rabbit.scale.y)*30;   //设置小兔子速度
     speedmountain1 = (1-rabbit.scale.y);   //设置山1速度
     speedmountain2 = (1-rabbit.scale.y)*2;   //设置山2速度
     speedhuluobo = (1-rabbit.scale.y)*4;   //设置胡萝卜速度
     speeddimian = (1-rabbit.scale.y)*7;   //设置地面速度
     if(rabbit.scale.y<0.2){
        rabbit.scale.y = 0.2;
     }
    }
}

var moveDiaoLuo = false;
function moverabbit(){
    if(ismoverabbit === true){   //小兔子开始移动
      rabbit.y -= speedrabbit;   
      speedrabbit --;
      isscale = false;
      if(rabbit.y > 576 && moveDiaoLuo === false){
          rabbit.y = 576;
          ismoverabbit = false;
          ismovedimian = false;
        }
    }
}

var mountain1_1 = new PIXI.Sprite.fromImage("res/lianxi/rabbit/mountain1.png");   ////添加山1图片
uiCeng.addChild(mountain1_1);
mountain1_1.y = 80;
mountain1_1.x = 0;
var mountain1_2 = new PIXI.Sprite.fromImage("res/lianxi/rabbit/mountain1.png");   ////添加山1图片
uiCeng.addChild(mountain1_2);
mountain1_2.y = 80;
mountain1_2.x = 200;
var mountain1_3 = new PIXI.Sprite.fromImage("res/lianxi/rabbit/mountain1.png");   ////添加山1图片
uiCeng.addChild(mountain1_3);
mountain1_3.y = 80;
mountain1_3.x = 400;
var mountain1_4 = new PIXI.Sprite.fromImage("res/lianxi/rabbit/mountain1.png");   ////添加山1图片
uiCeng.addChild(mountain1_4);
mountain1_4.y = 80;
mountain1_4.x = 600;
function movemountain1(){
    if(ismovemountain1 === true){   //山1开始移动
      mountain1_1.x -= speedmountain1; //设置山1移动的速度
      mountain1_2.x -= speedmountain1;
      mountain1_3.x -= speedmountain1;
      mountain1_4.x -= speedmountain1;
      if(rabbit.y == 576){
         ismovemountain1 = false;
      }
    }
   if(mountain1_1.x<-200){
    mountain1_1.x = 598;
    mountain1_1.y = 80;
    }
   if(mountain1_2.x<-200){
    mountain1_2.x = 598;
    mountain1_2.y = 80;
    }
   if(mountain1_3.x<-200){
    mountain1_3.x = 598;
    mountain1_3.y = 80;
    }
   if(mountain1_4.x<-200){
    mountain1_4.x = 598;
    mountain1_4.y = 80;
    }
}

var yun1 = new PIXI.Sprite.fromImage("res/lianxi/rabbit/yun1.png");   //添加长云图片
uiCeng.addChild(yun1);
yun1.y = 220;

var mountain2_1= new PIXI.Sprite.fromImage("res/lianxi/rabbit/mountain2.png");   //添加山2图片1
uiCeng.addChild(mountain2_1);
mountain2_1.y = 176;
mountain2_1.x = 0;
var mountain2_2 = new PIXI.Sprite.fromImage("res/lianxi/rabbit/mountain2.png");   //添加山2图片2
uiCeng.addChild(mountain2_2);
mountain2_2.y = 176;
mountain2_2.x = 220;
var mountain2_3 = new PIXI.Sprite.fromImage("res/lianxi/rabbit/mountain2.png");   //添加山2图片3
uiCeng.addChild(mountain2_3);
mountain2_3.y = 176;
mountain2_3.x = 440;
var mountain2_4 = new PIXI.Sprite.fromImage("res/lianxi/rabbit/mountain2.png");   //添加山2图片4
uiCeng.addChild(mountain2_4);
mountain2_4.y = 176;
mountain2_4.x = 660;

function movemountain2(){
    if(ismovemountain2 === true){   //山2开始移动
      mountain2_1.x -= speedmountain2; //设置山2移动的速度
      mountain2_2.x -= speedmountain2;
      mountain2_3.x -= speedmountain2;
      mountain2_4.x -= speedmountain2;
      if(rabbit.y == 576){
         ismovemountain2 = false;
      }
    }
   if(mountain2_1.x<-360){
    mountain2_1.x = 500;
    mountain2_1.y = 176;
    }
   if(mountain2_2.x<-360){
    mountain2_2.x = 500;
    mountain2_2.y = 176;
    }
   if(mountain2_3.x<-360){
    mountain2_3.x = 500;
    mountain2_3.y = 176;
    }
   if(mountain2_4.x<-360){
    mountain2_4.x = 500;
    mountain2_4.y = 176;
    }
}

var yun2List = [];   //创建云朵数组
var time = 270;
function createyun2(){   //创建云朵
    if(time==270){
        var suofang;
        if(Math.random()>0.5){
            suofang = 1;
        }
        else{
            suofang = 0.5;
        }
        var yun2 = new PIXI.Sprite.fromImage("res/lianxi/rabbit/yun2.png");   //添加云朵图片
        yun2.scale.x = suofang;
        yun2.scale.y = suofang;
        yun2.y = 60;
        yun2.x = 500;
        uiCeng.addChild(yun2);
        yun2List.push(yun2);
        time = 0;
    }
        time ++;
}

function moveyun2(){    //移动云朵
    for (var i=0;i<yun2List.length;i++){
        yun2List[i].x -= 1;
        if(yun2List[i].x <= -180){
            uiCeng.removeChild(yun2List[i]);   //删除云朵
            yun2List.splice(i,1);
            
        }
    }
}

function moveyun1(){   //移动云朵
    yun1.x -= 1;
    if(yun1.x < -500){
        yun1.x = 0;
    }
}

var huluobo_1= new PIXI.Sprite.fromImage("res/lianxi/rabbit/huluobo.png");   //添加萝卜图片1
gameCeng.addChild(huluobo_1);
huluobo_1.anchor.set(0.5,0.5);
huluobo_1.y = 420;
huluobo_1.x = 350;
var huluobo_2 = new PIXI.Sprite.fromImage("res/lianxi/rabbit/huluobo.png");   //添加萝卜图片2
huluobo_2.anchor.set(0.5,0.5);
gameCeng.addChild(huluobo_2);
huluobo_2.y = Math.random()*230+280;
huluobo_2.x = 500;
var huluobo_3 = new PIXI.Sprite.fromImage("res/lianxi/rabbit/huluobo.png");   //添加萝卜图片3
huluobo_3.anchor.set(0.5,0.5);
gameCeng.addChild(huluobo_3);
huluobo_3.y = Math.random()*230+280;
huluobo_3.x = 650;
var huluobo_4 = new PIXI.Sprite.fromImage("res/lianxi/rabbit/huluobo.png");   //添加萝卜图片4
huluobo_4.anchor.set(0.5,0.5);
gameCeng.addChild(huluobo_4);
huluobo_4.y = Math.random()*230+280;
huluobo_4.x = 800;


var score =0;
function movehuluobo(){
    if(ismovehuluobo === true){   //胡萝卜开始移动
      huluobo_1.x -= speedhuluobo; //设置胡萝卜移动的速度
      huluobo_2.x -= speedhuluobo;
      huluobo_3.x -= speedhuluobo;
      huluobo_4.x -= speedhuluobo;
      if(rabbit.y == 576){
         ismovehuluobo = false;
      }
    }
    
    var pos1 = (huluobo_1.x - rabbit.x) * (huluobo_1.x - rabbit.x) + (huluobo_1.y - rabbit.y) * (huluobo_1.y - rabbit.y);   //判断是否发生碰撞
    if(pos1< 45 * 45) {
    huluobo_1.x += 600;
    huluobo_1.y = Math.random()*230+280;
    score = 1 + score;
    text.text = score;
    }
    
    var pos2 = (huluobo_2.x - rabbit.x) * (huluobo_2.x - rabbit.x) + (huluobo_2.y - rabbit.y) * (huluobo_2.y - rabbit.y);   //判断是否发生碰撞
    if(pos2 < 45 * 45) {
    huluobo_2.x += 600;
    huluobo_2.y = Math.random()*230+280;
    score = 1 + score;
    text.text = score;
    }
    
    var pos3 = (huluobo_3.x - rabbit.x) * (huluobo_3.x - rabbit.x) + (huluobo_3.y - rabbit.y) * (huluobo_3.y - rabbit.y);   //判断是否发生碰撞
    if(pos3 < 45 * 45) {
    huluobo_3.x += 600;
    huluobo_3.y = Math.random()*230+280;
    score = 1 + score;
    text.text = score;
    }
    
    var pos4 = (huluobo_4.x - rabbit.x) * (huluobo_4.x - rabbit.x) + (huluobo_4.y - rabbit.y) * (huluobo_4.y - rabbit.y);   //判断是否发生碰撞
    if(pos4 < 45 * 45) {
    huluobo_4.x += 600;
    huluobo_4.y = Math.random()*230+280;
    score = 1 + score;
    text.text = score;
    }
   if(huluobo_1.x<-24){
    huluobo_1.x += 600;
    huluobo_1.y = Math.random()*230+280;
    }
   if(huluobo_2.x<-24){
    huluobo_2.x += 600;
    huluobo_2.y = Math.random()*230+280;
    }
   if(huluobo_3.x<-24){
    huluobo_3.x += 600;
    huluobo_3.y = Math.random()*230+280;
    }
   if(huluobo_4.x<-24){
    huluobo_4.x += 600;
    huluobo_4.y = Math.random()*230+280;
    
    }
   
}

var liushuilist1 = [];
for(var i=1;i<=12;i++){
    var j;
    if (i<10){
        j = "0"+i;
    }else{
        j = i;
    }
    liushuilist1.push("res/lianxi/rabbit/pubu10000"+j+".png");
}
var liushuilist2 = [];
for(var i=1;i<=12;i++){
    var j;
    if (i<10){
        j = "0"+i;
    }else{
        j = i;
    }
    liushuilist2.push("res/lianxi/rabbit/pubu20000"+j+".png");
}

var dmshuiliulist1 = [];
var dmshuiliulist2 = [];

var bian1 = new PIXI.Sprite.fromImage("res/lianxi/rabbit/di"+Math.round(Math.random() * 4+1)+".png");
bian1.anchor.set(0,1);
bian1.y=PMy;
uiCeng.addChild(bian1);
zdimianlist.push(bian1);
var bian2 = new PIXI.Sprite.fromImage("res/lianxi/rabbit/di"+Math.round(Math.random() * 4+1)+".png");
bian2.anchor.set(0,1);
bian2.y=PMy;
uiCeng.addChild(bian2);
zdimianlist.push(bian2);

function createdimian() {
    if(zdimianlist.length<8){
        var zdimsj = Math.round(Math.random() * 4+1);
        if(zdimsj<=4){
            var dimsj = new PIXI.Sprite.fromImage("res/lianxi/rabbit/di"+zdimsj+".png");
        }else{
            var lshuisj = Math.round(Math.random() * 2+1);
            if(lshuisj<=2){
                var dimsj = PIXI.extras.AnimatedSprite.fromImages(liushuilist1);
                dimsj.animationSpeed = 0.2;//设置动画播放速度
                dimsj.play();//播放动画
                
                dmshuiliulist1.push(dimsj);
            }else{
                var dimsj = PIXI.extras.AnimatedSprite.fromImages(liushuilist2);
                dimsj.animationSpeed = 0.2;//设置动画播放速度
                
                dimsj.play();//播放动画
                
                dmshuiliulist2.push(dimsj);
            }
        }
        dimsj.anchor.set(0,1);
        dimsj.x=zdimianlist[zdimianlist.length-1].x+zdimianlist[zdimianlist.length-1].width-1;
        dimsj.y=PMy;
        gameCeng2.addChild(dimsj);
        zdimianlist.push(dimsj);
    }
    for(var i=1;i<zdimianlist.length;i++) {
        zdimianlist[i].x=zdimianlist[i-1].x+zdimianlist[i-1].width-1;
    }
}

function movedimian() {    //移动地面
    if(ismovedimian === true){
        for(var i=zdimianlist.length-1;i>=0;i--) {
            var xdimian = zdimianlist[i];
            xdimian.x -= speeddimian;
        }
        if(zdimianlist[0].x<=-200){   //是否超出边界
            gameCeng2.removeChild(zdimianlist[0]);
            zdimianlist.splice(0,1);
        }
    }
}

var speed = 8
var iszhenping = false;   //震屏开关
var zhenpingTime = 10;   //震屏时间
function diaotuzi(){  //兔子遇水掉落
    for(var i=0;i<.length;i++) {
        if(dmshuiliulist1[i].x > 0 && dmshuiliulist1[i].x <= 40 && rabbit.y>=576){
            rabbit.y += speed;
            ismovehuluobo = false
            if(rabbit.y>866){
                speed = 0;
            }
        }
        if(rabbit.y>860){
            iszhenping = true;
            ismovehuluobo = false;
        }
    }
    for(var i=0;i<dmshuiliulist2.length;i++) {
        if(dmshuiliulist2[i].x > -100 && dmshuiliulist2[i].x <= 40 && rabbit.y>=576){
            rabbit.y += speed
            if(rabbit.y>866){
                speed = 0;
            }
        }
        if(rabbit.y>860){
            iszhenpbing = true;
        }
    }
}

function zhenping(){  //创建震屏动画
    
    if(iszhenping === true){
        gameopen = false;
        uiCeng.x = Math.random()*10-5;
        uiCeng.y = Math.random()*10-5;
        zhenpingTime --;
        
        if(zhenpingTime===0){
        uiCeng.x = 0;
        uiCeng.y = 0;
        iszhenping = false;
        zhenpingTime = 10;
        over();
        }
       
       
        }
        
         
}

var style = {   //设置得分字体样式
    font:'bold italic 30px 微软雅黑',
    fill:'#f7edca',
    stroke:'#4a1850',
    strokeThickness:5,
    dropShadow:true,
    dropShadowAngle:Math.PI/6,
    dropShadowDistance:6,
    wordwrap:true,
};
var timeText = new PIXI.Text("得分：",style);   //创建得分
uiCeng.addChild(timeText);
timeText.x = 20;
timeText.y = 15;
var text = new PIXI.Text("0",style);
uiCeng.addChild(text);
text.x = 110;
text.y = 15;

function over(){   //创建游戏结束动画
            var gameoverPanel = new PIXI.Sprite.fromImage("res/lianxi/rabbit/chongxinbeiban.png");
            gameCeng.addChild(gameoverPanel);
            gameoverPanel.x = 19;
            gameoverPanel.y = 120;
            gameoverPanel.alpha = 0.9;
            
            var timeText123 = new PIXI.Text("0：",style);
            gameoverPanel.addChild(timeText123);
            timeText123.text=score;
            if(score==0){
                timeText123.text="0";
            }
            timeText123.x = 220;
            timeText123.y = 120;
            
            var restartBtn = new PIXI.Sprite.fromImage("res/lianxi/rabbit/xingxinanniu.png");   //创建重新开始按钮
            gameoverPanel.addChild(restartBtn);
            restartBtn.x = 172;
            restartBtn.y = 355;
            
            restartBtn.interactive = true;
            restartBtn.on("click",function(){
                window.location.reload();})
            restartBtn.on("touchstart",function(){
                window.location.reload();
            });
        }

var starPlane = new PIXI.Sprite.fromImage("res/lianxi/rabbit/kaishibeiban.png");   //创建开始界面
var bga = new PIXI.Sprite.fromImage("res/lianxi/rabbit/bj.png");
gameCeng.addChild(bga);
        bga.addChild(starPlane);
        starPlane.x = 18;
        starPlane.y = 100;
        var starBtn = new PIXI.Sprite.fromImage("res/lianxi/rabbit/kaishianniu.png");   //添加开始按钮
        starPlane.addChild(starBtn);
        starBtn.x = 178;
        starBtn.y = 400;
        
        starBtn.interactive = true;
        starBtn.on("click",function(){
            gameopen = true;
            bga.visible = false;
            open = 1;
            sub = 0;
        });
         starBtn.on("touchstart",function(){
            gameopen = true;
            bga.visible = false;
            open=1;
            sub = 0;
        });


