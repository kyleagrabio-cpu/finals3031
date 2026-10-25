```vue
<template>
  <section class="contact-section">
    <div class="contact-container">
      <div class="contact-content">
        <p class="contact-eyebrow">C O N T A C T</p>

        <h2>
          For any inquiries<br />
          please email
        </h2>

        <a href="mailto:ccssec@cpu.edu.ph" class="contact-email">
          ccssec@cpu.edu.ph
        </a>

        <div class="contact-button-container">
          <RouterLink to="/contact" class="contact-button">
            VIEW MORE OPTIONS
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.contact-section {
  width: 100%;
  padding: 90px 8%;
  box-sizing: border-box;
  background: #eeeeee;
}

.contact-container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.contact-content {
  width: 100%;
  max-width: 650px;
}

.contact-eyebrow {
  margin: 0 0 38px;
  color: #ffad1f;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 5px;
}

.contact-content h2 {
  margin: 0 0 35px;
  color: #173f3a;
  font-size: clamp(38px, 5vw, 64px);
  font-weight: 800;
  line-height: 1.05;
}

.contact-email {
  display: inline-block;
  color: #ffad1f;
  font-size: 20px;
  text-decoration: none;
  overflow-wrap: anywhere;
  transition: color 0.3s ease;
}

.contact-email:hover {
  color: #d88b00;
}

.contact-button-container {
  margin-top: 18px;
}

.contact-button {
  display: inline-block;
  padding: 10px 20px;
  background: #ffad1f;
  color: #173f3a;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.3s ease;
}

.contact-button:hover {
  background: #ffc451;
}

@media (max-width: 600px) {
  .contact-section {
    padding: 65px 7%;
  }

  .contact-eyebrow {
    margin-bottom: 28px;
    font-size: 11px;
  }

  .contact-content h2 {
    font-size: 38px;
    margin-bottom: 28px;
  }

  .contact-email {
    font-size: 17px;
  }
}
</style>
```