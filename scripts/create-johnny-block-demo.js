const fs = require("fs");
const path = require("path");
const { createCanvas } = require("canvas");

const ROOT = path.join(process.cwd(), "layers");
const TIERS = ["Street", "Elite", "Genesis"];
const SIZE = 2048;
const dirs = ["Background","Body","Outfit","Hair","Eyewear","Chain","Hand","Special","Effects"];
dirs.forEach(d => fs.mkdirSync(path.join(ROOT,d), {recursive:true}));
TIERS.forEach(t => dirs.forEach(d => fs.mkdirSync(path.join(ROOT, `${t} ${d}`), {recursive:true})));

function save(layer, name, draw) {
  const c=createCanvas(SIZE,SIZE), x=c.getContext("2d");
  x.clearRect(0,0,SIZE,SIZE); draw(x,c);
  fs.writeFileSync(path.join(ROOT,layer,name), c.toBuffer("image/png"));
}
function poly(x, pts, fill){x.fillStyle=fill;x.beginPath();x.moveTo(...pts[0]);pts.slice(1).forEach(p=>x.lineTo(...p));x.closePath();x.fill();}
function text(x,t,y,size=70){x.font=`900 ${size}px sans-serif`;x.textAlign="center";x.fillText(t,1024,y);}

// ORIGINAL JOHNNY BLOCK prototype art. It is intentionally not a copy of any TV character.
save("Background","Blockchain Heights#45.png",x=>{let g=x.createLinearGradient(0,0,2048,2048);g.addColorStop(0,"#07150f");g.addColorStop(1,"#16d66d");x.fillStyle=g;x.fillRect(0,0,2048,2048);x.globalAlpha=.35;for(let i=0;i<11;i++){x.fillStyle=i%2?"#0a2418":"#103824";x.fillRect(i*210,650+(i%3)*100,150,1100);}x.globalAlpha=1;x.fillStyle="#baffd5";text(x,"BLOCKCHAIN HEIGHTS",1850,72);});
save("Background","Upper District#18.png",x=>{let g=x.createLinearGradient(0,0,2048,2048);g.addColorStop(0,"#0b1238");g.addColorStop(.55,"#3425a8");g.addColorStop(1,"#8e3cff");x.fillStyle=g;x.fillRect(0,0,2048,2048);x.fillStyle="#8cecff";for(let i=0;i<9;i++)x.fillRect(80+i*245,900-(i%4)*130,160,1150);x.fillStyle="#fff";text(x,"UPPER DISTRICT",1850,72);});
save("Background","Golden Realm#4.png",x=>{let g=x.createRadialGradient(1024,900,80,1024,900,1400);g.addColorStop(0,"#7b5a00");g.addColorStop(.5,"#171004");g.addColorStop(1,"#000");x.fillStyle=g;x.fillRect(0,0,2048,2048);x.strokeStyle="#f4d35e";x.lineWidth=20;for(let r=300;r<1500;r+=250){x.beginPath();x.arc(1024,950,r,0,Math.PI*2);x.stroke();}x.fillStyle="#f4d35e";text(x,"GENESIS",1850,80);});

["Deep Bronze#40.png","Warm Caramel#30.png","Midnight Bronze#18.png"].forEach((n,i)=>save("Body",n,x=>{const skins=["#8a4f2b","#b96f43","#5b321f"];x.fillStyle=skins[i];x.beginPath();x.arc(1024,820,350,0,Math.PI*2);x.fill();x.fillRect(760,1030,528,600);x.beginPath();x.ellipse(1024,1600,570,520,0,0,Math.PI*2);x.fill();x.fillStyle="#3b2117";x.beginPath();x.arc(895,820,20,0,Math.PI*2);x.arc(1153,820,20,0,Math.PI*2);x.fill();x.lineWidth=20;x.strokeStyle="#3b2117";x.beginPath();x.arc(1024,900,130,.2,Math.PI-.2);x.stroke();}));

save("Outfit","Block Tee#45.png",x=>{x.fillStyle="#111";poly(x,[[500,1350],[760,1170],[1288,1170],[1548,1350],[1660,2048],[388,2048]] ,"#111");x.fillStyle="#35f07f";text(x,"JB",1700,180);});
save("Outfit","Emerald Jacket#18.png",x=>{poly(x,[[430,1350],[760,1160],[1024,1320],[1288,1160],[1618,1350],[1730,2048],[318,2048]],"#0c8b4b");x.strokeStyle="#b8ffd6";x.lineWidth=24;x.beginPath();x.moveTo(1024,1320);x.lineTo(1024,2048);x.stroke();});
save("Outfit","Golden Founder Suit#3.png",x=>{poly(x,[[430,1350],[760,1160],[1024,1340],[1288,1160],[1618,1350],[1730,2048],[318,2048]],"#17130a");x.strokeStyle="#f4d35e";x.lineWidth=30;x.strokeRect(620,1420,808,600);});

