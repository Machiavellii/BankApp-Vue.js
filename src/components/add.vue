<template>
  <div class="add container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header text-center">Add Customer</h1>
    <form v-on:submit="addCustomer">
      <div class="well">
        <h3>Customer Info</h3>
        <div class="form-group">
          <label>First Name</label>
          <input type="text" class="form-control" placeholder="First Name" v-model="customer.first_name">
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input type="text" class="form-control" placeholder="Last Name" v-model="customer.last_name">
        </div>
      </div>

      <div class="well">
        <h3>Customer Contact</h3>
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" placeholder="Email" v-model="customer.email">
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input type="text" class="form-control" placeholder="Phone" v-model="customer.phone">
        </div>
      </div>

      <div class="well">
        <h3>Customer Location</h3>
        <div class="form-group">
          <label>Address</label>
          <input type="text" class="form-control" placeholder="Address" v-model="customer.address">
        </div>
        <div class="form-group">
          <label>City</label>
          <input type="text" class="form-control" placeholder="City" v-model="customer.city">
        </div>
        <div class="form-group">
          <label>State</label>
          <input type="text" class="form-control" placeholder="State" v-model="customer.state">
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
   
  </div>
</template>

<script>
import Alert from './alert'
export default {
  name: 'add',
  data(){
    return{
      customer: {},
      alert: ''
    }
  },
  methods: {
    addCustomer(e){
      if(!this.customer.first_name || !this.customer.last_name || !this.customer.email){
        this.alert = "Please fill on all required fields"
      }else{
          let newCustomer = {
          first_name: this.customer.first_name,
          last_name: this.customer.last_name,
          email: this.customer.email,
          phone: this.customer.phone,
          address: this.customer.address,
          city: this.customer.city,
          state: this.customer.state
        }
        this.$http.post('http://bankapp/api/customer/add', newCustomer)
          .then(function(response){
           this.$router.push({path: '/', query:{alert: "Customer Added"}})
        
        })
         e.preventDefault()
      }
      e.preventDefault()
    }
  },
  components: {
    Alert
  }
}
</script>

<style>

</style>