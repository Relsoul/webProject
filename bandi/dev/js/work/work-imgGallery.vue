<template>
    <ul class="work-gallery">
        <li v-for="item in items" @mouseover="greet($event,item.dataP,item.dataH3)" :data-p="item.dataP" :data-h3="item.dataH3"><img :src="item.imgSrc" alt=""></li>
    </ul>
    <div class="work-gallery-hover" >
        <div class="work-gallery-content">
            <div class="icon icon-work-eye"></div>
            <h3>{{dataH3}}</h3>
            <p>{{dataP}}</p>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import {Hover} from "../funtion/hover.js"
    console.log(18,Hover)
    export default{
        data(){
            return {
                items:[
                    {imgSrc:"build/images/img-gallery-1.jpg",dataP:"111",dataH3:"222333"},
                    {imgSrc:"build/images/img-gallery-2.jpg",dataP:"111",dataH3:"222333"},
                    {imgSrc:"build/images/img-gallery-3.jpg",dataP:"111",dataH3:"222333"},
                    {imgSrc:"build/images/img-gallery-4.jpg",dataP:"111",dataH3:"222333"},
                    {imgSrc:"build/images/img-gallery-5.jpg",dataP:"111",dataH3:"222333"},
                    {imgSrc:"build/images/img-gallery-6.jpg",dataP:"111",dataH3:"222333"},
                    {imgSrc:"build/images/img-gallery-7.jpg",dataP:"111",dataH3:"222333"},
                    {imgSrc:"build/images/img-gallery-8.jpg",dataP:"111",dataH3:"222333"},
                ],
                dataP:"",
                dataH3:""
            }
        },
        methods:{
            greet:Hover(".work-gallery-hover",function(data){
                 this.dataP=data[0];
                 this.dataH3=data[1];
                //console.log($(".work-gallery-hover"))
            })
        }
    }
</script>