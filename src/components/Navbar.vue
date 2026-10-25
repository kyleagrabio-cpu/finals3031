```vue
<template>
  <header class="navbar">
    <div class="navbar-container">

      <RouterLink to="/" class="brand" @click="closeMenu">
        <img
          src="../assets/CCSLogo.png"
          alt="CPU CCS Logo"
          class="brand-logo"
        />
      </RouterLink>

      <!-- Hamburger Button -->
      <button
        class="hamburger"
        @click="toggleMenu"
        :class="{ active: menuOpen }"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Navigation Links -->
      <nav class="nav-links" :class="{ 'menu-open': menuOpen }">

        <RouterLink to="/" @click="closeMenu">
          Home
        </RouterLink>

        <!-- ABOUT US DROPDOWN -->
        <div class="about-dropdown">
          <button
            class="about-dropdown-toggle"
            :class="{ active: aboutOpen }"
            @click="toggleAbout"
            :aria-expanded="aboutOpen"
          >
            About Us
            <span
              class="dropdown-arrow"
              :class="{ rotated: aboutOpen }"
            ></span>
          </button>

          <div v-if="aboutOpen" class="about-dropdown-menu">
            <RouterLink to="/history" @click="closeMenu">
              History
            </RouterLink>

            <RouterLink to="/missionvision" @click="closeMenu">
              Vision And Mission
            </RouterLink>

            <RouterLink to="/deanmessage" @click="closeMenu">
              Message Of The Dean
            </RouterLink>

            <RouterLink to="/linkages" @click="closeMenu">
              Linkages
            </RouterLink>
          </div>
        </div>

        <!-- ACADEMIC PROGRAMS DROPDOWN -->
        <div class="programs-dropdown">
          <button
            class="programs-dropdown-toggle"
            :class="{ active: programsOpen }"
            @click="togglePrograms"
            :aria-expanded="programsOpen"
          >
            Academic Programs
            <span
              class="dropdown-arrow"
              :class="{ rotated: programsOpen }"
            ></span>
          </button>

          <div v-if="programsOpen" class="programs-dropdown-menu">
            <RouterLink to="/bscs" @click="closeMenu">
              Computer Science
            </RouterLink>

            <RouterLink to="/bsit" @click="closeMenu">
              Information Technology
            </RouterLink>

            <RouterLink to="/bsdmia" @click="closeMenu">
              Digital Media And Interactive Arts
            </RouterLink>

            <RouterLink to="/blis" @click="closeMenu">
              Library Information Science
            </RouterLink>
          </div>
        </div>

        <RouterLink to="/facultystaff" @click="closeMenu">
          Faculty & Staff
        </RouterLink>

        <RouterLink to="/news" @click="closeMenu">
          News & Events
        </RouterLink>

        <RouterLink to="/contact" @click="closeMenu">
          Contact
        </RouterLink>

      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const menuOpen = ref(false);
const aboutOpen = ref(false);
const programsOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;

  if (!menuOpen.value) {
    aboutOpen.value = false;
    programsOpen.value = false;
  }
}

function toggleAbout() {
  aboutOpen.value = !aboutOpen.value;
  programsOpen.value = false;
}

function togglePrograms() {
  programsOpen.value = !programsOpen.value;
  aboutOpen.value = false;
}

function closeMenu() {
  menuOpen.value = false;
  aboutOpen.value = false;
  programsOpen.value = false;
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(110deg, #075e35, #16803d, #55be0f);
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-container {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.brand-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 25px;
}

.nav-links > a {
  color: white;
  text-decoration: none;
  font-family: sans-serif;
  white-space: nowrap;
}

.nav-links > a:hover {
  color: rgb(179, 176, 17);
}

/* SHARED DROPDOWN ARROW */
.dropdown-arrow {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid currentColor;
  transition: transform 0.25s ease;
  flex-shrink: 0;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

/* ABOUT US DROPDOWN */
.about-dropdown,
.programs-dropdown {
  position: relative;
}

.about-dropdown-toggle,
.programs-dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  border: none;
  background: transparent;
  color: white;
  font-family: sans-serif;
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;
}

.about-dropdown-toggle:hover,
.about-dropdown-toggle.active,
.programs-dropdown-toggle:hover,
.programs-dropdown-toggle.active {
  color: rgb(179, 176, 17);
}

/* DROPDOWN PANELS */
.about-dropdown-menu,
.programs-dropdown-menu {
  position: absolute;
  top: calc(100% + 24px);
  left: -15px;
  width: 220px;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  z-index: 1001;
}

.about-dropdown-menu a,
.programs-dropdown-menu a {
  display: block;
  padding: 13px 21px;
  border-bottom: 1px solid #eeeeee;
  color: #333333;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  text-decoration: none;
}

.about-dropdown-menu a:last-child,
.programs-dropdown-menu a:last-child {
  border-bottom: none;
}

.about-dropdown-menu a:hover,
.programs-dropdown-menu a:hover {
  background: #f5f5f5;
  color: #16803d;
}

/* HAMBURGER BUTTON */
.hamburger {
  display: none;
  width: 42px;
  height: 42px;
  padding: 9px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.hamburger span {
  width: 22px;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* ANIMATE TO X */
.hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* MOBILE NAVBAR */
@media (max-width: 768px) {
  .navbar-container {
    flex-wrap: wrap;
  }

  .hamburger {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    width: 100%;
    padding-top: 15px;
  }

  .nav-links.menu-open {
    display: flex;
  }

  .nav-links > a {
    padding: 13px 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }

  .nav-links > a:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .about-dropdown,
  .programs-dropdown {
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }

  .about-dropdown-toggle,
  .programs-dropdown-toggle {
    width: 100%;
    padding: 13px 10px;
    text-align: left;
    justify-content: flex-start;
  }

  .about-dropdown-menu,
  .programs-dropdown-menu {
    position: static;
    width: 100%;
    box-shadow: none;
    background: rgba(0, 0, 0, 0.12);
  }

  .about-dropdown-menu a,
  .programs-dropdown-menu a {
    padding: 13px 25px;
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .about-dropdown-menu a:hover,
  .programs-dropdown-menu a:hover {
    background: rgba(255, 255, 255, 0.1);
    color: rgb(179, 176, 17);
  }
}
</style>
```