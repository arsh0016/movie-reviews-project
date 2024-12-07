<template>
  <nav class="navbar custom-navbar-color navbar-expand-lg navbar-dark shadow-sm w-100 p-3">
    <a class="navbar-brand" href="#">Movie Reviews</a>
    <button
      class="navbar-toggler"
      type="button"
      @click="toggleNavbar"
      :aria-expanded="isNavbarOpen ? 'true' : 'false'"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div 
      class="navbar-collapse" 
      :class="{'show': isNavbarOpen}" 
      id="navbarNav"
    >
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link" exact-active-class="active" @click="closeNavbar">All Reviews</router-link>
        </li>
      </ul>
      <button 
        v-if="isNavbarOpen" 
        class="close-btn" 
        @click="toggleNavbar" 
        aria-label="Close sidebar"
      >
        X
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    closeNavbar() {
      this.isNavbarOpen = false;
    },
  },
};
</script>

<style scoped>
.navbar {
  font-family: 'Poppins', sans-serif;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
}

.custom-navbar-color {
  background: linear-gradient(45deg, #F7BC07, #F7BC07);
}

.navbar-brand {
  font-size: 2rem;
  font-weight: 700;
  color: #fff !important;
  letter-spacing: 2px;
  transition: color 0.3s ease, transform 0.3s ease;
}

.navbar-brand:hover {
  color: #fff;
  transform: scale(1.1);
  border-bottom: 2px solid #fff;
}

.navbar-nav .nav-item {
  margin-left: 30px;
}

.nav-link {
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease, padding 0.3s ease;
}

.nav-link:hover {
  color: #000000;
  transform: scale(1.1);
}

.navbar-toggler {
  border-color: transparent;
}

.navbar-toggler-icon {
  background-color: transparent;
  color: black;
}

.nav-link.active {
  font-weight: bold;
  color: #ffffff !important;
}

.navbar-collapse {
  position: fixed;
  top: 0;
  right: -250px;
  height: 100%;
  width: 250px;
  background-color: #F7BC07;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.3);
  transition: right 0.3s ease-in-out;
  z-index: 1050;
}

.navbar-collapse.show {
  right: 0;
}

.navbar-nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.navbar-nav .nav-item {
  text-align: center;
  margin: 20px 0;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  color: #fff;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1100;
}

.close-btn:hover {
  color: #ff6a00;
}

@media (min-width: 992px) {
  .navbar-collapse {
    position: static;
    display: flex;
    justify-content: flex-end;
    width: auto;
    height: auto;
    background: none;
    box-shadow: none;
  }

  .navbar-nav {
    flex-direction: row;
    padding-top: 0;
  }

  .navbar-nav .nav-item {
    margin-left: 30px;
  }

  .close-btn {
    display: none;
  }

  .navbar-toggler {
    display: none;
  }
}

@media (max-width: 991px) {
  .navbar-nav {
    text-align: center;
    padding-top: 1rem;
  }

  .navbar-toggler {
    background-color: transparent;
  }
}
</style>
