```vue
<template>
  <main class="lis-page">

    <!-- HERO SECTION -->
    <section class="lis-hero">
      <div class="lis-content">
        <h1>Library Information Science</h1>

        <p>
          The Library Information Science program prepares students to
          organize, manage, preserve, and provide access to information
          resources. Students learn how libraries and information centers
          support education, research, and lifelong learning through the
          effective use of information services and digital technologies.
        </p>

        <div class="lis-buttons">
          <a href="#objectives" class="button objectives-button">
            Objectives
          </a>

          <a href="#campus-life" class="button campus-button">
            Campus Life
          </a>
        </div>
      </div>

      <!-- ORGANIZATION LOGO -->
      <div class="lis-logo-container">
        <img
          src="../assets/LISLogo.png"
          alt="Library Information Science Organization Logo"
          class="lis-logo"
        />
      </div>
    </section>

    <!-- OBJECTIVES SECTION -->
    <section id="objectives" class="lis-details">
      <h2>Program Objectives</h2>

      <p>
        The Library Information Science program aims to develop students'
        knowledge and skills in organizing, managing, preserving, and
        providing access to information resources. Students learn about
        the important role of libraries, archives, and information centers
        in supporting education, research, cultural preservation, and
        lifelong learning. The program introduces the principles and
        practices needed to help people find reliable and relevant
        information efficiently.
      </p>

      <p>
        Another objective is to develop students' abilities in cataloging,
        classification, indexing, and information organization. Students
        learn how books, documents, digital materials, and other information
        resources can be described and arranged so users can locate them
        easily. They also explore how organized information systems improve
        the accessibility, accuracy, and usefulness of collections in
        different library and information environments.
      </p>

      <p>
        The program also prepares students to provide effective information
        services and user assistance. Students develop skills in identifying
        information needs, conducting searches, evaluating sources, and
        guiding users toward appropriate resources. These skills are
        important in helping students, researchers, professionals, and
        community members access trustworthy information and make informed
        decisions.
      </p>

      <p>
        In addition, students are encouraged to develop practical skills
        in library management, collection development, records organization,
        digital resource management, and information technology. They learn
        how libraries use databases, digital catalogs, online resources,
        and other systems to manage information and improve services.
        Through practical activities and projects, students can apply
        their knowledge to realistic information management situations.
      </p>

      <p>
        The program promotes professional ethics, responsible information
        handling, intellectual freedom, privacy, and respect for diverse
        information needs. Students learn the importance of protecting
        user confidentiality, evaluating information carefully, and
        providing fair access to resources. These principles help prepare
        future information professionals to serve users responsibly and
        maintain trust within their communities.
      </p>

      <p>
        Ultimately, the Library Information Science program prepares
        students for opportunities in libraries, archives, documentation
        centers, educational institutions, and other information-related
        organizations. It encourages communication, critical thinking,
        organization, and lifelong learning so graduates can adapt to
        changing information needs and help people navigate both
        traditional and digital information environments.
      </p>
    </section>

    <!-- CAMPUS LIFE SECTION -->
    <section id="campus-life" class="campus-section">
      <div class="campus-content">
        <h2>Campus Life</h2>

        <p>
          Campus life provides Library Information Science students with
          opportunities to learn, connect with classmates, and participate
          in the College of Computer Studies community. Beyond classroom
          lessons and academic requirements, students can share experiences,
          develop friendships, and discover how collaboration contributes
          to a supportive learning environment.
        </p>

        <p>
          Group assignments and research activities help students practice
          finding information, evaluating sources, organizing materials,
          and presenting their findings clearly. Working with classmates
          encourages the exchange of ideas and allows students to learn
          different approaches to research and information management.
          These experiences also strengthen teamwork, communication,
          and problem-solving skills.
        </p>

        <p>
          Academic activities, workshops, and student organization events
          can help students explore different aspects of library and
          information services. Students may develop interests in reading
          promotion, digital libraries, archival materials, information
          technology, research support, and community learning. Participating
          in these activities can broaden their understanding of how
          information professionals contribute to education and society.
        </p>

        <p>
          Campus life also encourages students to become more organized,
          responsible, and independent learners. Managing research projects,
          preparing reports, meeting deadlines, and participating in group
          activities can improve their time management and attention to
          detail. These habits are valuable when handling information
          resources and assisting users in future professional settings.
        </p>

        <p>
          Building relationships with classmates and instructors can make
          the college experience more meaningful. Students can support
          one another during challenging subjects, exchange useful study
          resources, and collaborate on academic projects. These connections
          can help create a sense of belonging and encourage students to
          remain curious, motivated, and engaged in their learning.
        </p>

        <p>
          Through classroom learning, research, collaboration, and campus
          activities, Library Information Science students can grow both
          personally and professionally. These experiences help them
          develop the organizational, communication, ethical, and
          information-handling skills needed to support libraries,
          educational institutions, and communities as future
          information professionals.
        </p>
      </div>
    </section>

  </main>
</template>

<style scoped>
/* GENERAL */
.lis-page {
  width: 100%;
  background: #ffffff;
  color: #15443e;
}

/* HERO SECTION */
.lis-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 70px 10%;
  background: #f3f7f3;
}

.lis-content {
  flex: 1;
  max-width: 650px;
}

.lis-content h1 {
  margin: 0 0 20px;
  color: #15443e;
  font-size: 46px;
  line-height: 1.2;
}

.lis-content p {
  margin: 0;
  color: #697b73;
  font-size: 16px;
  line-height: 1.8;
}

/* BUTTONS */
.lis-buttons {
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
.lis-logo-container {
  flex: 0 0 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lis-logo {
  display: block;
  width: 100%;
  max-width: 240px;
  height: auto;
  object-fit: contain;
}

/* OBJECTIVES */
.lis-details {
  max-width: 950px;
  margin: 0 auto;
  padding: 65px 30px;
  scroll-margin-top: 100px;
}

.lis-details h2,
.campus-content h2 {
  margin: 0 0 25px;
  color: #15443e;
  font-size: 30px;
  text-align: center;
}

.lis-details p,
.campus-content p {
  margin: 0 0 20px;
  color: #697b73;
  font-size: 15px;
  line-height: 1.9;
  text-align: justify;
}

.lis-details p:last-child,
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
  .lis-hero {
    flex-direction: column;
    text-align: center;
    padding: 55px 7%;
  }

  .lis-content h1 {
    font-size: 38px;
  }

  .lis-content p {
    font-size: 15px;
  }

  .lis-buttons {
    justify-content: center;
  }

  .lis-logo-container {
    flex: auto;
  }

  .lis-logo {
    max-width: 200px;
  }

  .lis-details {
    padding: 50px 7%;
  }

  .campus-section {
    padding: 50px 7%;
  }
}

/* SMALL PHONES */
@media (max-width: 480px) {
  .lis-content h1 {
    font-size: 32px;
  }

  .lis-content p {
    font-size: 14px;
  }

  .button {
    padding: 12px 18px;
  }

  .lis-details h2,
  .campus-content h2 {
    font-size: 26px;
  }

  .lis-details p,
  .campus-content p {
    font-size: 14px;
    line-height: 1.9;
  }
}
</style>
```