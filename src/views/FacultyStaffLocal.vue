
<template>
  <div class="faculty-page">
    <!-- HERO -->
    <div class="faculty-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-label">COLLEGE OF COMPUTER STUDIES</div>
        <div class="hero-title">Faculty and Staff</div>
        <div class="hero-line"></div>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="faculty-content">
      <div class="content-heading">
        <div class="gold-line"></div>
        <div class="content-title">Our Faculty and Staff</div>
      </div>

      <!-- DEAN -->
      <div class="group-title">Dean</div>
      <div class="people-list">
        <div class="person">
          <img src="../assets/Quijano.png" alt="Ma. Christina A. Quijano">
          <div class="person-name">Ma. Christina A. Quijano, MSCS</div>
          <div class="person-role">Dean</div>
        </div>
      </div>

      <!-- DEPARTMENT HEAD AND COORDINATORS -->
      <div class="group-title">Department Head and Coordinators</div>
      <div class="people-list">
        <div class="person">
          <img src="../assets/Balontong.png" alt="Rea Balontong">
          <div class="person-name">Rea P. Balontong, MBA</div>
          <div class="person-role">Department Head (IT and IS)</div>
        </div>

        <div class="person">
          <img src="../assets/Parreno.png" alt="Marjee Rose Parreño">
          <div class="person-name">Marjee Rose B. Parreño, MSCS, MBA</div>
          <div class="person-role">Program Coordinator (BSCS, BSDMIA, and MSCS)</div>
        </div>

        <div class="person">
          <img src="../assets/Cantel.png" alt="Ana Mae Cantel">
          <div class="person-name">Ana Mae B. Cantel, MLIS</div>
          <div class="person-role">Program Coordinator (BLIS and MLIS)</div>
        </div>

        <div class="person">
          <img src="../assets/Pajar.png" alt="Lennon Pajar">
          <div class="person-name">Lennon D. Pajar</div>
          <div class="person-role">Computer Laboratory Coordinator</div>
        </div>
      </div>

      <!-- FACULTY -->
      <div class="group-title">Faculty</div>
      <div class="people-list">
        <div class="person">
          <img src="../assets/Beldia.png" alt="Leo Paulo Beldia">
          <div class="person-name">Leo Paulo B. Beldia</div>
          <div class="person-role">BSIT and BSIS Program</div>
        </div>

        <div class="person">
          <img src="../assets/Cambronero.png" alt="Pedro Peter Rhys Cambronero">
          <div class="person-name">Pedro Peter Rhys B. Cambronero, MSCS</div>
          <div class="person-role">BSCS Program</div>
        </div>

        <div class="person">
          <img src="../assets/Dignadice.png" alt="Lesley Joy Dignadice">
          <div class="person-name">Lesley Joy L. Dignadice, MBA</div>
          <div class="person-role">BSIT and BSIS Program</div>
        </div>

        <div class="person">
          <img src="../assets/Eregia.png" alt="Rodolfo Eregia">
          <div class="person-name">Rodolfo C. Eregia, Jr.</div>
          <div class="person-role">BSIT and BSIS Program</div>
        </div>

        <div class="person">
          <img src="../assets/Jardeleza.png" alt="Donie Jardeleza">
          <div class="person-name">Donie S. Jardeleza, MSCS</div>
          <div class="person-role">BSIT and BSIS Program</div>
        </div>

        <div class="person">
          <img src="../assets/Montano.png" alt="Antonio Montaño">
          <div class="person-name">Antonio M. Montaño, Jr.</div>
          <div class="person-role">BSIT and BSIS Program</div>
        </div>

        <div class="person">
          <img src="../assets/Ojacastro.png" alt="Rose Leah Joy Ojacastro">
          <div class="person-name">Rose Leah Joy A. Ojacastro, MSCS</div>
          <div class="person-role">BSIT and BSIS Program</div>
        </div>

        <div class="person">
          <img src="../assets/Sapul.png" alt="Ma Sheila Sapul">
          <div class="person-name">Ma. Sheila C. Sapul, Ph. D.</div>
          <div class="person-role">BSCS Program</div>
        </div>
      </div>

      <!-- STAFF -->
      <div class="group-title">Staff</div>
      <div class="people-list">
        <div class="person">
          <img src="../assets/Castano.png" alt="Chrislyn Castano">
          <div class="person-name">Chrislyn C. Castaño</div>
          <div class="person-role">Secretary</div>
        </div>

        <div class="person">
          <img src="../assets/Taasan.png" alt="Latter Taasan">
          <div class="person-name">A.M.P. Latter P. Taasan</div>
          <div class="person-role">Computer Laboratory Technician</div>
        </div>

        <div class="person">
          <img src="../assets/Ador.png" alt="Chriselda Elaine Ador">
          <div class="person-name">Chriselda Elaine Ador</div>
          <div class="person-role">Guidance Counselor</div>
        </div>

        <div class="person">
          <img src="../assets/Rivera.png" alt="Donna May Rivera">
          <div class="person-name">Donna May Rivera</div>
          <div class="person-role">Library Liaison Officer</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faculty-page {
  width: 100%;
  background: white;
}

