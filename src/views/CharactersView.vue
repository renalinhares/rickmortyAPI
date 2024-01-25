<template>
<div>
<div class="sm:h-24  h-48  w-full bg-gray-800">
  <div class="flex justify-center sm:float-left ">
    <img src="https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" class="w-48 h-20 sm:ml-20 sm:float-left">
  </div>
  <router-link :to="{name:'places'}"><a><p class="sm:float-right   text-center text-white font-mono font-bold sm:mt-8 sm:mr-4 mt-2 text-base ">All Places</p></a></router-link>
  <router-link :to="{name:'episodes'}"><a><p class=" sm:float-right text-center text-white font-mono font-bold sm:mt-8 sm:mr-3 mt-2 text-base">All Episodes</p></a></router-link>
  <router-link :to="{name:'characters'}"><a><p class=" sm:float-right text-center text-black font-mono font-bold sm:mt-8 sm:mr-3 mt-2 text-base bg-white  rounded-xl p-1 sm:p-2">All Characters</p></a></router-link>
</div>
    
    <div class="flex justify-center">
      <input type="text" class="border-2 border-gray-800 rounded-full w-1/3 mt-5 h-12 pl-4" placeholder="Digite o nome de um personagem..."  v-model="busca">
      <button class="border-2 border-gray-800 rounded-lg  px-2 mt-6 ml-3 font-mono hover:bg-gray-800 hover:text-white" @click="buscar">Search</button>
    </div>
    <div class="flex justify-center mt-5">
      <div class="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 ml-12 w-2/3">
        <div v-for="char in filteredCharacters" :key="char.id" class="w-3/4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-10 mt-3">
          <div class="flex flex-col items-center pb-5">
            <img class="w-24 h-24 mb-3 mt-2 rounded-full shadow-lg" :src="char.image" alt="Bonnie image"/>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ char.name }}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{ char.status }}</span>
              <div class="flex mt-4 space-x-3 md:mt-6">
                <router-link :to="{name: 'Char', params:{id:char.id}}"><button href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+INFOS</button></router-link>
              </div>
          </div>
        </div>
      </div>
    </div> 

</div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      characters:[],
      filteredCharacters: [],
      character:{
        name:''
      },
      busca:''

    }
  },
  created: function(){
    axios.get("https://rickandmortyapi.com/api/character").then(res=> {
      console.log("Lista de todos os personagens");
      this.characters = res.data.results;
      this.filteredCharacters = this.characters
      console.log(this.filteredCharacters)
    })
  },
  methods: {
    buscar: function(){
      this.filteredCharacters = this.characters;
      if(this.busca == '' || this.busca == ' '){
        this.filteredCharacters = this.characters
      }else{
        axios.get("https://rickandmortyapi.com/api/character/?name=" + this.busca).then(res =>{
          console.log(res.data);
          this.filteredCharacters = res.data.results;
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
}

</script>
