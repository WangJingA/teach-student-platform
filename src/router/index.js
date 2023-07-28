import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/LoginIndex.vue'
import HomePage from '../views/HomePage.vue'
import HomeViewPage from '../views/HomeViewPage.vue'
import StudentCourse from "../views/StudentCourse.vue"
import StudentVedioCenter from "../views/StudentVedioCenter.vue"
import StudentStudyCenter from "../views/StudentStudyCenter.vue"
import StudentExamRecord from "../views/StudentExamRecord.vue"
import StudentMessageCenter from "@/views/StudentMessageCenter.vue";
import StudentPersonalCenter from "@/views/StudentPersonalCenter.vue";

const routes = [
  {
    path: '/',
    name: 'loginIndex',
    component: HomeView
  },
  {
    path: '/homePage',
    name: "studentHomePage",
    component: HomePage,
    children:[
        {
          path: '/HomeViewPage',
          name: 'homeViewPage',
          component: HomeViewPage
        },
      {
        path: '/StudentCourse',
        name: 'StudentCourse',
        component: StudentCourse
      },
      {
        path: '/StudentVedioCenter',
        name: 'StudentVedioCenter',
        component: StudentVedioCenter
      },
      {
        path: '/StudentStudyCenter',
        name: 'StudentStudyCenter',
        component: StudentStudyCenter
      },
      {
        path: '/StudentExamRecord',
        name: 'StudentExamRecord',
        component: StudentExamRecord
      },
      {
        path: '/StudentMessageCenter',
        name: 'StudentMessageCenter',
        component: StudentMessageCenter
      },
      {
        path: '/StudentPersonalCenter',
        name: 'StudentPersonalCenter',
        component: StudentPersonalCenter
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
