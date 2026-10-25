```vue
<template>
  <main class="cs-page">

    <!-- HERO SECTION -->
    <section class="cs-hero">
      <div class="cs-content">

        <h1>Computer Science</h1>

        <p class="description">
          The Computer Science program prepares students to understand
          computing, develop programming skills, and create software
          solutions. Students learn how computers work, how programs
          are developed, and how technology can be used to solve
          problems in different fields.
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
          src="../assets/CSLogo.png"
          alt="Computer Science Society Logo"
          class="cs-logo"
        />
      </div>
    </section>

    <!-- OBJECTIVES -->
    <section id="objectives" class="content-section">
      <h2>Program Objectives</h2>

      <p>
        The Computer Science program aims to provide students with a strong
        foundation in computer science concepts, programming, algorithms,
        and software development. It helps students understand how computers
        process information and how software applications are designed to
        perform specific tasks. Through these lessons, students develop the
        knowledge needed to understand modern computing technologies.
      </p>

      <p>
        Another objective of the program is to develop students' logical
        thinking, analytical skills, and ability to solve problems. Students
        learn to break complex problems into smaller parts, identify possible
        solutions, and create programs that respond to different requirements.
        They also learn how to test their work, identify errors, and improve
        their programs to make them more accurate, useful, and efficient.
      </p>

      <p>
        The program encourages students to gain practical experience through
        programming exercises, software projects, research, and collaborative
        activities. These experiences help students apply what they learn in
        class to realistic situations. Students are encouraged to explore
        different programming languages, development tools, and computing
        techniques while developing their creativity and technical abilities.
      </p>

      <p>
        The program also aims to improve students' communication, teamwork,
        and project management skills. Computer Science professionals often
        work with other developers, designers, clients, and organizations.
        Learning how to share ideas, explain technical concepts, accept
        feedback, and work with a team prepares students for professional
        environments and future career opportunities.
      </p>

      <p>
        In addition, the program promotes responsible and ethical use of
        technology. Students are encouraged to understand the importance
        of data privacy, information security, intellectual property, and
        responsible software development. They learn that technology should
        be developed and used carefully, with consideration for its impact
        on individuals, communities, and society.
      </p>

      <p>
        Ultimately, the Computer Science program prepares students for
        opportunities in software development, web and mobile application
        development, systems analysis, database development, research, and
        other computing-related fields. It also encourages lifelong learning
        so graduates can continue improving their skills and adapt to new
        technologies throughout their careers.
      </p>
    </section>

    <!-- CAMPUS LIFE -->
    <section id="campus-life" class="campus-section">
      <div class="campus-content">
        <h2>Campus Life</h2>

        <p>
          Campus life is an important part of the Computer Science student
          experience. Beyond attending lectures and completing examinations,
          students have opportunities to meet classmates, exchange ideas,
          develop friendships, and become part of the College of Computer
          Studies community. These experiences help create a learning
          environment where students can support one another and grow
          together.
        </p>

        <p>
          Working with classmates on programming exercises, group assignments,
          and software projects allows students to learn from different
          perspectives. Students can share their knowledge, discuss possible
          solutions, and help one another understand difficult concepts.
          These activities also teach students the importance of patience,
          cooperation, responsibility, and clear communication when working
          toward a common goal.
        </p>

        <p>
          Academic activities and student organization events can provide
          opportunities for students to discover new interests and develop
          their technical abilities. Students may explore programming,
          web development, application design, computer systems, and other
          areas of computing. Participating in these activities can encourage
          curiosity and motivate students to continue learning beyond their
          regular classroom lessons.
        </p>

        <p>
          Campus life also helps students develop personal qualities such as
          confidence, leadership, discipline, and time management. Balancing
          academic requirements with group activities and other responsibilities
          teaches students how to organize their schedules, meet deadlines,
          and work toward their goals. These skills are valuable not only
          during college but also in future professional environments.
        </p>

        <p>
          Building relationships with fellow students can make the college
          experience more meaningful. Classmates can become study partners,
          project collaborators, and sources of encouragement during
          challenging subjects. Being part of a supportive student community
          helps students share experiences, celebrate achievements, and
          develop a stronger sense of belonging.
        </p>

        <p>
          Through classroom learning, collaboration, college activities, and
          involvement in the student community, Computer Science students
          can develop both technical and personal skills. These experiences
          help prepare them to become responsible professionals who can
          communicate effectively, work with others, approach problems
          creatively, and contribute positively to the field of technology.
        </p>
      </div>
    </section>

  </main>
</template>

<style scoped>
/* GENERAL */
.cs-page {
  width: 100%;
  color: #173f3a;
  background: #ffffff;
}

/* HERO */
.cs-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding: 80px 10%;
  background: #f3f7f3;
}

.cs-content {
  flex: 1;
  max-width: 600px;
}

.cs-content h1 {
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

.cs-logo {
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
  .cs-hero {
    flex-direction: column;
    text-align: center;
    padding: 55px 7%;
  }

  .cs-content h1 {
    font-size: 38px;
  }

  .buttons {
    justify-content: center;
  }

  .logo-container {
    flex: auto;
  }

  .cs-logo {
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
  .cs-content h1 {
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