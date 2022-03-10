const getRandomValue = (max, min) =>Math.round(Math.random() * (max-min)) + min;
const app = Vue.createApp({
  data(){
    return {
      playerHealth: 100,
      monsterHealth: 100,
      rounds: 0
    }
  },
  methods:{
    attackMonster(){
      this.rounds++;
     const attackValue =  getRandomValue(12,5)
     this.monsterHealth -= attackValue;
     this.attackPlayer();
    },
    attackPlayer(){
      this.rounds++;
      const attackValue = getRandomValue(15,8)
      this.playerHealth -= attackValue;
    },
    specialAttackMonster(){
      this.rounds++;
      const attackValue = getRandomValue(25,10)
      this.monsterHealth -= attackValue;
     this.attackPlayer();
    },
    healPlayer(){
      this.rounds++;
      const heal = getRandomValue(20, 8);
      if(this.playerHealth + heal > 100){
        this.playerHealth = 100;
      } else {
        this.playerHealth += heal
      }
      this.attackPlayer()
    }
  }, 
  computed: {
    monsterBarStyles(){
      return {width: this.monsterHealth +'%' }
    },
    playerBarStyles(){
      return {width: this.playerHealth +'%' }
    },
    mayUseSpecialAttack(){
      return this.rounds % 3 !== 0
    }
  }

})

app.mount('#game')