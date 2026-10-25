```vue
<template>
  <div class="news-events-section">

    <!-- SECTION HEADING -->
    <div class="section-heading">
      <div class="eyebrow">STAY UPDATED</div>
      <div class="section-title">News and Events</div>
      <div class="heading-line"></div>
    </div>

    <!-- NEWS AND EVENTS -->
    <div class="news-events-container">

      <!-- NEWS BOX -->
      <div class="news-box">
        <div class="box-heading">
          <div class="gold-line"></div>
          <div class="box-title">Latest News</div>
        </div>

        <div class="news-row">
          <div class="empty-message">No latest news.</div>
        </div>

        <div class="news-row"></div>
        <div class="news-row"></div>
      </div>

      <!-- EVENTS BOX -->
      <div class="events-box">
        <div class="box-heading">
          <div class="gold-line"></div>
          <div class="box-title">Upcoming Events</div>
        </div>

        <div class="event-row">
          <div class="empty-message">No upcoming events.</div>
        </div>

        <div class="event-row"></div>
        <div class="event-row"></div>
      </div>

    </div>

  </div>
</template>

<style scoped>
/* MAIN SECTION */
.news-events-section {
  width: 100%;
  padding: 65px 7%;
  box-sizing: border-box;
  background: #f3f7f3;
}

/* SECTION HEADING */
.section-heading {
  margin-bottom: 40px;
  text-align: center;
}

.eyebrow {
  margin-bottom: 12px;
  color: #174d30;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
}

.section-title {
  color: #174d30;
  font-size: clamp(30px, 4vw, 42px);
  font-weight: bold;
}

.heading-line {
  width: 50px;
  height: 3px;
  margin: 18px auto 0;
  background: #ffad1f;
}

/* NEWS AND EVENTS LAYOUT */
.news-events-container {
  display: flex;
  gap: 25px;
  max-width: 1100px;
  margin: 0 auto;
}

/* BOXES */
.news-box,
.events-box {
  flex: 1;
  padding: 25px;
  background: #ffffff;
  border: 1px solid #e0e8e1;
  border-radius: 5px;
}

/* BOX HEADING */
.box-heading {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.gold-line {
  width: 5px;
  height: 32px;
  flex-shrink: 0;
  background: #ffad1f;
}

.box-title {
  color: #174d30;
  font-size: 23px;
  font-weight: 600;
}

/* EMPTY ROWS */
.news-row,
.event-row {
  display: flex;
  align-items: center;
  min-height: 55px;
  padding: 10px 5px;
  box-sizing: border-box;
  border-bottom: 1px solid #e0e8e1;
}

.news-row:last-child,
.event-row:last-child {
  border-bottom: none;
}

/* EMPTY MESSAGE */
.empty-message {
  color: #888888;
  font-size: 14px;
}

/* MOBILE */
@media (max-width: 600px) {
  .news-events-section {
    padding: 45px 6%;
  }

  .news-events-container {
    flex-direction: column;
    gap: 20px;
  }

  .news-box,
  .events-box {
    padding: 22px;
  }

  .box-title {
    font-size: 21px;
  }
}
</style>
```