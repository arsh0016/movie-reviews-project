import axios from "axios";

const API_URL = "https://dev-review-site-project.pantheonsite.io/wp-json/wp/v2/review";

export const fetchReviews = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;  
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    throw error;
  }
};

export const fetchReviewById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;  
  } catch (error) {
    console.error("Failed to fetch review:", error);
    throw error;
  }
};
