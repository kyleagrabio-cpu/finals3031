```vue
<template>
  <div class="mission-vision-page">

    <!-- HERO BANNER -->
    <div class="mv-hero">
      <div class="hero-overlay"></div>

      <div class="hero-title">
        <div class="hero-label">COLLEGE OF COMPUTER STUDIES</div>
        <div class="hero-main-title">Vision and Mission</div>
        <div class="hero-title-line"></div>
      </div>
    </div>

    <!-- VISION AND MISSION CONTENT -->
    <div class="mv-content-section">
      <div class="mv-content">

        <!-- VISION -->
        <div class="mv-block">
          <div class="mv-heading">
            <div class="gold-line"></div>
            <div class="mv-title">Vision</div>
          </div>

          <div class="mv-text">
            The College of Computer Studies is founded on the vision of
            academic excellence in Information Technology Education and
            responsive to the needs of the total person and the world.
          </div>
        </div>

        <!-- MISSION -->
        <div class="mv-block">
          <div class="mv-heading">
            <div class="gold-line"></div>
            <div class="mv-title">Mission</div>
          </div>

          <div class="mv-text">
            A College of the future with a mission to educate students with
            the Christian principles and practices of computer studies,
            preparing them to advance studies, careers in software
            development, computing systems technology, information
            management, and for a lifetime learning.
          </div>
        </div>

        <!-- QUALITY POLICY -->
        <div class="mv-block">
          <div class="mv-heading">
            <div class="gold-line"></div>
            <div class="mv-title">Quality Policy</div>
          </div>

          <div class="mv-text">
            To fulfill the mission and realize the vision of Central
            Philippine University, we commit to consistently provide
            superior quality services by integrating Christian values,
            academic excellence, highest level of professionalism, and
            quality consideration in every aspect of our operations.
          </div>

          <div class="mv-text">
            We maintain a quality management system that complies with
            international quality management system that complies with
            international quality standards. We continually improve to
            achieve global excellence that satisfies the expectations of
            the university community, partner institutions, and the
            general public.
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
/* MAIN PAGE */
.mission-vision-page {
  width: 100%;
  background: #ffffff;
}

/* HERO BANNER */
.mv-hero {
  position: relative;
  min-height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  box-sizing: border-box;
  background-image: url("../assets/WarriorsLogo.png");
  background-size: cover;
  background-position: center 40%;
}

/* BACKGROUND OVERLAY */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    rgba(255, 173, 31, 0.83),
    rgba(160, 145, 65, 0.76),
    rgba(23, 63, 58, 0.82)
  );
}

/* HERO TITLE */
.hero-title {
  position: relative;
  z-index: 1;
  text-align: center;
}

.hero-label {
  margin-bottom: 15px;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 3px;
}

.hero-main-title {
  color: #ffffff;
  font-size: clamp(36px, 5vw, 58px);
  font-weight: 600;
  line-height: 1.2;
}

.hero-title-line {
  width: 55px;
  height: 3px;
  margin: 25px auto 0;
  background: #ffad1f;
}

/* CONTENT SECTION */
.mv-content-section {
  padding: 55px 7% 65px;
}

.mv-content {
  max-width: 850px;
  margin: 0 auto;
}

/* VISION, MISSION AND QUALITY POLICY */
.mv-block {
  margin-bottom: 38px;
}

.mv-block:last-child {
  margin-bottom: 0;
}

/* SECTION HEADING */
.mv-heading {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.gold-line {
  width: 5px;
  height: 38px;
  flex-shrink: 0;
  background: #ffad1f;
}

.mv-title {
  color: #174d30;
  font-size: 28px;
  font-weight: 600;
}

/* CONTENT TEXT */
.mv-text {
  margin-bottom: 20px;
  color: #666666;
  font-size: 15px;
  line-height: 1.9;
  text-align: justify;
}

.mv-text:last-child {
  margin-bottom: 0;
}

/* TABLET */
@media (max-width: 768px) {
  .mv-hero {
    min-height: 280px;
  }

  .mv-content-section {
    padding: 45px 6%;
  }

  .mv-block {
    margin-bottom: 32px;
  }
}

/* PHONE */
@media (max-width: 480px) {
  .mv-hero {
    min-height: 230px;
    padding: 35px 20px;
  }

  .hero-label {
    font-size: 10px;
    letter-spacing: 2px;
  }

  .hero-main-title {
    font-size: 32px;
  }

  .mv-content-section {
    padding: 40px 6%;
  }

  .mv-heading {
    margin-bottom: 15px;
  }

  .mv-title {
    font-size: 24px;
  }

  .mv-text {
    font-size: 14px;
    line-height: 1.8;
    text-align: left;
  }
}
</style>
```