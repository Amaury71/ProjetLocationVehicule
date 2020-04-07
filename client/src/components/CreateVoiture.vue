<template>
  <div class="well">
      <h1>Formulaire d'ajout de véhicules</h1>
    <div class="form-group">
      <label class="pull-left">Modèle</label>
      <input type="text" class="form-control" placeholder="Entrez le nom du modèle" v-model="Voiture.modele">
    </div>
    <div class="form-group">
      <label class="pull-left">Description</label>
      <input type="text" class="form-control" placeholder="Entrez une description" v-model="Voiture.description">
    </div>
    <div class="form-group">
      <label class="pull-left">Prix</label>
      <input type="text" class="form-control" placeholder="Entrez le prix du modèle" v-model="Voiture.prix">
    </div>
    <button type="submit" class="btn btn-large btn-block btn-primary full-width" @click="addToAPI">Valider</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CreateVoiture',
  data () {
    return {
      msg: 'Bienvenue sur notre site !',
      Voiture: {modele: '', description: '', prix: '' ,productImage: ''}
    }
  },

  methods: {
    addToAPI () {
      axios.post('http://localhost:3000/voitures',
        this.Voiture
      )
        .then((response) => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
