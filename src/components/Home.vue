<template>
  <div class="home-page">
    <div class="intro-page">
      <navbar/>
      <div class="intro" v-if="showIntro">
        <div class="intro-content">
          <p>Going to work or home?</p>
          <p>...Let’s get YOU there without stress!</p>
        </div>
        <div>
          <span class="subcontent">
            Like you aligning vertically and horizontally in HTML and CSS has been frustrating.
            I have used all sorts of unmanageable hacks over the years.
          </span>
        </div>
        <div class="action-buttons">
          <sh-button :title="signupProp" :click="onClick"/>
          <sh-button :title="signinProp"/>
        </div>
      </div>
      <signup-form v-if="!showIntro"></signup-form>
    </div>
    <div class="subcontent-2">
      <div class="inner">
        <div class="route-container"></div>
        <div class="benefits-container">
          <div class="bc_content">
            <img class="bc_content-image" src='../assets/award.png' />
            <div class="bc_content-text">
              <p>Make your life stress free</p>
              <p>Make your life stress free</p>
              <p>Make your life stress free</p>
              <p>Make your life stress free</p>
              <p>Make your life stress free</p>
              <p>Make your life stress free</p>
            </div>
          </div>
        </div>
        <div class="route-container"></div>
        <div class="benefits-container"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
import NavBar from "./NavBar";
import SignUp from './SignUp';

export default {
  components: {
    "signup-form": SignUp,
    "sh-button": Button,
    navbar: NavBar,
  },
  data() {
    return {
      signupProp: "Sign Up",
      signinProp: "Log In",
      readMore: "Read More",
      showIntro: true,
      onClick: this.toggleDisplay,
    };
  },
  methods: {
    toggleDisplay() {
      this.showIntro = !this.showIntro;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-page {
  min-height: 100%;
  height: 100% !important;
}
.intro-page {
  background-image: url("../assets/takeoff.jpg");
  padding: 10px 0 0 0;
  background-size: cover;
  min-height: 100%;
  height: auto;
}

.intro {
  margin: 100px auto;
  width: 60%;
  margin-bottom: 0;
}

.intro-content {
  font-size: 72px;
  color: #ffffff;
}

.action-buttons {
  margin: 50px 200px;
  display: flex;
  margin-bottom: 0;
}

.action-buttons > button {
  background: transparent;
  border: 2px solid #ffffff;
  border-radius: 0;
  font-weight: 500;
  width: 120px;
}
.action-buttons button:nth-child(2) {
  margin-left: auto;
}

.intro-content p {
}

.subcontent {
  font-style: italic;
  color: white;
}

.subcontent-2 {
  min-height: 100%;
  height: 100%;
  background: #0a0a0ab8;
}

.subcontent-2 > .inner {
  max-height: 100%;
  height: 100%;
  overflow-y: scroll;
}

.inner div:nth-child(even) {
  background: white;
}
.route-container {
  height: 50%;
}

.benefits-container {
  height: 50%;
  padding: 20px;
}

.benefits-container > h1 {
  color: #3f51b5;
  font-size: 52px;
  font-weight: 500;
  margin: 5px 0;
  width: 90%;
}

.bc_content {
  display: grid;
  grid-template-columns: auto 1fr;
  width: 90%;
  margin: 0 auto;
}

.bc_content-text {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.bc_content-text > p {
  font-size: 18px;
  padding: 10px 0;
  color: #3f51b5;
}

.bc_content > button {
  background-color: #3f51b5 !important;
}
.bc_content-image {
  width: 220px;
}

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
