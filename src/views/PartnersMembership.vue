```vue
<template>
  <div class="partners-page">

    <!-- HERO -->
    <div class="partners-hero">
      <div class="hero-overlay"></div>
      <div class="hero-title">
        <div>Partners and Memberships</div>
        <div class="gold-line"></div>
      </div>
    </div>

    <!-- PARTNER LOGOS -->
    <div class="partners-content">
      <div class="content-heading">
        <div class="heading-line"></div>
        <div>Our Partners</div>
      </div>

      <div class="partners-grid">

        <div class="partner-logo">
          <img src="../assets/OracleLogo.png" alt="Oracle Academy" />
        </div>

        <div class="partner-logo">
          <img src="../assets/CiscoLogo.png" alt="Cisco Networking Academy" />
        </div>

        <div class="partner-logo">
          <img src="../assets/AcerLogo.png" alt="Acer Academy" />
        </div>

        <div class="partner-logo">
          <img src="../assets/HuaweiLogo.png" alt="Huawei ICT Academy" />
        </div>

        <div class="partner-logo">
          <img src="../assets/PSITELogo.png" alt="PSITE" />
        </div>

        <div class="partner-logo">
          <img src="../assets/GoveSmartLogo.png" alt="GoveSmart" />
        </div>

        <div class="partner-logo">
          <img src="../assets/MayadLogo.png" alt="Mayad" />
        </div>

        <div class="partner-logo">
          <img src="../assets/LasortechLogo.png" alt="Lasortech" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* PAGE */
.partners-page {
  width: 100%;
  background: white;
}

/* HERO */
.partners-hero {
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

.hero-title {
  position: relative;
  color: white;
  text-align: center;
  font-size: clamp(30px, 4vw, 46px);
  font-weight: 600;
}

.gold-line {
  width: 50px;
  height: 3px;
  margin: 20px auto 0;
  background: #ffad1f;
}

/* PARTNERS CONTENT */
.partners-content {
  max-width: 1050px;
  margin: 0 auto;
  padding: 45px 25px 60px;
}

/* HEADING */
.content-heading {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 35px;
  color: #174d30;
  font-size: 28px;
  font-weight: 600;
}

.heading-line {
  width: 5px;
  height: 38px;
  background: #ffad1f;
}

/* LOGO GRID */
.partners-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: center;
  justify-items: center;
  gap: 35px 25px;
}

/* EACH LOGO */
.partner-logo {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 200px;
}

.partner-logo img {
  width: 85%;
  height: 85px;
  object-fit: contain;
}

/* STARTUP LOGO */
.startup-logo img {
  width: 100%;
  height: 100px;
}

/* TABLET */
@media (max-width: 768px) {
  .partners-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 25px 15px;
  }

  .partner-logo {
    height: 90px;
  }

  .partner-logo img {
    height: 70px;
  }

  .startup-logo img {
    height: 85px;
  }
}

/* PHONE */
@media (max-width: 480px) {
  .partners-hero {
    min-height: 200px;
    padding: 20px;
    box-sizing: border-box;
  }

  .hero-title {
    font-size: 29px;
  }

  .partners-content {
    padding: 35px 18px 45px;
  }

  .content-heading {
    font-size: 23px;
  }

  .partners-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px 10px;
  }

  .partner-logo {
    height: 75px;
  }

  .partner-logo img {
    width: 90%;
    height: 60px;
  }

  .startup-logo img {
    height: 70px;
  }
}
</style>
```