<template>
    <!-- ***** Welcome Area Start ***** -->
        <section id="SignUp" class="section welcome-area bg-overlay d-flex align-items-center">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-12 col-md-8 col-lg-8">
                        <!-- Contact Box -->
                        <div class="contact-box bg-white text-center rounded p-4 p-sm-5 shadow-lg">
                            <div class="contact-top">
                                    <h3 class="contact-title">Sign Up as</h3> <br>
                                    <div class="usersBtns">
                                            <button type="button" @click="showProviderForm()" class="btn"
                                            v-bind:style="[ isProvider == false ? {'background-color': isNotActive} : {'background-color': isActive} ]">Provider</button>
                                            <button type="button" @click="showOrganisationForm()" class="btn" 
                                            v-bind:style="[ isOrganisation == false ? {'background-color': isNotActive} : {'background-color': isActive} ]"
                                            >Organisation</button>
                                            <button type="button" @click="showVolunteerForm()" class="btn"
                                            v-bind:style="[ isVolunteer == false ? {'background-color': isNotActive} : {'background-color': isActive} ]">Volunteer</button>
                                    </div>
                                    <h5 class="text-secondary fw-3 py-3">Fill all fields so we can get some info about you. We'll never send you spam</h5>
                            </div>
                            <div v-if="isProvider">
                                <SignUpForm user="Provider Name"/>
                            </div>
                            <div v-if="isOrganisation">
                                <SignUpForm user="Organisation Name"/>
                            </div>
                            <div v-if="isVolunteer">
                               <SignUpForm user="Volunteer Name"/>
                            </div>
                            <p class="form-message"></p>
                        </div>
                    </div>
                </div>
            </div>
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

import SignUpForm from '../components/SignUp/SignUpForm.vue'

export default {
    components:{
        SignUpForm
    },
    data(){
        return{
            isProvider:false,
            isOrganisation:false,
            isVolunteer:true,
            isNotActive : '#73c4ba !important',
            isActive : 'var(--primary-color-2) !important'
        }
    },
    methods: {
        showProviderForm(){
            this.isProvider = true
            this.isOrganisation = false
            this.isVolunteer = false
        },
        showOrganisationForm(){
            this.isOrganisation = true
            this.isProvider = false
            this.isVolunteer = false
        },
        showVolunteerForm(){
            this.isVolunteer = true
            this.isOrganisation = false
            this.isProvider = false
        }
  },
}
</script>

<style scoped>
section {
    height:140vh;
}
.usersBtns{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:20px;
}

@media (max-width: 1199.98px) {
    .section{
        height:100vh;
    }
 }

@media (max-width: 991.98px) { 
    .usersBtns{
        grid-template-columns: 1fr;
    }
    .contact-box{
        margin-top:400px;
    }

}

@media (max-width: 576px) {
    .contact-box{
        margin-top:600px;
    }

}



</style>