import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import VehicleList from '@/components/VehicleList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Form
    },
    {
      path: '/vehicles',
      name: 'Vehicles',
      component: VehicleList
    },
    {
        path: '/:id',
        name: 'Update',
        component: Form
    },
  ]
})