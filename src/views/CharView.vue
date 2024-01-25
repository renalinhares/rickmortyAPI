<template>
    <div>
        <div class="sm:h-24  h-48  w-full bg-gray-800">
            <div class="flex justify-center sm:float-left ">
                <img src="https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" class="w-48 h-20 sm:ml-20 sm:float-left">
            </div>
            <router-link :to="{name:'places'}"><a><p class="sm:float-right   text-center text-white font-mono font-bold sm:mt-8 sm:mr-4 mt-2 text-base ">All Places</p></a></router-link>
            <router-link :to="{name:'episodes'}"><a><p class=" sm:float-right text-center text-white font-mono font-bold sm:mt-8 sm:mr-3 mt-2 text-base">All Episodes</p></a></router-link>
            <router-link :to="{name:'characters'}"><a><p class=" sm:float-right text-center text-white font-mono font-bold sm:mt-8 sm:mr-3 mt-2 text-base">All Characters</p></a></router-link>
        </div>
        <div class="flex justify-center">
            <div class="sm:w-2/3 w-full mx-auto my-10 bg-gray-800 rounded-lg shadow-md p-5">
                <img class="w-32 h-32 rounded-full mx-auto" :src="char.image" alt="Profile picture">
                <h2 class="text-center text-2xl font-semibold mt-3 text-white">{{ char.name}}</h2>
                <p class="text-center text-gray-600 mt-1">{{ char.status }}</p>
                    <div class="flex justify-center mt-5">
                        <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">{{ char.species }}</a>
                        <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">{{ char.gender }}</a>
                        <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">{{  }}</a>
                    </div>
                    <div class="flex justify-center">
                    <table class="table-auto sm:w-5/6  bg-gray-800 rounded-md mt-2  mb-3">
                        <thead>
                            <tr class="text-left bg-gray-700">
                                <th class="py-2 pl-2 rounded-tl-md text-white ">Episode</th>
                                <th class="pl-2 text-white">Name</th>
                                <th class="pr-3 text-white">Air Date</th>
                                <th class="rounded-tr-md"></th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-700" >
                            <tr class="" v-for="ep in episodes" :key="ep.id">
                                <td class="pr-3 p-2 text-white font-mono text-sm">{{ ep.episode }}</td>
                                <td class="text-white pr-3 p-2 font-mono text-sm">{{ ep.name }}</td>
                                <td class="pr-3 p-2 text-white font-mono text-sm">{{ ep.air_date }}</td>
                                <router-link :to="{name:'episode', params:{id:ep.id}}"><a><td class="pr-2 text-white font-mono  ">+INFO</td></a></router-link>
                            </tr>
                        </tbody>
                    </table>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
var _ = require('lodash');
export default ({
    created(){
        axios.get("https://rickandmortyapi.com/api/character/" + this.$route.params.id).then(res => {
            this.char = res.data
            this.urlep = this.char.episode
            for  (let i = 0; i< this.urlep.length; i++){
                var epAtual = this.urlep[i];
                console.log(epAtual);
                axios.get(epAtual).then(res=> {
                    this.infoEp = res.data
                    this.episodes.push(this.infoEp);
                }).catch( err=> {
                    console.log(err.response);
                })
            }
            console.log(this.episodes)
        }).catch( err=> {
            console.log(err.response);
        })
        console.log(_.sortBy(this.episodes['id']));

    },
    data(){
        return{
            char: {

            },
            episodes: [
            ]
        }
    }
})
</script>
