<template>
  <header class="header">
    <div class="container">
      <div class="header-logo">
        <svg
          class="symbol"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <router-link to="/">
          <h1 class="logo">Logo</h1>
        </router-link>
      </div>
      <nav>
        <ul class="navigation">
          <li
            class="link-collection"
            :class="route === 'home-and-garden' ? 'active' : ''"
          >
            <router-link to="/collections/home-and-garden">Home and Garden</router-link>
          </li>
          <li class="link-collection" :class="route === 'apparel' ? 'active' : ''">
            <router-link to="/collections/apparel">Apparel</router-link>
          </li>
          <li class="link-collection" :class="route === 'jewelry' ? 'active' : ''">
            <router-link to="/collections/jewelry">Jewelry</router-link>
          </li>
        </ul>
      </nav>
      <ul class="menu">
        <li class="menu-link">Login</li>
        <li class="menu-link">Cart</li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    route() {
      return this.$route.params.collectionName;
    },
  },
  watch: {
    route: {
      handler(value) {
        if (!value) return;
        return this.$route.params.collectionName;
      },
      immediate: true,
    },
  },
};
</script>

<style>
.header {
  font-family: "Satoshi", sans-serif;
  height: 6.3rem;
  font-size: 1.4rem;
  padding: 0 8rem;
  border-bottom: 1px solid #3f3f3f;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 120rem;
  margin: 0 auto;
  height: 6.3rem;
}
.header-logo {
  width: 12rem;
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  transition: gap 0.5s;
}

.header-logo:hover {
  gap: 1rem;
}

.symbol {
  width: 2.8rem;
}

.logo {
  font-family: "Stardom", sans-serif;
  cursor: pointer;
}
nav {
  display: flex;
  align-items: center;
}

a {
  text-decoration: none;
  color: #000;
}

.link-collection,
.menu-link {
  font-weight: 500;
  cursor: pointer;
  position: relative;
}

.link-collection:after,
.menu-link:after {
  content: "";
  position: absolute;
  bottom: -0.2rem;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #000;
  transform-origin: center;
  transform: scaleX(0);
  transition: transform 0.4s;
}

.link-collection:hover:after,
.menu-link:hover::after,
.active::after {
  transform: scaleX(1);
}

.menu,
.navigation {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  text-transform: uppercase;
}
</style>
