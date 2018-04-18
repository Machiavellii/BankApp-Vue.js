import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import About from '../components/about'
import AddCustomer from '../components/add'
import CustomersDetails from '../components/customersDetails'
import Edit from '../components/edit'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/add',
      name: 'add',
      component: AddCustomer
    },
    {
      path: '/customer/:id',
      name: 'customerDetails',
      component: CustomersDetails
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit
    }
  ]
})
