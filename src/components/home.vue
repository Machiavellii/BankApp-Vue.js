<template>
  <div class="customers container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header text-center">Manager Customers</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th> First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers">
          <td>{{customer.first_name}}</td>
          <td>{{customer.last_name}}</td>
          <td>{{customer.email}}</td>
          <td><router-link class="btn btn-default" v-bind:to="'/customer/'+customer.id">View</router-link></td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './alert'
export default {
  name: 'home',
  data () {
    return {
      customers: [],
      alert: ''
      
    }
  },
  methods: {
    fetchCustomers(){
      this.$http.get('http://bankapp/api/customers')
        .then(function(response){
          this.customers = response.body;
          //console.log(response)
        })
    }
  },
  created: function(){
    if(this.$route.query.alert){
      this.alert = this.$route.query.alert
    }
    this.fetchCustomers();
  },
  updated: function(){
      this.fetchCustomers()
  },
  components: {
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
