<template>
     <!-- ***** Branding Area Start ***** -->
        <section class="branding-area ptb_100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-10 col-lg-8">
                        <!-- Section Heading -->
                        <div class="section-heading text-center">
                            <h2>Where have we been mentioned</h2>
                            <p class="d-none d-sm-block mt-4">ReFood is still growing and developing, but has already received a lot of attention from the public welfare sectors, the media and so on, where you can find more information and reports about us at:</p>
                            <p class="d-block d-sm-none mt-4"></p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <!-- Branding Slider -->
                    <div class="branding-slider owl-carousel op-5">
                        <!-- Single Brand -->
                        <div class="single-brand p-3">
                            <img src="../assets/img/brand/1.png" alt="">
                        </div>
                        <!-- Single Brand -->
                        <div class="single-brand p-3">
                            <img src="../assets/img/brand/2.png" alt="">
                        </div>
                        <!-- Single Brand -->
                        <div class="single-brand p-3">
                            <img src="../assets/img/brand/3.png" alt="">
                        </div>
                        <!-- Single Brand -->
                        <div class="single-brand p-3">
                            <img src="../assets/img/brand/4.png" alt="">
                        </div>
                        <!-- Single Brand -->
                        <div class="single-brand p-3">
                            <img src="../assets/img/brand/5.png" alt="">
                        </div>
                        <!-- Single Brand -->
                        <div class="single-brand p-3">
                            <img src="../assets/img/brand/6.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ***** Branding Area End ***** -->


</template>

<script>
//import $ from 'jquery'
//import jQuery from 'jquery'

import carousel from '../assets/js/custom/carouselBranding';

export default{
    name: "Branding",
    mounted(){
        carousel();
    }
}

</script>

<style>

</style>