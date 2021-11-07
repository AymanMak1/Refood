<template>
            <!-- ***** Header Start ***** -->
        <header class="navbar navbar-sticky navbar-expand-lg navbar-dark">
            <div class="container position-relative">
                <a class="navbar-brand" href="index.html">
                    <img class="navbar-brand-regular" src="../assets/img/logo/logo-white.png" alt="brand-logo">
                    <img class="navbar-brand-sticky" src="../assets/img/logo/logo.png" alt="sticky brand-logo">
                </a>
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
                                    More
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="javascript:;">Inner Pages<span class="badge badge-pill badge-warning ml-2">New</span></a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a class="dropdown-item" href="pricing.html">Pricing</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="download.html">Download</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="newsletter.html">Newsletter</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="thank-you.html">Thank you</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="coming-soon.html">Coming Soon</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="javascript:;">Accounts</a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                 <router-link to="/Login" class="dropdown-item">Login</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/Signup" class="dropdown-item">Signup</router-link>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="forgot.html">Reset Password</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="reviews.html">Reviews</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#BusinessValues">Refood Values</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="faq.html">FAQ</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="contact.html">Contact</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item disabled" href="#">More Coming Soon</a>
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

