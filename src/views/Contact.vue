```vue
<template>
  <div class="contact-page">

    <!-- Hero Section -->
    <div class="contact-hero">
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <div class="hero-label">COLLEGE OF COMPUTER STUDIES</div>
        <div class="hero-title">Contact Details</div>
        <div class="hero-line"></div>
        <div class="hero-subtitle">We Will Gladly Assist You</div>
      </div>
    </div>

    <!-- Contact Information -->
    <div class="contact-content">

      <div class="content-heading">
        <div class="gold-line"></div>
        <div class="content-title">Get in Touch With Us</div>
      </div>

      <div class="contact-container">

        <!-- Telephone -->
        <div class="contact-item">
          <div class="contact-icon">☎</div>
          <div class="contact-title">Telephone</div>
          <div class="contact-info">329-1971 local 1094</div>
        </div>

        <!-- CPU Mail -->
        <div class="contact-item">
          <div class="contact-icon">✉</div>
          <div class="contact-title">CPU Mail</div>
          <a href="mailto:ccssec@cpu.edu.ph" class="contact-info">
            ccssec@cpu.edu.ph
          </a>
        </div>

        <!-- Social Media -->
        <div class="contact-item">
          <div class="contact-icon">f</div>
          <div class="contact-title">Social Media</div>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-info"
          >
            College of Computer Studies - CPU
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  width: 100%;
  background: #ffffff;
}

/* Hero Section */
.contact-hero {
  position: relative;
  min-height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/WarriorsLogo.png");
  background-size: cover;
  background-position: center 40%;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    110deg,
    rgba(255, 173, 31, 0.83),
    rgba(160, 145, 65, 0.76),
    rgba(23, 63, 58, 0.72)
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px 20px;
}

.hero-label {
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 15px;
}

.hero-title {
  color: #ffffff;
  font-size: clamp(32px, 5vw, 48px);
  font-weight: bold;
}

.hero-line {
  width: 55px;
  height: 4px;
  background: #ffad1f;
  margin: 20px auto;
}

.hero-subtitle {
  color: #ffffff;
  font-size: 16px;
}

/* Contact Content */
.contact-content {
  padding: 60px 7%;
  background: #ffffff;
}

.content-heading {
  display: flex;
  align-items: center;
  gap: 15px;
  max-width: 1100px;
  margin: 0 auto 40px;
}

.gold-line {
  width: 5px;
  height: 35px;
  flex-shrink: 0;
  background: #ffad1f;
}

.content-title {
  color: #174d30;
  font-size: 28px;
  font-weight: bold;
}

/* Contact Items */
.contact-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
}

.contact-item {
  flex: 1;
  text-align: center;
  padding: 30px 15px;
  border-bottom: 2px solid #e0e8e1;
}

.contact-icon {
  color: #ffad1f;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 15px;
}

.contact-title {
  color: #174d30;
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 15px;
}

.contact-info {
  display: inline-block;
  color: #697b73;
  font-size: 15px;
  line-height: 1.7;
  text-decoration: none;
}

a.contact-info:hover {
  color: #174d30;
  text-decoration: underline;
}

/* Mobile Layout */
@media (max-width: 600px) {
  .contact-hero {
    min-height: 300px;
  }

  .contact-content {
    padding: 45px 6%;
  }

  .content-title {
    font-size: 23px;
  }

  .contact-container {
    flex-direction: column;
    gap: 15px;
  }

  .contact-item {
    padding: 25px 10px;
  }
}
</style>
```