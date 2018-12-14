<template>
  <div class="signup-form">
    <h2> Create Account </h2>
    <hr />
    <span>All fields are required</span>
    <div class="form-inputs">
      <div class="sh-input-container">
        <div class="sh-input-container">
          <label>Firstname</label>
          <input type="text" id="firstname" name="firstname" class="sh-inputs"/>
        </div>
        <div class="sh-input-container">
          <label>Lastname</label>
          <input type="text" id="lastname" name="lastname" class="sh-inputs"/>
        </div>
      </div>
      <div class="sh-input-container">
        <label>Email</label>
        <input type="text" id="email" name="email" class="sh-inputs"/>
      </div>
      <div class="sh-input-container">
        <label>Password</label>
        <input type="text" id="password" name="password" class="sh-inputs"/>
      </div>
      <div class="sh-input-container">
        <label>Confirm Password</label>
        <input type="text" id="retype-pass" name="retype-pass" class="sh-inputs"/>
      </div>

      <span>Clicking the submit button means you accept the terms of use & privacy policy</span>
      <sh-button :title="proceed" />
    </div>
  </div>
</template>
<script>
  import Logo from './Logo';
  import Button from './Button';

  export default {
    components: {
      logo: Logo,
      "sh-button": Button,
    },
    data() {
      return {
        proceed: "Proceed",
      };
    }
  }
</script>
<style>
.signup-form {
  display: grid !important;
  margin: 0 auto;
  width: 35%;
  margin: 100px auto;
  background: white;
  padding: 10px 0 0 0;

}

span {
  font-style: italic;
}

label {
  margin-bottom: 0;
}

hr {
  margin-bottom: 10px;
}

.form-inputs {
  padding: 20px;
}

.sh-inputs {
  margin: 10px 0;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #f0f0f0;
  outline: none;
  padding: 0 10px;
}

.sh-input-container {
  display: grid;
}

.form-inputs > div:nth-child(1) {
  grid-template-columns: 1fr 1fr;
}

.form-inputs > div:nth-child(1) > :nth-child(2) {
  margin-left: auto;
}
</style>

Delete room and delete office not updating
editing resources not updating
Funny behaviour when downloading data, and file type is too large
People page action
Toast notifications stay too long
