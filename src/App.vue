<template>
  <div>
    <NavbarComponent />
    
    <div class="content">
      <router-view />
    </div>

  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";

export default {
  components: {
    NavbarComponent,
  },
};
</script>

<style scoped>
.content {
  min-height: calc(100vh - 130px);
  padding: 20px;
  box-sizing: border-box;
}
</style>
