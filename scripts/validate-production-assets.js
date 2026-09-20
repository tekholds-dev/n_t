const fs=require("fs"),path=require("path");
const tiers=["Street","Elite","Genesis"], layers=["Background","Body","Outfit","Hair","Eyewear","Chain","Hand","Special","Effects"];
let missing=[];
for(const t of tiers) for(const l of layers){
 const d=path.join(process.cwd(),"layers",t+" "+l);
 const png=fs.existsSync(d)?fs.readdirSync(d).filter(f=>/\.png$/i.test(f)):[];
 if(!png.length) missing.push(t+" "+l);
}
if(missing.length){
 console.error("\nJOHNNY BLOCK: production artwork is not installed.\n");
 console.error("Missing PNG assets in:\n- "+missing.join("\n- "));
 console.error("\nPlaceholder/rectangle art is intentionally disabled. Install approved 2048x2048 production PNG traits before preview/generation.\n");
 process.exit(1);
}
console.log("Johnny Block production asset validation passed.");
