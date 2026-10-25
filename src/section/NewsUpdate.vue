
<template>
  <div class="news-section">

    <!-- SECTION HEADING -->
    <div class="news-heading">
      <h2>News and Updates</h2>
      <p>Be Updated with the College and Student Events</p>
    </div>

    <div class="no-news">
    No Latest News
    <RouterLink to="/news" class="read-more">
    Read More
    </RouterLink>
    </div>
    
   
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.news-section {
  width: 100%;
  padding: 120px 7% 70px;
  box-sizing: border-box;
  background: #15443e;
}

/* HEADING */
.news-heading {
    
  text-align: center;
  margin-bottom: 78px;
}

.news-heading h2 {
  margin: 0 0 5px;
  color: #ffad1f;
  font-size: clamp(32px, 4vw, 54px);
  font-weight: 700;
  line-height: 1.2;
}

.news-heading p {
  margin: 0;
  color: #b9c7c3;
  font-size: 14px;
  line-height: 1.8;
}





.no-news {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  text-align: center;
  color: #b9c7c3;
  font-size: 18px;
  padding: 40px 0;
}

.no-news p {
  margin: 0;
}

.read-more {
  padding: 10px 22px;
  border: none;
  background: #ffad1f;
  color: #15443e;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.read-more:hover {
  background: #ffc451;
}





/* TABLETS */
@media (max-width: 900px) {
  .news-section {
    padding: 45px 5% 60px;
  }

  .news-heading {
    margin-bottom: 45px;
  }

  .news-grid {
    grid-template-columns: repeat(2, minmax(0, 265px));
  }
}

/* PHONES */
@media (max-width: 600px) {
  .news-section {
    padding: 40px 6% 50px;
  }

  .news-heading {
    margin-bottom: 35px;
  }

  .news-heading h2 {
    font-size: 32px;
  }

  .news-heading p {
    font-size: 12px;
  }

  .news-grid {
    grid-template-columns: minmax(0, 1fr);
    max-width: 360px;
    gap: 25px;
  }

  .news-image {
    height: 220px;
  }
}
</style>
