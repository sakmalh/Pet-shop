import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Dog from '../views/DogView.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import CreateAdoption from '../views/adoption/CreateAdoption.vue'
import AdoptionDetails from '../views/adoption/AdoptionDetails.vue'
import Adoptions from '../views/adoption/AdoptionView.vue'
import UserAdoptions from '../views/adoption/UserAdoptionView.vue'
import Items from '../views/items/ItemsView.vue'
import ItemsDetails from '../views/items/ItemsDetailsView.vue'


import { projectAuth } from '@/firebase/config'

const requiredAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({ name: 'Login' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/dog',
    name: 'Dog',
    component: Dog
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/adoption/create',
    name: 'CreateAdoption',
    component: CreateAdoption,
    beforeEnter: requiredAuth
  },
  {
    path: '/adoption/:id',
    name: 'AdoptionDetails',
    component: AdoptionDetails,
    beforeEnter: requiredAuth,
    props: true
  },
  {
    path: '/adoptions',
    name: 'Adoptions',
    component: Adoptions,
  },
  {
    path: '/user/adoptions',
    name: 'UserAdoptions',
    component: UserAdoptions,
  },
  {
    path: '/items',
    name: 'Items',
    component: Items,
  },
  {
    path: '/items/:id',
    name: 'ItemsDetails',
    component: ItemsDetails,
    beforeEnter: requiredAuth,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router