<template>
            <!-- ***** Header Start ***** -->
        <header class="navbar navbar-sticky navbar-expand-lg navbar-dark">
            <div class="container position-relative">
                <router-link to="/" class="navbar-brand">
                    <img class="navbar-brand-regular" src="../assets/img/logo/logo-white.png" alt="brand-logo">
                    <img class="navbar-brand-sticky" src="../assets/img/logo/logo.png" alt="sticky brand-logo">
                </router-link>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-inner">
                    <!--  Mobile Menu Toggler -->
                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <nav>
                        <ul class="navbar-nav" id="navbar-nav">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link" href="javascript:;" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</router-link>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link scroll" href="#features">Features</a>
                            </li>
                                        
                       <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="javascript:;" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Accounts
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <router-link to="/Login" class="dropdown-item">Login</router-link>
                                     </li>
                                    <li>
                                        <router-link to="/Signup" class="dropdown-item">Signup</router-link>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="">Reset Password</a>
                                    </li>
                                </ul>
                        </li>

                       <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="javascript:;" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Inner Pages
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a class="dropdown-item" href="#BusinessValues">Refood Values</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#UserGuide">User Guide</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#reviews">Reviews</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#Partners">Partners</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#faq">FAQ</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="">Team Experts</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link scroll" href="#contact">Contact</a>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <!-- ***** Header End ***** -->
        
</template>


<script>
//import $ from 'jquery'
//import jQuery from 'jquery'
//import 'bootstrap/dist/js/bootstrap.min.js'
import * as nav from '../assets/js/custom/navMenu';

export default{
    name: "Header",
    mounted(){

        nav.checkWidth(true);
        $(window).resize(function () {
            nav.checkWidth(false);
        });
        nav.checkWidth();
        nav.navMenu();

        /*$('.navbar-toggler').on('click', function () {
                $('header').toggleClass('active');
                $('body').toggleClass('canvas-open');
                $('.navbar-toggler-icon').toggleClass('active');
        });*/
        /*const activeScript = document.createElement("script");
        activeScript.setAttribute(
            "src",
            "/src/assets/js/active.js"
        );
        activeScript.async = true;
        document.head.appendChild(activeScript);*/
    }
}

</script>


<style scoped>

</style>>

