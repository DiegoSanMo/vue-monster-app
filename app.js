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
      const attackValue = getRandomValue(15,8)
      this.playerHealth -= attackValue;
    },
    specialAttackMonster(){
      this.rounds++;
      const attackValue = getRandomValue(25,10)
      this.monsterHealth -= attackValue;
     this.attackPlayer();
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
      return this.round % 3 !== 0
    }
  }

})

app.mount('#game')