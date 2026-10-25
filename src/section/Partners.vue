```vue
<template>
  <div class="partners-section">

    <!-- SECTION HEADING -->
    <div class="partners-heading">
      <div class="eyebrow">CONNECT</div>

      <div class="partners-title">
        Our Partners and Memberships
      </div>

      <div class="subtitle">
        Driving technology for education
      </div>
    </div>

    <!-- PARTNER LOGOS -->
    <div class="partners-logos">

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

    </div>

    <!-- VIEW MORE BUTTON -->
    <div class="partners-button-container">
      <RouterLink to="/linkages" class="partners-button">
        VIEW MORE
      </RouterLink>
    </div>

  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
/* MAIN SECTION */
.partners-section {
  width: 100%;
  padding: 65px 7% 70px;
  box-sizing: border-box;
  background: #ffffff;
}

/* HEADING */
.partners-heading {
  text-align: center;
}

.eyebrow {
  margin-bottom: 15px;
  color: #15443e;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
}

.partners-title {
  color: #ffad1f;
  font-size: clamp(32px, 4vw, 54px);
  font-weight: bold;
  line-height: 1.2;
}

.subtitle {
  margin-top: 10px;
  color: #888888;
  font-size: 14px;
}

/* LOGO LAYOUT */
.partners-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 55px;
  max-width: 1050px;
  margin: 75px auto;
}

/* INDIVIDUAL LOGOS */
.partner-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 110px;
}

.partner-logo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* VIEW MORE BUTTON */
.partners-button-container {
  display: flex;
  justify-content: center;
}

.partners-button {
  display: inline-block;
  padding: 12px 22px;
  background: #ffad1f;
  color: #15443e;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.partners-button:hover {
  background: #ffc451;
}

/* TABLET */
@media (max-width: 900px) {
  .partners-logos {
    gap: 35px;
    margin: 60px auto;
  }

  .partner-logo {
    width: 140px;
    height: 100px;
  }
}

/* PHONE */
@media (max-width: 600px) {
  .partners-section {
    padding: 45px 6% 55px;
  }

  .partners-title {
    font-size: 32px;
  }

  .partners-logos {
    gap: 25px;
    margin: 45px auto;
  }

  .partner-logo {
    width: 120px;
    height: 85px;
  }
}
</style>
```