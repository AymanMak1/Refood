<template>
          <!-- ***** Counter Area Start ***** -->
        <section class="section counter-area ptb_50" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-5 col-sm-3 single-counter text-center">
                        <div class="counter-inner p-3 p-md-0">
                            <!-- Counter Item -->
                            <div class="counter-item d-inline-block mb-3">
                                <span class="counter fw-7">33</span><span class="fw-7">%</span>
                            </div>
                            <h5>Wasted food worldwide</h5>
                        </div>
                    </div>
                    <div class="col-5 col-sm-3 single-counter text-center">
                        <div class="counter-inner p-3 p-md-0">
                            <!-- Counter Item -->
                            <div class="counter-item d-inline-block mb-3">
                                <span class="counter fw-7">8</span><span class="fw-7">%</span>
                            </div>
                            <h5>Greenhouse Gas Emition</h5>
                        </div>
                    </div>
                    <div class="col-5 col-sm-3 single-counter text-center">
                        <div class="counter-inner p-3 p-md-0">
                            <!-- Counter Item -->
                            <div class="counter-item d-inline-block mb-3">
                                <span class="counter fw-7">8.9</span><span class="fw-7">%</span>
                            </div>
                            <h5>Undernourished People</h5>
                        </div>
                    </div>
                    <div class="col-5 col-sm-3 single-counter text-center">
                        <div class="counter-inner p-3 p-md-0">
                            <!-- Counter Item -->
                            <div class="counter-item d-inline-block mb-3">
                                <span class="counter fw-7">690</span><span class="fw-7">M</span>
                            </div>
                            <h5>of the population</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ***** Counter Area End ***** -->
</template>

<script>
import counter from '../assets/js/custom/counterUp';

export default{
    name: "Counter",
    mounted(){
        counter()
    }
}

</script>

<style>

</style>