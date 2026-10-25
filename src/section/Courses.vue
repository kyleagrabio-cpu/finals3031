```vue
<template>
  <section class="programs">
    <div class="section-heading">
      <p class="subtitle">COLLEGE OF COMPUTER STUDIES</p>
      <h2>Explore Our Programs</h2>
      <p>Discover the program that matches your passion and future goals.</p>
    </div>

    <div class="program-list">
      <!-- Computer Science -->
      <RouterLink to="/bscs" class="program-card">
        <img src="../assets/CSLogo.png" alt="Computer Science Logo" />

        <h3>Computer Science</h3>
        <p>
          Learn programming, software development, and modern computing.
        </p>

        <span>Learn More →</span>
      </RouterLink>

      <!-- Information Technology -->
      <RouterLink to="/bsit" class="program-card">
        <img src="../assets/ITSLogo.png" alt="Information Technology Logo" />

        <h3>Information Technology</h3>
        <p>
          Develop skills in networking, web development, and IT solutions.
        </p>

        <span>Learn More →</span>
      </RouterLink>

      <!-- Digital Media and Interactive Arts -->
      <RouterLink to="/bsdmia" class="program-card">
        <img
          src="../assets/MIDASLogo.png"
          alt="Digital Media and Interactive Arts Logo"
        />

        <h3>Digital Media and Interactive Arts</h3>
        <p>
          Explore digital design, multimedia, and interactive experiences.
        </p>

        <span>Learn More →</span>
      </RouterLink>

      <!-- Library and Information Science -->
      <RouterLink to="/blis" class="program-card">
        <img
          src="../assets/LISLogo.png"
          alt="Library and Information Science Logo"
        />

        <h3>Library and Information Science</h3>
        <p>
          Learn about information management, research, and library services.
        </p>

        <span>Learn More →</span>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
/* Main section */
.programs {
  padding: 60px 8%;
  background-color: #f5f8f5;
}

/* Heading */
.section-heading {
  text-align: center;
  margin-bottom: 35px;
}

.subtitle {
  color: #278047;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
}

.section-heading h2 {
  color: #174d30;
  font-size: 32px;
  margin: 10px 0;
}

.section-heading p {
  color: #666;
  line-height: 1.6;
}

/* Program cards */
.program-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.program-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 20px;
  background-color: white;
  border: 1px solid #e0e8e1;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  transition: 0.2s;
}

.program-card:hover {
  border-color: #278047;
  transform: translateY(-4px);
}

/* Program logo */
.program-card img {
  width: 110px;
  height: 110px;
  object-fit: contain;
  margin-bottom: 15px;
}

/* Program title */
.program-card h3 {
  color: #174d30;
  font-size: 18px;
  margin: 5px 0 10px;
}

/* Program description */
.program-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
}

/* Learn More link */
.program-card span {
  color: #278047;
  font-size: 14px;
  font-weight: bold;
  margin-top: auto;
}

/* Tablet */
@media (max-width: 1000px) {
  .program-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile */
@media (max-width: 600px) {
  .programs {
    padding: 40px 5%;
  }

  .section-heading h2 {
    font-size: 26px;
  }

  .program-list {
    grid-template-columns: 1fr;
  }
}
</style>
```