<template>
  <div class="section">
    <div class="section-background"></div>
      <div class="con">
        <div class="title">
          <h1>What I've been <span class="secondary-text-color">working on lately</span></h1>
        </div>
        <div class="cards">
          <latest-work-card
            v-for="(project, index) in projects"
            :key="index"
            :project="project"
            :active="index == this.tabletActive"
          ></latest-work-card>
        </div>
        <div class="button-flex">
          <router-link :to="'/projects'" class="btn button" style="z-index: 2;">
            See all my work
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import LatestWorkCard from './LatestWorkCard.vue';
import {inject} from 'vue';

export default {
  components: {
    LatestWorkCard,
  },
  data() {
    return {
      projects: [],
      tabletActive: -1
    };
  },
  async created() {
    const projects = inject('$projects');
    for (let i = 0; i < 3; i++) {
      const res = await projects.GetProject(i);
      this.projects.push(res);
    }
  },
  methods: {
    IncrementCounter() {
      this.tabletActive++;
      if(this.tabletActive > 2)
        this.tabletActive -= 3;
    },

    StartInterval() {
      this.IncrementCounter();
      setInterval(this.IncrementCounter, 5000);
    }
  },
  mounted() {
    setTimeout(this.StartInterval, 100);    
  }
};
</script>

<style scoped>
.section {
  position: relative; /* Required for z-index */
  background-color: #f6f6f6;
}

.section-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    -10deg,
    transparent 39.9%,
    #c4a484 40%,
    #c4a484 50%,
    transparent 50.1%
  );
  z-index: 0;
}

.title {
  text-align: center;
  margin-bottom: 48px;
}

.button-flex {
  display: flex;
  justify-content: end;
  text-decoration: none;
}

.button {
  background-color: #C4A484;
  color: white;
  margin-top: 12px;
  box-shadow: -2px 2px rgb(0, 0, 0, .15);
  font-family: 'Montserrat';
  font-weight: 500;
  position: relative;
  cursor: pointer;
}

.cards {
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 750px) {
  .cards {
    flex-direction: row;
    justify-content: space-evenly;
  }

  .button {
    padding: 12px 16px;
    font-size: 18px;
  }
}
</style>
