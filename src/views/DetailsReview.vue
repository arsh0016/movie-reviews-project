<template>
  <div class="container my-5">
    <div v-if="loading" class="d-flex justify-content-center align-items-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-else-if="review" class="card mx-auto review-card">
      <div class="card-body">
        <h1 class="card-title review-title">{{ review.title.rendered }}</h1>
        
        <!-- Rating with Stars -->
        <div class="rating mb-3">
          <span class="badge badge-success">{{ review.rating }}/5</span>
          <div class="star-rating">
            <span v-for="n in 5" :key="n">
              <!-- Determine the star class based on rating -->
              <i 
                class="fa" 
                :class="{
                  'fa-star': n <= Math.floor(review.rating), 
                  'fa-star-half-o': n === Math.floor(review.rating) + 1 && review.rating % 1 >= 0.2, 
                  'fa-star-o': n > Math.floor(review.rating) + 1
                }">
              </i>
            </span>
          </div>
        </div>

        <p class="card-text review-content">
          <strong>Content:</strong>
          <span>{{ review.content_data }}</span>
        </p>
        <p class="card-text review-author">
          <strong>Author:</strong> {{ review.review_author }}
        </p>
        <p class="card-text review-date">
          <strong>Review Date:</strong> {{ review.review_date }}
        </p>
      </div>
    </div>

    <p v-else class="text-center text-muted">Review not found</p>
  </div>
</template>

<script>
import { fetchReviewById } from "../api";

export default {
  data() {
    return {
      review: null,
      loading: true,
    };
  },
  created() {
    this.fetchReview();
  },
  methods: {
    async fetchReview() {
      try {
        const id = this.$route.params.id;
        const reviewData = await fetchReviewById(id);
        this.review = reviewData;
      } catch (error) {
        console.error("Error fetching review", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin-top: 50px;
}

.review-card {
  background: linear-gradient(135deg, #f3e62c, #ff6a00);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 25px;
  text-align: left;
}

.review-title {
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
}

.rating {
  margin-bottom: 15px;
}

.star-rating {
  font-size: 1.5rem;
  color: #ff6a00;
}

.star-rating .fa-star {
  color: #ff6a00;
}

.star-rating .fa-star-half-o {
  color: #ff6a00;
}

.star-rating .fa-star-o {
  color: #ccc;
}

.badge {
  font-size: 1.2rem;
  padding: 8px 15px;
  border-radius: 25px;
  background-color: #28a745;
  color: white;
}

.review-content, .review-author, .review-date {
  font-size: 1.1rem;
  color: #333;
  margin: 10px 0;
}

.review-content span {
  display: block;
  margin-top: 10px;
}

.review-author, .review-date {
  font-style: italic;
}

.card-text strong {
  color: #ff6a00;
}

.card-text {
  margin-bottom: 15px;
}

.text-center.text-muted {
  font-size: 1.1rem;
  color: #aaa;
}


@media (max-width: 1200px) {
  .review-card {
    max-width: 80%;
  }
}

@media (max-width: 992px) {
  .review-card {
    max-width: 90%;
  }

  .review-title {
    font-size: 1.8rem;
  }

  .card-text {
    font-size: 1rem;
  }

  .review-content, .review-author, .review-date {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .review-card {
    max-width: 100%;
    padding: 20px;
  }

  .review-title {
    font-size: 1.6rem;
  }

  .card-text {
    font-size: 0.95rem;
  }

  .review-content, .review-author, .review-date {
    font-size: 0.95rem;
  }
}

@media (max-width: 576px) {
  .review-card {
    padding: 15px;
  }

  .review-title {
    font-size: 1.4rem;
  }

  .card-text {
    font-size: 0.9rem;
  }

  .review-content, .review-author, .review-date {
    font-size: 0.9rem;
  }
}
</style>
