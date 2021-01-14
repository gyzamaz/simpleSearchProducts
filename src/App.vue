<template>
  <div id="app">
    <CategoryProductsList />
  </div>
</template>

<script>
import CategoryProductsList from "./components/CategoryProductsList";

export default {
  name: "App",
  components: {
    CategoryProductsList,
  },
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
