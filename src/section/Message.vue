```vue
<template>
  <section class="dean-section">
    <div class="dean-container">
      <p class="dean-eyebrow">ENGAGE</p>

      <h2 class="dean-title">Message from the Dean</h2>

      <div class="dean-message">
        <p>
          In every school year for the College of Computer Studies,
          we look forward with great anticipation to the contributions
          the new class will make to campus life. In both the aspect
          of academic and non academic, each student is unique enough
          to achieve whatever they want to reach for in our college.
        </p>
      </div>

      <RouterLink to="/deanmessage" class="dean-button">
        READ MORE
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.dean-section {
  width: 100%;
  padding: 70px 7%;
  background-color: #0a4216;
  box-sizing: border-box;
}

.dean-container {
  max-width: 1000px;
  margin: 0 auto;
}

.dean-eyebrow {
  margin: 0 0 12px;
  color: #ffad1f;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
}

.dean-title {
  margin: 0 0 25px;
  color: #ffad1f;
  font-size: 42px;
  font-style: italic;
  line-height: 1.2;
}

.dean-message {
  padding-left: 18px;
  border-left: 4px solid #ffad1f;
}

.dean-message p {
  margin: 0;
  color: white;
  font-size: 15px;
  line-height: 1.8;
}

.dean-button {
  display: inline-block;
  margin-top: 25px;
  padding: 11px 20px;
  background-color: #ffad1f;
  color: #173f3a;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.dean-button:hover {
  background-color: #ffc451;
}

@media (max-width: 600px) {
  .dean-section {
    padding: 45px 6%;
  }

  .dean-title {
    font-size: 32px;
  }

  .dean-message p {
    font-size: 14px;
  }
}
</style>
```