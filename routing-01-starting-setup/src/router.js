import { createRouter, createWebHistory } from 'vue-router';


import TeamsList from './pages/TeamsList.vue'
import UsersList from './pages/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './pages/NotFound.vue'
import TeamsFooter from './pages/TeamsFooter.vue'
import UsersFooter from './pages/UsersFooter.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/teams' },
      {
        name: 'teams',
        path: '/teams',
        meta: { needsAuth: true },
        components: {
          default: TeamsList,
          footer: TeamsFooter
        },
        children: [
          { name: 'team-members', path: ':teamId', component: TeamMembers },
        ]
      },
      {
        path: '/users',
        components: {
          default: UsersList,
          footer: UsersFooter
        },
        // beforeEnter(to, from, next) {
  
        // }
      },
      { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition)
        return savedPosition;
      return { left: 0, top: 0 }
    }
  });
  
  router.beforeEach(function (_, to, next) {
  
    if (to.meta.needsAuth) {
      console.log("Needs auth!");
      next();
    } else {
      next();
    }
    // console.log("passou aqui = ", to.name)
    // if (to.name === 'team-members') {
    //   next();
    // } else {
    //   next({ name: 'team-members', params: { teamId: 't2' } })
    // }
    next()
  });
  
  router.afterEach(function (to, from) {
    // sending analytics data
    console.log(to, from)
  });

  export default router;