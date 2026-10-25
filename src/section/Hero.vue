```vue
<template>
  <div class="hero">

    <!-- BACKGROUND OVERLAY -->
    <div class="hero-overlay"></div>

    <!-- HERO CONTENT -->
    <div class="hero-container">

      <div class="hero-content">

        <div class="eyebrow">
          CPU • COLLEGE OF COMPUTER STUDIES
        </div>

        <div class="hero-title">
          Shape the Future
          <br />
          of <span>Technology.</span>
        </div>

        <div class="description">
          Discover your potential through computing,
          information, and digital creativity.
          Your journey toward innovation starts here.
        </div>

        <!-- BUTTONS -->
        <div class="hero-buttons">
          <RouterLink to="/academicprogram" class="btn-primary">
            Explore Programs
            <span class="arrow">→</span>
          </RouterLink>

          <RouterLink to="/history" class="btn-secondary">
            About CCS
          </RouterLink>
        </div>

      </div>

    </div>

    <!-- BOTTOM ACCENT -->
    <div class="hero-bottom-line"></div>

  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
/* HERO SECTION */
.hero {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 91vh;
  min-height: 620px;
  padding: 80px 7%;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #063b2d;
  background-image: url("../assets/WarriorsLogo.png");
  background-repeat: no-repeat;
  background-size: auto 85%;
  background-position: right 10% center;
}

/* DARK OVERLAY FOR READABLE TEXT */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(6, 59, 45, 0.99) 0%,
    rgba(6, 59, 45, 0.96) 35%,
    rgba(6, 59, 45, 0.82) 52%,
    rgba(6, 59, 45, 0.38) 75%,
    rgba(6, 59, 45, 0.20) 100%
  );
}

/* CONTENT CONTAINER */
.hero-container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* HERO TEXT */
.hero-content {
  width: 60%;
  max-width: 700px;
}

.eyebrow {
  margin-bottom: 20px;
  color: #d6ec75;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 3px;
  line-height: 1.7;
}

.hero-title {
  margin-bottom: 25px;
  color: #ffffff;
  font-size: clamp(42px, 5.5vw, 68px);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -1px;
}

.hero-title span {
  color: #d6ec75;
}

/* DESCRIPTION */
.description {
  max-width: 500px;
  margin: 0;
  color: #f0f5f1;
  font-size: 16px;
  line-height: 1.9;
}

/* BUTTONS */
.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 30px;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 50px;
  padding: 0 23px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

/* PRIMARY BUTTON */
.btn-primary {
  color: #123e2b;
  background: #d6ec75;
}

.btn-primary:hover {
  background: #e5f7a0;
}

.arrow {
  font-size: 20px;
  font-weight: normal;
}

/* SECONDARY BUTTON */
.btn-secondary {
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: rgba(6, 59, 45, 0.35);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
}

/* BOTTOM ACCENT */
.hero-bottom-line {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 5px;
  background: #ffad1f;
}

/* TABLETS */
@media (max-width: 900px) {
  .hero {
    min-height: 560px;
    padding: 65px 6%;
    background-size: auto 70%;
    background-position: right 3% center;
  }

  .hero-content {
    width: 65%;
  }

  .hero-title {
    font-size: clamp(38px, 5vw, 52px);
  }

  .description {
    font-size: 15px;
  }

  .hero-overlay {
    background: linear-gradient(
      90deg,
      rgba(6, 59, 45, 0.99) 0%,
      rgba(6, 59, 45, 0.95) 45%,
      rgba(6, 59, 45, 0.75) 70%,
      rgba(6, 59, 45, 0.45) 100%
    );
  }
}

/* PHONES */
@media (max-width: 600px) {
  .hero {
    min-height: 600px;
    padding: 50px 6% 200px;
    align-items: flex-start;
    background-size: auto 43%;
    background-position: right 10px bottom 80px;
  }

  .hero-overlay {
    background: linear-gradient(
      180deg,
      rgba(6, 59, 45, 0.99) 0%,
      rgba(6, 59, 45, 0.97) 45%,
      rgba(6, 59, 45, 0.80) 68%,
      rgba(6, 59, 45, 0.40) 100%
    );
  }

  .hero-content {
    width: 100%;
    max-width: 100%;
  }

  .eyebrow {
    margin-bottom: 15px;
    font-size: 11px;
    letter-spacing: 1.8px;
  }

  .hero-title {
    margin-bottom: 20px;
    font-size: clamp(35px, 9vw, 46px);
    line-height: 1.15;
  }

  .description {
    font-size: 14px;
    line-height: 1.8;
  }

  .hero-buttons {
    gap: 12px;
    margin-top: 25px;
  }

  .btn-primary,
  .btn-secondary {
    min-height: 46px;
    padding: 0 16px;
    font-size: 13px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 5% 150px;
    height: 945px;
    background-size: auto 50%;
    background-position: right -190px bottom 280px;
  }

  .hero-title {
    font-size: 34px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}

@media (max-width: 500px) {
  .hero {
    padding: 80px 5% 150px;
    height: 875px;
    background-size: auto 35%;
    background-position: right 5px bottom 125px;
  }

  .hero-title {
    font-size: 34px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}

/* SMALL PHONES */
@media (max-width: 400px) {
  .hero {
    min-height: 590px;
    padding: 40px 5% 150px;
    background-size: auto 35%;
    background-position: right 10px bottom 80px;
  }

  .hero-title {
    font-size: 34px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}

/* SMALL PHONES */
@media (max-width: 375px ) {
  .hero {
    min-height: 590px;
    height: 50px;
    padding: 20px 5% 150px;
    background-size: auto 35%;
    background-position: right 30px bottom 20px;
  }

  .hero-title {
    font-size: 34px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}
</style>
```