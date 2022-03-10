const getRandomValue = (max, min) =>Math.round(Math.random() * (max-min)) + min;
const app = Vue.createApp({
  data(){
    return {
      playerHealth: 100,
      monsterHealth: 100
    }
  },
  methods:{
    attackMonster(){
     const attackValue =  getRandomValue(12,5)
     this.monsterHealth -= attackValue;
     console.log(this.monsterHealth)
     this.attackPlayer();
    },
    attackPlayer(){
      const attackValue = getRandomValue(15,8)
      this.playerHealth -= attackValue;
     }
  }, 
  computed: {
    monsterBarStyles(){
      return {width: this.monsterHealth +'%' }
    },
    playerBarStyles(){
      return {width: this.playerHealth +'%' }
    }
  }

})

app.mount('#game')