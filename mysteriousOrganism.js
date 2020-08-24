// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
function pAequorFactor(num,dna){
  return {
    specimenNum: num,
    dna:dna,
    mutate(){
      const dnaBases = ['A', 'T', 'C', 'G'];
      let randBase = Math.floor(Math.random()* this.dna.length);
      let x = Math.floor(Math.random()*dnaBases.length);
      while(this.dna[randBase]===dnaBases[x]){
          x = Math.floor(Math.random()*dnaBases.length);
      }
      this.dna[randBase]=dnaBases[x];
      return this.dna;
    },
    compareDNA(pAequor){
      let percent = 100;
      for(let x = 0; x < this.dna.length; x++){
        if(this.dna[x]===pAequor[x]){
          percent -= 6.66666666667;
        }
      }
      console.log(`Specimen #${this.specimenNum} and specimen with dna ${pAequor} are ${percent}% similar`);
    },
    willLikelySurvive(){
      let percent = 0;
      for(let x = 0; x < this.dna.length; x++){
        if(this.dna[x]=== 'C'|| this.dna[x]=== 'G'){
          percent += 6.66666666667;
        }
      }
      if(percent >= 60){
        return true;
      }else{
        return false;
      }
    }
  }
}
const pAequorArray = [];
for(let x = 1; x < 31; x++){
    pAequorArray.push(pAequorFactor(x,    mockUpStrand())); 
}
console.log(pAequorArray);


