<template>
    <ul class="team-gallery">
        <li v-for="item in items">
            <img :src="item.imgSrc" alt="" @mouseover="greet($event,item.dataP,item.dataH3,item.cls,$index)">
            <h3 :class="{'hovers':item.cls}">{{item.titleH3}}</h3>
            <p>{{item.titleP}}</p>
        </li>
    </ul>
    <div class="team-gallery-hover">
        <h3>{{dataH3}}</h3>
        <p>{{dataP}}</p>
        <ul>
            <li><i class="icon share-twitter-highlight"></i></li>
            <li><i class="icon share-facebook-highlight"></i></li>
            <li><i class="icon share-google-highlight"></i></li>
    </div>
</template>
<style>

</style>
<script>
    import {Hover} from "../funtion/hover.js"
    export default{
        data(){
            return {
                items: [
                    {
                        imgSrc: "build/images/team-1.jpg",
                        dataP: "111",
                        dataH3: "222333",
                        titleH3: "John Filmr Doe",
                        titleP: "Managing Director",
                        cls:""
                    },
                    {
                        imgSrc: "build/images/team-2.jpg",
                        dataP: "111",
                        dataH3: "222333",
                        titleH3: "Chystine Hineu",
                        titleP: "Lead Designer",
                        cls:""
                    }, {
                        imgSrc: "build/images/team-3.jpg",
                        dataP: "111",
                        dataH3: "222333",
                        titleH3: "Martin Matrone",
                        titleP: "Lead Developer",
                        cls:""
                    },
                    {
                        imgSrc: "build/images/team-4.jpg",
                        dataP: "111",
                        dataH3: "222333",
                        titleH3: "Steve Flaulkin",
                        titleP: "Sr. Ui Designer",
                        cls:""
                    }],
                dataH3: "",
                dataP: ""
            }
        },
        methods: {
            greet:Hover(".team-gallery-hover",function(data){
                this.dataP=data[0];
                this.dataH3=data[1];
                console.log(data);
                data[2]=true;
                //清楚其他的title高亮
                for(let i of this.items){
                    i.cls=false;
                }
                this.items[data[3]].cls=true;
                //console.log(65,data)
            },-40,-40)
        }
    }
</script>