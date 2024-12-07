<template>
  <div class="app">
    <input
      type="text"
      class="form-control search-bar"
      v-model="searchQuery"
      @input="onSearch"
      placeholder="Search reviews..."
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    onSearch() {
      this.$emit('search', this.searchQuery);
    },
  },
};
</script>

<style scoped>
.search-bar {
  
  top: 130px !important;
  right: 10px;
  width: 80%;
  max-width: 300px;
  font-size: 1rem;
  border-radius: 25px;
  border: 2px solid #F7BC07;
  background-color: #ffffff;
  color: #333;
  outline: none;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1000;
}

.search-bar:focus {
  border-color: #F7BC07;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}

.search-bar::placeholder {
  color: #aaa;
  font-style: italic;
}

@media (max-width: 1200px) {
  .search-bar {
    width: 70%;
    top: 120px !important;
  }
}

@media (max-width: 768px) {
  .search-bar {
    width: 70%;
    top: 0px !important;
  }
}

@media (max-width: 576px) {
  .search-bar {
    width: 100% !important;
    top: 100px !important;
  }
}

@media (max-width: 768px) {
  .navbar-collapse.show + .search-bar {
    top: 150px !important;
  }
}
</style>
