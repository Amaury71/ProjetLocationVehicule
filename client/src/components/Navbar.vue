<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbar1"
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span><!--<h1>{{connect}}</h1>-->
    </button>
    <!--<h1>{{connect}}</h1>-->
    <div class="collapse navbar-collapse justify-content-md-center" id="navbar1">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Accueil</router-link>
        </li>
        <li class="nav-item">
          <router-link  class="nav-link" to="/login" v-if="first_name==null && last_name==null">Connexion</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register" v-if="first_name==null && last_name==null">Inscription</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/profile">Profil</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="" v-on:click="logout" v-if="first_name!==null && last_name!==null">Déconnexion</a>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/creationV">Ajout de véhicule</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import jwtDecode from 'jwt-decode'
import EventBus from './EventBus'

EventBus.$on('logged-in', test => {
  console.log(test)
})
export default {
  data () {
    const token = localStorage.usertoken

    if (token===undefined){
    console.log('No')
    return {
      auth: '',
      user: '',
        first_name: null,
        last_name: null
          }
    }
    else {
    const decoded = jwtDecode(token)
    console.log('yess')
        return {
            auth: '',
            user: '',
            first_name: decoded.last_name,
            last_name: decoded.last_name,
        }
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('usertoken')
    }
  },
  mounted () {
    EventBus.$on('logged-in', status => {
      this.auth = status
    })
  }
}
</script>
