```vue
<template>
  <section class="history-section">
    <div class="history-container">

      <!-- LOGO -->
      <div class="history-photo">
        <img
          src="../assets/CCSLogo2.jpg"
          alt="CPU College of Computer Studies logo"
          class="ccs-logo"
        />
      </div>

      <!-- HISTORY CONTENT -->
      <div class="history-content">
        <p class="history-label">OUR HISTORY</p>

        <div class="history-heading">
          <span class="gold-line"></span>
          <h2>How It Started</h2>
        </div>

        <p class="history-description">
          The college began in 1995 with the birth of the Bachelor of Science
          in Computer Science (BSCS) program under the College of Commerce.
          The first batch of students was composed of two sections with about
          100 students. Prof. Mary O’ T. Penetrante was appointed to be the
          faculty-in-charge of the new program.
        </p>

        <RouterLink to="/history" class="history-button">
          READ MORE →
        </RouterLink>
      </div>

    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
/* MAIN SECTION */
.history-section {
  padding: 70px 7%;
  background: #f3f7f3;
}

/* LAYOUT */
.history-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 55px;
}

/* LOGO */
.history-photo {
  flex: 1;
  text-align: center;
}

.ccs-logo {
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: contain;
}

/* CONTENT */
.history-content {
  flex: 1.2;
}

.history-label {
  margin: 0 0 15px;
  color: #278047;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
}

/* HEADING */
.history-heading {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.gold-line {
  width: 5px;
  height: 40px;
  flex-shrink: 0;
  background: #ffad1f;
}

.history-heading h2 {
  margin: 0;
  color: #174d30;
  font-size: 36px;
  font-weight: 600;
}

/* DESCRIPTION */
.history-description {
  margin: 0;
  color: #666666;
  font-size: 15px;
  line-height: 1.9;
}

/* BUTTON */
.history-button {
  display: inline-block;
  margin-top: 25px;
  padding: 11px 20px;
  background: #174d30;
  color: white;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.history-button:hover {
  background: #278047;
}

/* MOBILE */
@media (max-width: 768px) {
  .history-section {
    padding: 50px 6%;
  }

  .history-container {
    flex-direction: column;
    gap: 30px;
  }

  .ccs-logo {
    max-width: 220px;
  }

  .history-content {
    width: 100%;
  }

  .history-heading h2 {
    font-size: 30px;
  }
}

@media (max-width: 480px) {
  .history-section {
    padding: 40px 5%;
  }

  .history-heading h2 {
    font-size: 27px;
  }

  .history-description {
    font-size: 14px;
    line-height: 1.8;
  }
}
</style>
```