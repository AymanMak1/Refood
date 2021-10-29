<template>
          <!-- ***** Error Area Start ***** -->
        <section id="home" class="section welcome-area inner-area bg-overlay h-100vh overflow-hidden">
            <div class="container h-100">
                <div class="row align-items-center justify-content-center h-100">
                    <div class="col-12 col-md-7">
                        <div class="welcome-intro error-area text-center">
                            <h1 class="text-white">404</h1>
                            <p class="text-white my-4">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                            <router-link to="/" class="btn sApp-btn text-uppercase">Go to Homepage</router-link> <br>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ***** Error Area End ***** -->
</template>

<script>
export default {

}
</script>

<style scoped>
html{
    overflow:hidden;
}
</style>