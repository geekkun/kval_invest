<template>
  <div id="app">
    <!-- <img width="25%" src="./assets/logo.png"> -->
    <h1>Квалифицированный инвестор</h1>
    <b-container fluid>
      <b-row>
        <b-col>
          <HelloWorld msg="trades_last_4_months" :min="10" :current="0"/>
        </b-col>
        <b-col>
          <HelloWorld msg="trades_last_30_days" :min="1" :current="0"/>
        </b-col>
        <b-col>
          <HelloWorld msg="year_sum" :min="6000000" :current="7000000" money="True"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
