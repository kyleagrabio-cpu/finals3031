```vue
<template>
  <main class="history-page">

    <!-- HERO BANNER -->
    <section class="history-hero">
      <div class="hero-overlay"></div>

      <div class="hero-title">
        <p class="hero-label">COLLEGE OF COMPUTER STUDIES</p>
        <h1>College History</h1>
        <span></span>
        <p class="hero-description">
          Discover the history and milestones of the College of Computer Studies.
        </p>
      </div>
    </section>

    <!-- HISTORY CONTENT -->
    <section class="history-content">
      <div class="history-container">

        <div class="content-heading">
          <span class="gold-line"></span>
          <h2>Our Journey Through the Years</h2>
        </div>

        <p>
          The college began in 1995 with the birth of the Bachelor of Science
          in Computer Science (BSCS) program under the College of Commerce.
          The first batch of students was composed of two sections with about
          100 students headed by Prof. Mary O’ T. Penetrante.
        </p>

        <p>
          During the first semester of AY 2001–2002, the Computer Science
          Department was transferred to the College of Engineering together
          with the newly offered Bachelor of Science in Software Engineering
          (BSSE) course. It was then called the Software Engineering and
          Computer Science (SE & CS) Department and was headed by Engr. Cirilo
          C. Calibjo, PEE. At the same time of the transfer, the Bachelor in
          Information Science and Management (BISM), which was the brainchild
          of Prof. Aquiles Sansing, was offered in the College of Commerce.
        </p>

        <p>
          At the end of school year AY 2002–2003, it was proposed that the
          BSCS program under the College of Engineering and the BSISM program
          under the College of Commerce, along with another new course,
          Bachelor of Science in Information Technology (BSIT), would be
          combined under one college. The university then approved the
          proposal and the College of Computer Studies began.
        </p>

        <p>
          In the first semester of AY 2003–2004, Engr. Cirilo C. Calibjo,
          Department Chair of the Department of SE & CS in the College of
          Engineering, became its first Dean. The new college was housed in
          the Mary Thomas Building.
        </p>

        <p>
          In April 2004, two new degree courses, Master in Computer Science
          (MCS) and Master of Science in Computer Science (MSCS), were
          approved to be offered.
        </p>

        <p>
          During the First Semester of AY 2006–2007, Engr. Calibjo went to
          Manila to pursue his doctoral studies in Electrical Engineering
          at the University of the Philippines, Diliman, upon which Prof.
          Rodney A. Gicana was appointed as the Officer-in-Charge during his
          absence. Prof. Gicana was previously the Department Head of the
          Software Engineering Department.
        </p>

        <p>
          As time progressed, a lot of changes were upheld in the College
          with the programs it offers, as well as its facilities. As Dr.
          Calibjo completed his Doctoral degree, he then came back to the
          College of Computer Studies as the Dean and allowed more exciting
          things to happen.
        </p>

        <p>
          In the year 2011, the College applied for PAASCU Accreditation and
          had its preliminary visit in this year. A lot of improvements were
          made to enhance the facilities and increase the standards of
          education for the college itself.
        </p>

        <p>
          In 2014, a highlight for the CCS, a consultancy visit made by the
          PAASCU was made possible to assure that all the requirements were
          met before a formal visit was to commence. At this time, the
          Bachelor of Science in Digital Media and Interactive Arts (BSDMIA)
          was established.
        </p>

        <p>
          By March 2015, a formal visit was conducted by the PAASCU and by
          June of the same year, the College of Computer Studies was granted
          a Level 1 Status for the BSCS, BSIT and BSIS programs of the
          college.
        </p>

        <p>
          In June 2016, Prof. Rea P. Balontong was appointed as the
          Officer-in-Charge for the College of Computer Studies.
        </p>

        <p>
          In June 2018, the Bachelor of Science in Library and Information
          Science migrated to the College of Computer Studies.
        </p>

        <p>
          As the academic year of 2018–2019 began, Prof. Ma. Christina A.
          Quijano was appointed as the Officer-in-Charge for the College and
          is at present (AY 2021–2022), Acting Dean.
        </p>

        <p>
          On September 16–18, 2019, a re-survey visit for Level 1 status for
          the BSCS, BSIT and BSIS programs was made by the PAASCU
          Accreditation Team. After the visit, the College was granted a
          five-year Level 1 re-accredited status.
        </p>

        <p>
          The BLIS program underwent an orientation from the PACUCOA
          Accrediting body last October 2019 and was to have its preliminary
          survey early in 2020.
        </p>

        <p>
          This indeed is another milestone achieved by the college. With the
          vast changes and improvements, there is more to it than what the
          eyes can see.
        </p>

        <p>
          More achievements and goals are yet to come, as CCS will make its
          mark in the history of Central Philippine University.
        </p>

        <!-- CLOSING ACCENT -->
        <div class="history-ending">
          <span></span>
        </div>

      </div>
    </section>

  </main>
</template>

<style scoped>
/* MAIN PAGE */
.history-page {
  width: 100%;
  background: #f5f8f5;
}

/* HERO BANNER */
.history-hero {
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
  max-width: 800px;
  text-align: center;
}

.hero-label {
  margin: 0 0 15px;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 3px;
}

.hero-title h1 {
  margin: 0;
  color: #ffffff;
  font-size: clamp(38px, 5vw, 58px);
  font-weight: 600;
  line-height: 1.2;
}

.hero-title span {
  display: block;
  width: 55px;
  height: 3px;
  margin: 25px auto;
  background: #ffad1f;
}

.hero-description {
  margin: 0;
  color: #ffffff;
  font-size: 15px;
  line-height: 1.8;
}

/* HISTORY CONTENT */
.history-content {
  padding: 60px 7%;
}

.history-container {
  max-width: 850px;
  margin: 0 auto;
}

/* CONTENT HEADING */
.content-heading {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}

.gold-line {
  width: 5px;
  height: 40px;
  flex-shrink: 0;
  background: #ffad1f;
}

.content-heading h2 {
  margin: 0;
  color: #174d30;
  font-size: 28px;
  font-weight: 600;
}

/* HISTORY PARAGRAPHS */
.history-container > p {
  margin: 0 0 22px;
  color: #666666;
  font-size: 15px;
  line-height: 1.9;
  text-align: justify;
}

/* CLOSING ACCENT */
.history-ending {
  margin-top: 35px;
  padding-top: 20px;
  border-top: 1px solid #e0e8e1;
}

.history-ending span {
  display: block;
  width: 45px;
  height: 3px;
  background: #ffad1f;
}

/* MOBILE */
@media (max-width: 600px) {
  .history-hero {
    min-height: 300px;
    padding: 40px 20px;
  }

  .hero-label {
    font-size: 10px;
    letter-spacing: 2px;
  }

  .hero-title h1 {
    font-size: 34px;
  }

  .hero-description {
    font-size: 14px;
  }

  .history-content {
    padding: 40px 6%;
  }

  .content-heading {
    margin-bottom: 25px;
  }

  .content-heading h2 {
    font-size: 23px;
  }

  .history-container > p {
    font-size: 14px;
    line-height: 1.8;
    text-align: left;
  }
}
</style>
```