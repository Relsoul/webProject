<template>
   <div class="features">
       <div class="wrap-center">
            <h1 class="">FEATURES</h1>
           <div class="icon love-icon"></div>
           <ul class="features-list">
               <li v-for="item in items">
                   <div class="features-left">
                       <img :src="item.imgSrc" alt="">
                   </div>
                   <div class="features-right">
                        <h3>{{item.h3}}</h3>
                       <p>{{item.p}}</p>
                   </div>
               </li>
           </ul>
       </div>
   </div>
</template>
<style>


</style>
<script>
    export default{
        data(){
            return{
                items:[{
                    imgSrc:"build/images/branding.png",
                    h3:"Branding",
                    p:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore"
                },{
                    imgSrc:"build/images/development.png",
                    h3:"Development",
                    p:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore"
                },{
                    imgSrc:"build/images/consult.png",
                    h3:"Consulting",
                    p:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore"
                }]
            }
        },
        components:{

        }
    }
</script>