<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbar1"
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-md-center" id="navbar1">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Accueil</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Connexion</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Inscription</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/profile">Profil</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="" v-on:click="logout">Déconnexion</a>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/creationV">Ajout de véhicule</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import EventBus from './EventBus'

EventBus.$on('logged-in', test => {
  console.log(test)
})
export default {
  data () {
    return {
      auth: '',
      user: ''
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
