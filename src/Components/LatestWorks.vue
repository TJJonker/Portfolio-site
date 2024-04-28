<template>
  <div class="section">
    <div class="section-background"></div>
    <div class="con">
      <div class="col-s-12 title">
        <h1>What I've been <span class="secondary-text-color">working on lately</span></h1>
      </div>
      <div class="cards">
        <latest-work-card
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
        ></latest-work-card>
      </div>
      <div class="button-flex">
        <button class="btn button">See all my work</button>
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
      projects: []
    };
  },
  async created() {
    const projects = inject('$projects');
    for (let i = 0; i < 3; i++) {
      const res = await projects.GetProject(0);
      this.projects.push(res);
    }
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
}

.button {
  background-color: #C4A484;
  color: white;
  margin-top: 12px;
  box-shadow: -2px 2px rgb(0, 0, 0, .15);
  font-family: 'Montserrat';
  font-weight: 500;
}

.cards {
  display: flex;
  flex-direction: column;
  margin: 0 24px;
}

@media only screen and (min-width: 1200px) {
  .cards {
    flex-direction: row;
  }
}
</style>
