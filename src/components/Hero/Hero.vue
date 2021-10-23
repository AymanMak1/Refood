<template>
    <!-- ***** Welcome Area Start ***** -->
        <section id="home" class="section welcome-area bg-overlay overflow-hidden d-flex align-items-center">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <!-- Welcome Intro Start -->
                    <div class="col-12 col-md-7 col-lg-8">
                        <div class="welcome-intro text-center">
                            <h1 class="text-white" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">{{homeJson.title}}</h1>
                            <p class="text-white my-4" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">{{homeJson.caption}}.</p>
                             <a href="#" class="btn sApp-btn text-uppercase">{{homeJson.btnText}}</a>
                            <div class="welcome-bottom" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
                                <span class="d-inline-block text-white fw-3 font-italic mt-3">Accessible to everyone worldwide</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Shape Bottom -->
            <div class="shape-bottom">
                <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path class="fill" d="M0,6V0h1000v100L0,6z"></path>
                </svg>
            </div>
        </section>
        <!-- ***** Welcome Area End ***** -->
</template>

<script>
import {jsonInput } from './jsonInput';

export default {
    name: "Hero",
    data : () => {
        return{
             homeJson : jsonInput
        }
    }
}   
</script>

<style scoped>

</style>