/* HERO */
.faculty-hero {
  position: relative;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
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

.hero-content {
  position: relative;
  text-align: center;
  padding: 20px;
}

.hero-label {
  color: white;
  font-size: 13px;
  letter-spacing: 2px;
  margin-bottom: 15px;
}

.hero-title {
  color: white;
  font-size: 42px;
  font-weight: bold;
}

.hero-line {
  width: 55px;
  height: 4px;
  background: #ffad1f;
  margin: 20px auto;
}

/* CONTENT */
.faculty-content {
  max-width: 1200px;
  margin: auto;
  padding: 60px 30px;
}

.content-heading {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}

.gold-line {
  width: 5px;
  height: 35px;
  background: #ffad1f;
}

.content-title {
  color: #174d30;
  font-size: 28px;
  font-weight: bold;
}

/* GROUP TITLES */
.group-title {
  margin-top: 40px;
  margin-bottom: 25px;
  padding-bottom: 12px;
  border-bottom: 2px solid #ffad1f;
  color: #174d30;
  font-size: 23px;
  font-weight: bold;
}

/* FACULTY AND STAFF GRID */
.people-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 35px 30px;
}

.person {
  min-width: 0;
  padding-bottom: 22px;
  border-bottom: 1px solid #e0e8e1;
}

/* TALLER PORTRAITS */
.person img {
  display: block;
  width: 100%;
  height: 420px;
  object-fit: cover;
  object-position: center top;
  margin-bottom: 18px;
  background: #f3f7f3;
}

.person-name {
  color: #174d30;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  overflow-wrap: break-word;
}

.person-role {
  margin-top: 7px;
  color: #697b73;
  font-size: 14px;
  line-height: 1.6;
}

/* TABLET */
@media (max-width: 900px) {
  .people-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px 22px;
  }

  .person img {
    height: 400px;
  }

  .faculty-content {
    padding: 45px 25px;
  }
}

/* MOBILE */
@media (max-width: 600px) {
  .faculty-hero {
    height: 300px;
  }

  .hero-title {
    font-size: 32px;
  }

  .hero-label {
    font-size: 11px;
    letter-spacing: 1.5px;
  }

  .faculty-content {
    padding: 35px 18px;
  }

  .content-title {
    font-size: 23px;
  }

  .group-title {
    font-size: 21px;
    margin-top: 32px;
  }

  .people-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px 16px;
  }

  .person img {
    height: 320px;
  }

  .person-name {
    font-size: 15px;
  }

  .person-role {
    font-size: 13px;
  }
}

/* SMALL PHONES */
@media (max-width: 420px) {
  .people-list {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .person img {
    height: 460px;
  }

  .person-name {
    font-size: 16px;
  }

  .person-role {
    font-size: 14px;
  }
}
</style>
