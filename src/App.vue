<template>
    <div class="container">
        <!--ToDo: Load app-header         DONE--> 
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">
                <transition name="slide" mode="out-in">
                    <!--ToDo: Load router-view-->
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    //ToDo: Import Header Component
    import Header from './components/Header.vue'

    export default {
        //ToDo: Initialize Header component and name it appHeader      DONE
        components: {
          appHeader: Header
        },
        //ToDo: On page creation dispatch 'initStocks' to the vuex $store
        created () {
          this.$store.dispatch('initStocks')
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }

    .slide-enter {
      opacity: 0;
    }

    /*ToDo: Create slide-in effect for enter-active*/
    /*ToDo: Create slide-in effect for leave-active*/
    .slide-enter-active {
      animation: slide-in ease-in .5s forwards;
      transition: opacity .5s;
    }

    .slide-leave-active {
      animation: slide-out ease-out .3s forwards;
      transition: opacity .5s;
      opacity: 0;
    }

    /*ToDo: Create Keyframes for slide-in, remember to include from and to*/
        /*You can use any settings*/

    /*ToDo: Create Keyframes for slide-out, remember to include from and to*/
        /*You can use any settings*/
    @keyframes slide-in {
      from {
        transform: translateX(-400px);
       
      }
      to {
        transform: translateX(0);
      }
    }

    @keyframes slide-out {
      from {
        transform: translateX(0);
    }
    to {
        transform: translateX(900px);
    }
    }

</style>

