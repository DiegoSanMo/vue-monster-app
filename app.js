const getRandomValue = (max, min) =>
  Math.round(Math.random() * (max - min)) + min;
const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      rounds: 0,
      winner: null,
    };
  },
  methods: {
    attackMonster() {
      this.rounds++;
      const attackValue = getRandomValue(12, 5);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      this.rounds++;
      const attackValue = getRandomValue(15, 8);
      this.playerHealth -= attackValue;
    },
    specialAttackMonster() {
      this.rounds++;
      const attackValue = getRandomValue(25, 10);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    healPlayer() {
      this.rounds++;
      const heal = getRandomValue(20, 8);
      if (this.playerHealth + heal > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += heal;
      }
      this.attackPlayer();
    },
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.rounds = 0;
      this.winner = null;
    },
    surrender(){
      this.winner = 'monster'
    }
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.rounds % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
});

app.mount("#game");
