<template>
  <div class="container">
    <div class="jumbotron mt-5">
      <div class="col-sm-8 mx-auto">
        <h1 class="text-center">PROFILE</h1>
      </div>
      <table class="table col-md-6 mx-auto">
        <tbody>
        <tr>
          <td>Nom</td>
          <td>{{first_name}}</td>
        </tr>
        <tr>
          <td>Prénom</td>
          <td>{{last_name}}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{{email}}</td>
        </tr>
        <tr>
          <td>
            </td>
          <td>
            <router-link class="nav-link" to="/creationV" v-if="first_name==='Admin' && last_name==='root'">Accès VIP</router-link>

            <!--            <button v-on:click="creationV" v-if="first_name==='Admin' && last_name==='root'">Ajout voiture</button>-->
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'

export default {
  data () {
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)

    return {
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    }
  }
}
</script>
