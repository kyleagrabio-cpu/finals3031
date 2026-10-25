
import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import HistoryView from "../views/HistoryPage.vue";
import MissionVision from "../views/MissionVision.vue";
import DeanMessage from '@/views/DeanMessage.vue';
import Linkages from '@/views/PartnersMembership.vue';
import BSCS from '@/views/ComputerScience.vue';
import IT from '@/views/IT.vue';
import DMIA from '@/views/DMIA.vue';
import BLIS from '@/views/LibSci.vue';
import NewsEvents from '@/views/NewsEvents.vue';
import Contact from '@/views/Contact.vue';
import AP from '@/views/AcademicProgram.vue';
import FacultyStaff from '@/views/FacultyStaffLocal.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/history',
      name: 'History',
      component: HistoryView
    },

    {
      path: '/missionvision',
      name: 'MissionVision',
      component: MissionVision
    },

    {
      path: '/deanmessage',
      name: 'DeanMessage',
      component: DeanMessage
    },

    {
      path: '/linkages',
      name: 'Linkages',
      component: Linkages
    },

    {
      path: '/bscs',
      name: 'BSCS',
      component: BSCS
    },

    {
      path: '/bsit',
      name: 'IT',
      component: IT
    },

    {
      path: '/bsdmia',
      name: 'DMIA',
      component: DMIA
    },

    {
      path: '/blis',
      name: 'BLIS',
      component: BLIS
    },

    {
      path: '/news',
      name: 'NewsEvents',
      component: NewsEvents
    },

    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },

    {
      path: '/facultystaff',
      name: 'FacultyStaff',
      component: FacultyStaff
    },

    {
      path: '/academicprogram',
      name: 'AcademicProgram',
      component: AP
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return {
      top: 0,
      left: 0,
      behavior: 'instant'
    };
  }
});

export default router;
