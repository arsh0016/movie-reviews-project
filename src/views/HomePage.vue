<template>
  <div class="container ">
    <h1 class="text-center text-primary">Movie Reviews</h1>
    <SearchBar @search="filterReviews" class="mb-4" />
    <div v-if="loading" class="d-flex justify-content-center align-items-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else-if="filteredReviews.length">
      <ul class="list-group">
        <li v-for="review in filteredReviews" :key="review.id" class="list-group-item review-item">
          <router-link :to="`/review/${review.id}`" class="text-decoration-none review-link">
            {{ review.title.rendered }}
          </router-link>
        </li>
      </ul>
    </div>
    <p v-else class="text-center">No reviews found.</p>
  </div>
</template>

<script>
import { fetchReviews } from "../api";
import SearchBar from "../components/SearchBar.vue";

export default {
  components: { SearchBar },
  data() {
    return {
      reviews: [],
      filteredReviews: [],
      loading: true,
    };
  },
  created() {
    this.fetchReviews();
  },
  methods: {
    async fetchReviews() {
      try {
        const reviewsData = await fetchReviews();
        this.reviews = reviewsData;
        this.filteredReviews = this.reviews;
      } catch (error) {
        console.error("Error fetching reviews", error);
      } finally {
        this.loading = false;
      }
    },
    filterReviews(query) {
      this.filteredReviews = this.reviews.filter((review) =>
        review.title.rendered.toLowerCase().includes(query.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.container {
  font-family: 'Poppins', sans-serif;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #F7BC07 !important;
}

.list-group {
  padding: 0;
}

.review-item {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 15px;
  transition: all 0.3s ease;
}

.review-item:hover {
  background-color: #F7BC07;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
  color:white;
}

.review-link {
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
}

.review-link:hover {
  color: #ffffff;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  .review-link {
    font-size: 1.1rem;
  }
}
</style>
