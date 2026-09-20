const fs=require("fs"); const path=require("path");
const tiers=["Street","Elite","Genesis"];
const layers=["Background","Body","Outfit","Hair","Eyewear","Chain","Hand","Special","Effects"];
for(const tier of tiers) for(const layer of layers){
 const dir=path.join(process.cwd(),"layers",`${tier} ${layer}`);
 fs.mkdirSync(dir,{recursive:true});
 const keep=path.join(dir,".gitkeep"); if(!fs.existsSync(keep)) fs.writeFileSync(keep,"");
}
console.log("Johnny Block production tier folders ready: 27 layer folders.");
