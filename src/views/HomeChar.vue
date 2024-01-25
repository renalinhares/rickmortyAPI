<template>
<div class="sm:h-24  h-48  w-screen bg-gray-800">
  <div class="flex justify-center sm:float-left ">
    <img src="https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" class="w-48 h-20 sm:ml-20 sm:float-left">
  </div>
  <router-link :to="{name:'places'}"><a><p class="sm:float-right   text-center text-white font-mono font-bold sm:mt-8 sm:mr-4 mt-2 text-base ">All Places</p></a></router-link>
  <router-link :to="{name:'episodes'}"><a><p class=" sm:float-right text-center text-white font-mono font-bold sm:mt-8 sm:mr-3 mt-2 text-base">All Episodes</p></a></router-link>
  <router-link :to="{name:'characters'}"><a><p class=" sm:float-right text-center text-white font-mono font-bold sm:mt-8 sm:mr-3 mt-2 text-base">All Characters</p></a></router-link>
</div>
<div class="flex justify-center">
  <div class="bg-[url('https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png')] bg-contain bg-center bg-no-repeat h-128 w-full">
  </div>
</div>
<div class="h-3/4 w-full bg-gray-800">  
  <div class="flex justify-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-5">
      <div class="h-96 w-72 mt-10 mr-6 rounded-lg bg-white" v-for="char in characters" :key="char.id">
        <img :src="char.image" class="w-full h-1/2 object-scale-down mt-2 rounded-lg">
        <p class="text-2xl font-mono font-extrabold mt-4 ml-4 text-left"> {{ char.name }}</p>
        <p class="text-lg font-mono ml-4 text-left">{{ char.gender }} - {{ char.species }}</p>
        <p class=" text-lg font-mono ml-4 text-left">{{ char.status }}</p>
        <router-link :to="{name: 'Char', params:{id:char.id}}"><button class="border border-black float-right mt-10 mr-6 px-4 py-1 rounded-lg bg-gray-900 text-white">+INFO</button></router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            characters:[]
        }
    },  
    created: function(){
    axios.get("https://rickandmortyapi.com/api/character/1,2,3").then(res=> {
      this.characters = res.data;
      console.log(this.characters)
    })
  }
}
</script>
<style scoped>

</style>