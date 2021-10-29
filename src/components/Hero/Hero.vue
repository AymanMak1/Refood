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
            <!--div class="shape-bottom">
                <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path class="fill" d="M0,6V0h1000v100L0,6z"></path>
                </svg>
            </!div-->
                        <!-- Shape Bottom -->
            <div class="shape-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path class="shape-fill" fill="#FFFFFF" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
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