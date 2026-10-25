
<template>
  <div class="programs-page">

    <!-- HERO -->
    <div class="programs-hero">
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <div class="hero-label">COLLEGE OF COMPUTER STUDIES</div>
        <div class="hero-title">Academic Programs</div>
        <div class="hero-line"></div>
      </div>
    </div>

    <!-- PROGRAMS -->
    <div class="programs-content">

      <div class="content-heading">
        <div class="gold-line"></div>
        <div class="content-title">Our Academic Programs</div>
      </div>

      <!-- COMPUTER SCIENCE -->
      <div class="program-row">
        <img src="../assets/CSLogo.png" alt="Computer Science Logo">

        <div class="program-details">
          <div class="program-title">
            Bachelor of Science in Computer Science
          </div>

          <RouterLink to="/bscs" class="read-more">
            Read More
          </RouterLink>
        </div>
      </div>

      <!-- INFORMATION TECHNOLOGY -->
      <div class="program-row">
        <img src="../assets/ITSLogo.png" alt="Information Technology Logo">

        <div class="program-details">
          <div class="program-title">
            Bachelor of Science in Information Technology
          </div>

          <RouterLink to="/bsit" class="read-more">
            Read More
          </RouterLink>
        </div>
      </div>

      <!-- DMIA -->
      <div class="program-row">
        <img src="../assets/MIDASLogo.png" alt="DMIA Logo">

        <div class="program-details">
          <div class="program-title">
            Digital Media and Interactive Arts (DMIA)
          </div>

          <RouterLink to="/bsdmia" class="read-more">
            Read More
          </RouterLink>
        </div>
      </div>

      <!-- BLIS -->
      <div class="program-row">
        <img src="../assets/LISLogo.png" alt="BLIS Logo">

        <div class="program-details">
          <div class="program-title">
            Bachelor of Library and Information Science (BLIS)
          </div>

          <RouterLink to="/blis" class="read-more">
            Read More
          </RouterLink>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
/* PAGE */
.programs-page {
  width: 100%;
  background: white;
}

/* HERO */
.programs-hero {
  position: relative;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/WarriorsLogo.png");
  background-size: cover;
  background-position: center 40%;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    rgba(255, 173, 31, 0.83),
    rgba(160, 145, 65, 0.76),
    rgba(23, 63, 58, 0.72)
  );
}

.hero-content {
  position: relative;
  text-align: center;
  padding: 20px;
}

.hero-label {
  color: white;
  font-size: 13px;
  letter-spacing: 2px;
  margin-bottom: 15px;
}

.hero-title {
  color: white;
  font-size: 42px;
  font-weight: bold;
}

.hero-line {
  width: 55px;
  height: 4px;
  background: #ffad1f;
  margin: 20px auto;
}

/* CONTENT */
.programs-content {
  max-width: 1000px;
  margin: auto;
  padding: 60px 30px;
}

.content-heading {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}

.gold-line {
  width: 5px;
  height: 35px;
  background: #ffad1f;
}

.content-title {
  color: #174d30;
  font-size: 28px;
  font-weight: bold;
}

/* PROGRAM ROWS */
.program-row {
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 25px 0;
  border-bottom: 1px solid #e0e8e1;
}

.program-row img {
  width: 130px;
  height: 120px;
  object-fit: contain;
}

.program-details {
  flex: 1;
}

.program-title {
  color: #174d30;
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 15px;
}

/* BUTTON */
.read-more {
  display: inline-block;
  padding: 9px 18px;
  background: #174d30;
  color: white;
  text-decoration: none;
  font-size: 14px;
  border-radius: 3px;
}

.read-more:hover {
  background: #ffad1f;
  color: #174d30;
}

/* MOBILE */
@media (max-width: 600px) {
  .programs-hero {
    height: 300px;
  }

  .hero-title {
    font-size: 32px;
  }

  .programs-content {
    padding: 40px 20px;
  }

  .content-title {
    font-size: 23px;
  }

  .program-row {
    gap: 15px;
  }

  .program-row img {
    width: 90px;
    height: 90px;
  }

  .program-title {
    font-size: 17px;
  }
}
</style>
