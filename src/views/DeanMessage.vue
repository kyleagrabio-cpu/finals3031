```vue
<template>
  <div class="dean-page">

    <!-- HERO BANNER -->
    <div class="dean-hero">
      <div class="hero-overlay"></div>

      <div class="hero-title">
        <div class="hero-label">COLLEGE OF COMPUTER STUDIES</div>
        <div class="hero-main-title">Message of the Dean</div>
        <div class="hero-title-line"></div>
      </div>
    </div>

    <!-- DEAN'S MESSAGE -->
    <div class="dean-content-section">
      <div class="dean-content">

        <div class="content-heading">
          <div class="gold-line"></div>
          <div class="content-title">A Message to Our Students</div>
        </div>

        <div class="dean-paragraph">
          In every school year for the College of Computer Studies, we look
          forward with great anticipation to the contributions the new class
          will make to campus life. In both the aspect of academic and
          non-academic, each student is unique enough to achieve whatever
          they want to reach for in our college.
        </div>

        <div class="dean-paragraph">
          The primary focus of CCS is teaching and learning. Our
          undergraduates are encouraged to think about their education as a
          whole, rather than just a term taken one thing at a time, and the
          different faculty members work with them not only during the start
          of the school year, but throughout the whole as well.
        </div>

        <div class="dean-paragraph">
          Learning and growth with us does not always come in classroom and
          academic experiences. Other kinds of opportunities abound, not
          the least of them the daily occasions for friendship and fellowship
          with people from many different backgrounds and with a wide
          variety of interests. In addition, students participate in rich
          and varied extracurricular activities that the College and
          University has got to offer.
        </div>

        <div class="dean-paragraph">
          As another year starts, a new challenge comes for each and everyone
          with us. Take this into your mind and hearts and be able to reach
          the dream that you have ever dreamt to succeed. Welcome dear
          students and have a great school year ahead of you.
        </div>

        <!-- SIGNATURE -->
        <div class="dean-signature">
          <div class="signature-line"></div>
          <div class="signature-text">
            College of Computer Studies Dean
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
/* MAIN PAGE */
.dean-page {
  width: 100%;
  background: #ffffff;
}

/* HERO BANNER */
.dean-hero {
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
    rgba(23, 63, 58, 0.72)
  );
}

.hero-title {
  position: relative;
  z-index: 1;
  padding: 40px 20px;
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

/* MESSAGE CONTENT */
.dean-content-section {
  padding: 60px 7%;
}

.dean-content {
  max-width: 850px;
  margin: 0 auto;
}

/* SECTION HEADING */
.content-heading {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}

.gold-line {
  width: 5px;
  height: 38px;
  flex-shrink: 0;
  background: #ffad1f;
}

.content-title {
  color: #174d30;
  font-size: 28px;
  font-weight: 600;
}

/* PARAGRAPHS */
.dean-paragraph {
  margin-bottom: 22px;
  color: #666666;
  font-size: 15px;
  line-height: 1.9;
  text-align: justify;
}

/* SIGNATURE */
.dean-signature {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eeeeee;
  text-align: right;
}

.signature-line {
  display: inline-block;
  width: 45px;
  height: 3px;
  margin-bottom: 10px;
  background: #ffad1f;
}

.signature-text {
  color: #174d30;
  font-size: 14px;
  font-weight: 600;
}

/* MOBILE */
@media (max-width: 600px) {
  .dean-hero {
    min-height: 300px;
  }

  .hero-label {
    font-size: 10px;
    letter-spacing: 2px;
  }

  .hero-main-title {
    font-size: 34px;
  }

  .dean-content-section {
    padding: 40px 6%;
  }

  .content-heading {
    margin-bottom: 25px;
  }

  .content-title {
    font-size: 23px;
  }

  .dean-paragraph {
    font-size: 14px;
    line-height: 1.8;
    text-align: left;
  }
}
</style>
```