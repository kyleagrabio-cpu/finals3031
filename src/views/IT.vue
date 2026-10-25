```vue
<template>
  <main class="it-page">

    <!-- HERO SECTION -->
    <section class="it-hero">
      <div class="it-content">

        <h1>Information Technology</h1>

        <p class="description">
          The Information Technology program bridges computer science
          and management information systems, preparing students to use
          technology to solve real-world problems.
        </p>

        <div class="buttons">
          <a href="#objectives" class="button primary-button">
            Objectives
          </a>

          <a href="#campus-life" class="button secondary-button">
            Campus Life
          </a>
        </div>
      </div>

      <div class="logo-container">
        <img
          src="../assets/ITSLogo.png"
          alt="Information Technology Society Organization Logo"
          class="it-logo"
        />
      </div>
    </section>

    <!-- OBJECTIVES -->
    <section id="objectives" class="content-section">
      <h2>Program Objectives</h2>

      <p>
        The Information Technology program aims to develop students'
        technical knowledge, problem-solving abilities, and practical
        skills in information technology. It prepares students to
        understand how computing technologies can be applied to
        address the needs of individuals, businesses, and organizations.
      </p>

      <p>
        Students develop knowledge in areas such as web development,
        database management, computer networking, systems administration,
        and information systems. Through hands-on activities and projects,
        they learn to analyze problems, design practical solutions,
        and implement technology that supports real-world requirements.
      </p>

      <p>
        The program also promotes critical thinking, teamwork, effective
        communication, ethical responsibility, and continuous learning.
        These skills help prepare graduates for careers in IT support,
        web development, network administration, database management,
        and other technology-related fields.
      </p>
    </section>

    <!-- CAMPUS LIFE -->
    <section id="campus-life" class="campus-section">
      <div class="campus-content">
        <h2>Campus Life</h2>

        <p>
          Campus life offers Information Technology students opportunities
          to learn beyond the classroom, connect with fellow students,
          exchange ideas, and explore their interests in technology.
          Being part of the College of Computer Studies community
          encourages students to learn from one another and build
          meaningful friendships.
        </p>

        <p>
          Through group projects, academic activities, student
          organizations, and college events, students can improve
          their teamwork, communication, creativity, and leadership
          skills. Collaborative activities also allow them to share
          responsibilities, solve problems, and apply their technical
          knowledge in practical situations.
        </p>

        <p>
          Participation in campus activities helps students discover
          new interests, develop confidence, and build connections
          with their peers. By balancing academic responsibilities
          with community involvement, students can grow personally
          and professionally as future information technology
          professionals.
        </p>
      </div>
    </section>

  </main>
</template>

<style scoped>
/* GENERAL */
.it-page {
  width: 100%;
  color: #173f3a;
  background: #ffffff;
}

/* HERO */
.it-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding: 80px 10%;
  background: #f3f7f3;
}

.it-content {
  flex: 1;
  max-width: 600px;
}

.eyebrow {
  margin-bottom: 20px;
  color: #27864f;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
}

.it-content h1 {
  margin: 0 0 20px;
  color: #15443e;
  font-size: 48px;
  line-height: 1.2;
}

.description {
  color: #697b73;
  font-size: 16px;
  line-height: 1.8;
}

/* BUTTONS */
.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 30px;
}

.button {
  display: inline-block;
  padding: 13px 24px;
  border-radius: 4px;
  font-size: 14px;
  text-decoration: none;
  transition: 0.3s;
}

.primary-button {
  background: #15443e;
  color: #ffffff;
}

.primary-button:hover {
  background: #26745d;
}

.secondary-button {
  border: 1px solid #15443e;
  color: #15443e;
}

.secondary-button:hover {
  background: #e3eee5;
}

/* LOGO */
.logo-container {
  flex: 0 0 280px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.it-logo {
  display: block;
  width: 100%;
  max-width: 260px;
  height: auto;
  object-fit: contain;
}

/* OBJECTIVES */
.content-section {
  max-width: 850px;
  margin: 0 auto;
  padding: 70px 25px;
  text-align: center;
  scroll-margin-top: 100px;
}

.content-section h2,
.campus-section h2 {
  margin: 0 0 25px;
  color: #15443e;
  font-size: 30px;
}

.content-section p,
.campus-section p {
  margin: 0 0 20px;
  color: #697b73;
  font-size: 15px;
  line-height: 1.9;
}

.content-section p:last-child,
.campus-section p:last-child {
  margin-bottom: 0;
}

/* CAMPUS LIFE */
.campus-section {
  padding: 65px 10%;
  background: #f3f7f3;
  text-align: center;
  scroll-margin-top: 100px;
}

.campus-content {
  max-width: 850px;
  margin: 0 auto;
}

/* SMOOTH SCROLLING */
:global(html) {
  scroll-behavior: smooth;
}

/* TABLET AND MOBILE */
@media (max-width: 768px) {
  .it-hero {
    flex-direction: column;
    text-align: center;
    padding: 55px 7%;
  }

  .it-content h1 {
    font-size: 38px;
  }

  .buttons {
    justify-content: center;
  }

  .logo-container {
    flex: auto;
  }

  .it-logo {
    max-width: 200px;
  }

  .content-section {
    padding: 50px 7%;
  }

  .campus-section {
    padding: 50px 7%;
  }
}

/* SMALL PHONES */
@media (max-width: 480px) {
  .it-content h1 {
    font-size: 32px;
  }

  .description {
    font-size: 14px;
  }

  .button {
    padding: 12px 18px;
  }

  .content-section h2,
  .campus-section h2 {
    font-size: 26px;
  }

  .content-section p,
  .campus-section p {
    font-size: 14px;
    line-height: 1.9;
  }
}
</style>
```