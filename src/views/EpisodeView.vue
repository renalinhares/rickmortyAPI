<template>
    <div>
        <div class="sm:h-24  h-48  w-full bg-gray-800   ">
            <div class="flex justify-center sm:float-left ">
                <img src="https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" class="w-48 h-20 sm:ml-20 sm:float-left">
            </div>
            <router-link :to="{name:'places'}"><a><p class="sm:float-right   text-center text-white font-mono font-bold sm:mt-8 sm:mr-4 mt-2 text-base ">All Places</p></a></router-link>
            <router-link :to="{name:'episodes'}"><a><p class=" sm:float-right text-center text-white font-mono font-bold sm:mt-8 sm:mr-3 mt-2 text-bas">All Episodes</p></a></router-link>
            <router-link :to="{name:'characters'}"><a><p class=" sm:float-right text-center text-white font-mono font-bold sm:mt-8 sm:mr-3 mt-2 text-base">All Characters</p></a></router-link>
        </div>
        <div class="flex justify-center">
            <div class="sm:w-4/5 w-full bg-gray-800 mt-10 rounded-md">
                <div class="flex justify-center">
                    <div class="w-full  sm:grid sm:grid-cols-2 ml-24 sm:ml-20  ">
                        <div class="bg-white h-32 mt-4 mb-3 rounded-md col-span-2 w-4/6 sm:w-11/12">
                            <p class="text-center font-serif font-semibold text-lg text-black sm:text-2xl">Name:</p>
                            <p class="mt-4 text-center font-serif font-semibold text-xl sm:text-4xl">{{ ep.name }}</p>
                        </div>
                        <div class="bg-white w-4/6 sm:w-5/6 h-32 mt-2 mb-3 rounded-md">
                            <p class="text-center font-serif font-semibold text-lg text-black sm:text-xl ">Episode: </p>
                            <p class="mt-4 text-center font-serif font-semibold text-xl sm:text-4xl">{{ ep.episode }}</p>
                        </div>
                        <div class="bg-white w-4/6 h-32 sm:w-5/6 mt-2 mb-3 rounded-md">
                            <p class="text-center font-serif font-semibold text-lg text-black sm:text-xl ">Air Date</p>
                            <p class="mt-4 text-center font-serif font-semibold text-xl sm:text-4xl">{{ ep.air_date }}</p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center">    
                    <div class="border-t border-slate-600 w-3/4 mb-3"></div>
                </div>
                <div class="flex justify-center">
                    <div class="grid lg:grid-cols-6 sm:grid-cols-3 mb-4 ml-11  mr-10">
                        <div class=" sm:w-36  w-32 bg-white rounded-md mt-2 mr-4" v-for="char in characters" :key="char.id"><router-link :to="{name: 'Char', params:{id:char.id}}"><a>
                            <div class="flex justify-center">
                                <img class="h-20 w-20 bg-black rounded-full mt-2" :src="char.image">
                            </div>
                            <div class="w-18  sm:w-28  ml-4 border-t border-gray-300 mt-2"></div>
                            <p class="text-center font-mono sm:text-xl text-base mt-1 font-bold">{{ char.name }}</p></a></router-link>
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
    created(){
        axios.get("https://rickandmortyapi.com/api/episode/" + this.$route.params.id).then(res => {
            this.ep = res.data
            this.chars = res.data.characters
            console.log(this.chars)
            for(let i=0; i<this.chars.length;i++){
                var charAtual = this.chars[i];
                axios.get(charAtual).then(res =>{
                    this.infoChar = res.data 
                    this.characters.push(this.infoChar)
                    
                }).catch(err => {
                    console.log(err);
                })
            }
            console.log(this.characters)
        }).catch(err => {
            console.log(err)
        })
    },
    data(){
        return{
            ep:{},
            characters: []
        }
    }
}
</script>

<style scoped>

</style>