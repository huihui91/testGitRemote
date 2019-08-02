<template>
    <div>
        <heads></heads>
        <P>dem33o</P>
        <span @click="goList">跳转到list</span>
        <span @click="dowm">下载pdf</span>
         <router-view></router-view>
        <foot></foot>
    </div>

</template>

<script>
import foot from '@components/foot'
const heads = ()=>import( '@components/head')
export default {
    data(){
        return {
            
        }
    },
    components:{
        heads,
        foot
    },
    methods:{
        goList(){
           console.log(11111);
           this.$router.push({path:'/list'})
        },
        dowm(){
            let form = document.createElement('form');
            form.method = "get";
            form.action="https://onesit.cpic.com.cn/upload/api/download/ePolicyDownload?epolicyNumber=ANACA06CTP18B000101J&memberToken=2b2fbee8e590a449d101cbf52e88ed882d96dc9537ca77bb0083b576e719c00cbb1b639a0137c3144bbdd2a6f8dc4ee98b6f8e7a36a43c3e6138087a7c98908f&clientFlag=AUTO-APP-ios";
            document.body.appendChild(form);
            form.submit()
        }
    }
}
</script>
<style src="./App.css"></style>