save("Hair","Block Crown Fade#35.png",x=>{x.fillStyle="#15120e";x.beginPath();x.ellipse(1024,510,370,220,0,Math.PI,Math.PI*2);x.fill();x.fillStyle="#d7a928";poly(x,[[720,570],[760,260],[900,430],[1020,170],[1110,430],[1290,230],[1320,580]],"#d7a928");});
save("Hair","Neon High Top#12.png",x=>{x.fillStyle="#52ff9a";x.fillRect(760,180,528,420);x.fillStyle="#0a2818";for(let i=0;i<8;i++)x.fillRect(790+i*65,200,25,360);});
save("Hair","Golden Genesis Crown#2.png",x=>{x.fillStyle="#f4d35e";poly(x,[[690,590],[730,220],[900,390],[1024,120],[1140,390],[1320,210],[1360,590]],"#f4d35e");x.fillStyle="#fff3b0";for(const p of [[790,350],[1024,250],[1240,340]]){x.beginPath();x.arc(...p,30,0,Math.PI*2);x.fill();}});

save("Eyewear","Black Blocks#35.png",x=>{x.fillStyle="#080808";x.fillRect(720,720,280,150);x.fillRect(1048,720,280,150);x.fillRect(990,760,70,28);});
save("Eyewear","Electric Visor#10.png",x=>{let g=x.createLinearGradient(700,0,1350,0);g.addColorStop(0,"#54e7ff");g.addColorStop(1,"#b64cff");x.fillStyle=g;x.fillRect(700,710,650,165);});
save("Eyewear","Genesis Gold Frames#2.png",x=>{x.strokeStyle="#f4d35e";x.lineWidth=35;x.strokeRect(710,710,290,165);x.strokeRect(1048,710,290,165);x.beginPath();x.moveTo(1000,765);x.lineTo(1048,765);x.stroke();});

save("Chain","JB Chain#30.png",x=>{x.strokeStyle="#ddd";x.lineWidth=38;x.beginPath();x.arc(1024,1240,300,.15,Math.PI-.15);x.stroke();x.fillStyle="#ddd";x.fillRect(930,1450,188,150);x.fillStyle="#111";text(x,"JB",1565,80);});
save("Chain","Diamond Block#8.png",x=>{x.strokeStyle="#bff8ff";x.lineWidth=45;x.beginPath();x.arc(1024,1240,310,.15,Math.PI-.15);x.stroke();x.fillStyle="#dffcff";poly(x,[[1024,1430],[1140,1530],[1024,1680],[908,1530]],"#dffcff");});
save("Chain","Genesis Key#1.png",x=>{x.strokeStyle="#f4d35e";x.lineWidth=42;x.beginPath();x.arc(1024,1230,310,.15,Math.PI-.15);x.stroke();x.fillStyle="#f4d35e";x.beginPath();x.arc(1024,1510,85,0,Math.PI*2);x.fill();x.fillRect(1000,1510,48,250);});

save("Hand","No Hand Item#55.png",x=>{});
save("Hand","Block Phone#10.png",x=>{x.fillStyle="#111";x.fillRect(1430,1320,220,400);x.strokeStyle="#56ff9b";x.lineWidth=18;x.strokeRect(1450,1340,180,360);});
save("Hand","Golden Ledger#2.png",x=>{x.fillStyle="#f4d35e";x.fillRect(1390,1360,300,360);x.fillStyle="#111";text(x,"LEDGER",1570,48);});

save("Special","No Special#60.png",x=>{});
save("Special","Block Zero Pass#5.png",x=>{x.fillStyle="#050505";x.fillRect(240,250,420,220);x.strokeStyle="#f4d35e";x.lineWidth=15;x.strokeRect(240,250,420,220);x.fillStyle="#f4d35e";text(x,"BLOCK ZERO",385,45);});
save("Special","Founder Halo#1.png",x=>{x.strokeStyle="#f4d35e";x.lineWidth=35;x.beginPath();x.ellipse(1024,250,470,100,0,0,Math.PI*2);x.stroke();});

save("Effects","No Effect#55.png",x=>{});
save("Effects","Green Chain Glow#12.png",x=>{x.strokeStyle="rgba(70,255,145,.55)";x.lineWidth=35;for(let r=520;r<900;r+=120){x.beginPath();x.arc(1024,950,r,0,Math.PI*2);x.stroke();}});
save("Effects","Genesis Sparks#2.png",x=>{x.fillStyle="#ffe17a";for(let i=0;i<26;i++){let a=i*.83,r=500+(i%5)*130;x.beginPath();x.arc(1024+Math.cos(a)*r,950+Math.sin(a)*r,12+(i%3)*7,0,Math.PI*2);x.fill();}});

// Copy prototype assets into each tier folder so preview mode always has runnable assets.
// These remain temporary until the approved production PNG pack replaces them.
TIERS.forEach(tier => dirs.forEach(layer => {
  const src = path.join(ROOT, layer);
  const dst = path.join(ROOT, `${tier} ${layer}`);
  for (const file of fs.readdirSync(src).filter(f => f.toLowerCase().endsWith(".png"))) {
    fs.copyFileSync(path.join(src,file), path.join(dst,file));
  }
}));
console.log("Johnny Block prototype layer pack created for Street, Elite, and Genesis preview tiers.");
