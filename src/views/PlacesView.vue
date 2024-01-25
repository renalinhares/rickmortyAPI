<template>
    <div>
        <div class="sm:h-24 h-48 w-full bg-gray-800">
            <div class="flex justify-center sm:float-left ">
                <img src="https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" class=" h-20 sm:ml-20 sm:float-left">
            </div>
            <router-link :to="{name:'places'}"><a><p class="sm:float-right   text-center text-black font-mono font-bold sm:mt-8 sm:mr-4 mt-2 text-base bg-white  rounded-xl p-1 sm:p-2">All Places</p></a></router-link>
            <router-link :to="{name:'episodes'}"><a><p class=" sm:float-right text-center text-white font-mono font-bold sm:mt-8 sm:mr-3 mt-2 text-base">All Episodes</p></a></router-link>
            <router-link :to="{name:'characters'}"><a><p class=" sm:float-right text-center text-white font-mono font-bold sm:mt-8 sm:mr-3 mt-2 text-base">All Characters</p></a></router-link>
        </div>
        <div class="flex justify-center">
            <div class="sm:w-3/4  bg-gray-800 sm:rounded-md mt-10 ">
            <p class="text-center  text-white font-mono mt-2">Places</p>
                <div class="flex justify-center">
                    <table class="sm:w-5/6 w-full bg-gray-800 rounded-md mt-2  mb-3">
                        <thead>
                            <tr class="text-left bg-gray-700">
                                <th class="py-2 pl-2 rounded-tl-md text-white">Place</th>
                                <th class="pl-2 text-white">Type</th>
                                <th class="pr-3 text-white">Dimension</th>
                                <th class="rounded-tr-md"></th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-700" >
                            <tr class="" v-for="place in places" :key="place.id">
                                <td class="pr-3 p-2 text-white font-mono text-sm ">{{ place.name }}</td>
                                <td class="text-white pr-3 p-2 font-mono text-sm">{{ place.type }}</td>
                                <td class="pr-3 p-2 text-white font-mono text-sm">{{ place.dimension }}</td>
                                <router-link :to="{name:'place', params:{id:place.id}}"><a><td class="text-xs sm:text-base  text-white font-mono pr-2 ">+INFO</td></a></router-link>
                            </tr>
                        </tbody>z
                    </table>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
import axios from 'axios';
export default {
    created(){
        axios.get("https://rickandmortyapi.com/api/location").then(res => {
            this.places = res.data.results;
            console.log(this.places);
        }).catch(err => {
            console.log(err);
        })
    },
    data(){
        return{
            places:[]
        }
    }
}
</script>
<style scoped>

</style>