<template>
    <Hero />
    <ScrollUp />
    <Counter />
    <Features />
    <BusinessValues />
    <Work />
    <Review />
    <Partners />
    <Branding />
    <Faq />
    <Team />
    <Accessibility />
    <Subscribe />
    <Contact />
    <Footer /> 
</template>

<script>
/* Components */
import $ from 'jquery'
import Hero from '../components/Hero/Hero.vue'
import Counter from '../components/Counter.vue'
import ScrollUp from '../components/ScrollUp.vue'
import Features from '../components/Features.vue'
import BusinessValues from '../components/BusinessValues.vue'
import Work from '../components/Work.vue'
import Review from '../components/Review.vue'
import Partners from '../components/Partners.vue'
import Questions from '../components/Questions.vue'
import Team from '../components/Team.vue'
import Accessibility from '../components/Accessibility.vue'
import Subscribe from '../components/Subscribe.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
import Branding from '../components/Branding.vue'

export default {
    name : 'Home',
    components : {
        Hero,
        Counter,
        ScrollUp,
        Features,
        BusinessValues,
        Work,
        Review,
        Partners,
        Questions,
        Team,
        Accessibility,
        Subscribe,
        Contact,
        Branding,
        Footer
    }
}
</script>

<style lang="css">
 @import '../assets/css/style.css';
</style>