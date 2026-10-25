```vue
<template>
  <main class="dmia-page">

    <!-- HERO SECTION -->
    <section class="dmia-hero">
      <div class="dmia-content">
        <h1>Digital Media and Interactive Arts</h1>

        <p>
          The Digital Media and Interactive Arts program encourages students
          to combine creativity, technology, and storytelling to produce
          engaging digital experiences. Students explore digital design,
          multimedia production, animation, interactive content, and other
          creative technologies used in today's digital world.
        </p>

        <div class="dmia-buttons">
          <a href="#objectives" class="button objectives-button">
            Objectives
          </a>

          <a href="#campus-life" class="button campus-button">
            Campus Life
          </a>
        </div>
      </div>

      <!-- ORGANIZATION LOGO -->
      <div class="dmia-logo-container">
        <img
          src="../assets/MIDASLogo.png"
          alt="Digital Media and Interactive Arts Organization Logo"
          class="dmia-logo"
        />
      </div>
    </section>

    <!-- OBJECTIVES SECTION -->
    <section id="objectives" class="dmia-details">
      <h2>Program Objectives</h2>

      <p>
        The Digital Media and Interactive Arts program aims to develop
        students' creative, technical, and artistic abilities in producing
        digital content. It introduces students to the principles of visual
        communication, design, digital storytelling, and interactive media.
        Students learn how images, graphics, sound, video, animation, and
        other digital elements can be combined to communicate ideas and
        create meaningful experiences for different audiences.
      </p>

      <p>
        Another objective of the program is to strengthen students' skills
        in digital design and multimedia production. Students are encouraged
        to explore creative tools and technologies, experiment with different
        artistic approaches, and develop original concepts for digital
        projects. Through practical activities, they can learn to plan,
        create, revise, and present digital outputs while considering visual
        quality, usability, and the intended purpose of their work.
      </p>

      <p>
        The program also encourages students to understand the principles
        of interactive design and user experience. Students can explore how
        people interact with digital products, websites, multimedia
        presentations, and other interactive environments. They learn to
        consider audience needs, organize information clearly, and create
        digital experiences that are engaging, accessible, and easy to use.
      </p>

      <p>
        Collaboration and project development are also important parts of
        the learning experience. Students are encouraged to communicate
        their creative ideas, accept constructive feedback, manage project
        requirements, and work with others to complete multimedia outputs.
        These experiences help develop teamwork, problem-solving, time
        management, and presentation skills that are useful in creative
        and technology-related workplaces.
      </p>

      <p>
        The program promotes responsible and ethical digital creation.
        Students are encouraged to respect intellectual property, follow
        appropriate copyright practices, protect personal information, and
        consider the effects of the content they produce. They also learn
        the importance of using digital tools responsibly and creating
        materials that communicate ideas clearly and respectfully.
      </p>

      <p>
        Ultimately, the program aims to prepare students for opportunities
        in multimedia production, digital design, animation, interactive
        content creation, visual communication, and other creative digital
        fields. It also encourages students to continue exploring new tools,
        techniques, and creative ideas so they can adapt to changes in
        technology and contribute original work to the evolving digital
        media industry.
      </p>
    </section>

    <!-- CAMPUS LIFE SECTION -->
    <section id="campus-life" class="campus-section">
      <div class="campus-content">
        <h2>Campus Life</h2>

        <p>
          Campus life provides Digital Media and Interactive Arts students
          with opportunities to express their creativity, share ideas, and
          learn from others. Beyond classroom discussions and assignments,
          students can build friendships, exchange creative perspectives,
          and become part of the College of Computer Studies community.
          These experiences help create an environment where imagination,
          collaboration, and learning can grow together.
        </p>

        <p>
          Collaborative projects give students opportunities to work with
          classmates who have different interests, strengths, and creative
          approaches. Students can exchange feedback, brainstorm concepts,
          plan multimedia outputs, and contribute to shared projects.
          Working together helps them understand how different ideas and
          skills can come together to create more complete and engaging
          digital experiences.
        </p>

        <p>
          Academic activities and student organization events can also
          encourage students to explore areas such as graphic design,
          photography, video production, animation, digital illustration,
          and interactive media. These activities provide opportunities
          to discover new interests, practice creative techniques, and
          learn about different ways technology can support artistic
          expression and communication.
        </p>

        <p>
          Campus life also helps students build confidence in presenting
          their work and explaining their creative decisions. Sharing
          projects with classmates and instructors allows students to
          receive feedback, identify areas for improvement, and develop
          a stronger understanding of their own creative process.
          These experiences can help students become more comfortable
          communicating ideas and showcasing their abilities.
        </p>

        <p>
          Managing academic requirements and creative projects can help
          students develop discipline, organization, and time management.
          Students learn to plan their work, meet deadlines, revise their
          outputs, and balance individual responsibilities with teamwork.
          These habits are valuable when working on complex creative
          projects both during college and in future professional settings.
        </p>

        <p>
          Through classroom learning, creative collaboration, campus
          activities, and friendships, Digital Media and Interactive Arts
          students can grow both personally and professionally. Their
          college experience can help them develop a balance of artistic
          creativity, technical knowledge, communication, and teamwork
          as they prepare to contribute to the digital media and
          interactive arts community.
        </p>
      </div>
    </section>

  </main>
</template>

<style scoped>
/* GENERAL */
.dmia-page {
  width: 100%;
  background: #ffffff;
  color: #15443e;
}

/* HERO SECTION */
.dmia-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 70px 10%;
  background: #f3f7f3;
}

.dmia-content {
  flex: 1;
  max-width: 650px;
}

.dmia-content h1 {
  margin: 0 0 20px;
  color: #15443e;
  font-size: 46px;
  line-height: 1.2;
}

.dmia-content p {
  margin: 0;
  color: #697b73;
  font-size: 16px;
  line-height: 1.8;
}

/* BUTTONS */
.dmia-buttons {
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
  transition: background 0.3s;
}

.objectives-button {
  background: #15443e;
  color: #ffffff;
}

.objectives-button:hover {
  background: #26745d;
}

.campus-button {
  border: 1px solid #15443e;
  color: #15443e;
}

.campus-button:hover {
  background: #e3eee5;
}

/* LOGO */
.dmia-logo-container {
  flex: 0 0 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dmia-logo {
  display: block;
  width: 100%;
  max-width: 240px;
  height: auto;
  object-fit: contain;
}

/* OBJECTIVES */
.dmia-details {
  max-width: 950px;
  margin: 0 auto;
  padding: 65px 30px;
  scroll-margin-top: 100px;
}

.dmia-details h2,
.campus-content h2 {
  margin: 0 0 25px;
  color: #15443e;
  font-size: 30px;
  text-align: center;
}

.dmia-details p,
.campus-content p {
  margin: 0 0 20px;
  color: #697b73;
  font-size: 15px;
  line-height: 1.9;
  text-align: justify;
}

.dmia-details p:last-child,
.campus-content p:last-child {
  margin-bottom: 0;
}

/* CAMPUS LIFE */
.campus-section {
  padding: 65px 30px;
  background: #f3f7f3;
  scroll-margin-top: 100px;
}

.campus-content {
  max-width: 950px;
  margin: 0 auto;
}

/* SMOOTH SCROLLING */
:global(html) {
  scroll-behavior: smooth;
}

/* TABLET */
@media (max-width: 768px) {
  .dmia-hero {
    flex-direction: column;
    text-align: center;
    padding: 55px 7%;
  }

  .dmia-content h1 {
    font-size: 38px;
  }

  .dmia-content p {
    font-size: 15px;
  }

  .dmia-buttons {
    justify-content: center;
  }

  .dmia-logo-container {
    flex: auto;
  }

  .dmia-logo {
    max-width: 200px;
  }

  .dmia-details {
    padding: 50px 7%;
  }

  .campus-section {
    padding: 50px 7%;
  }
}

/* SMALL PHONES */
@media (max-width: 480px) {
  .dmia-content h1 {
    font-size: 32px;
  }

  .dmia-content p {
    font-size: 14px;
  }

  .button {
    padding: 12px 18px;
  }

  .dmia-details h2,
  .campus-content h2 {
    font-size: 26px;
  }

  .dmia-details p,
  .campus-content p {
    font-size: 14px;
    line-height: 1.9;
  }
}
</style>
```