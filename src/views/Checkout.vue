<template>
      <!-- ***** Thank You Area Start ***** -->
        <section v-if="paidFor" id="home" class="section welcome-area inner-area bg-overlay h-100vh overflow-hidden">
            <div class="container h-100">
                <div class="row align-items-center h-100">
                    <div class="col-12 col-md-8">
                        <div class="welcome-intro">
                            <h1 class="text-white">THANK YOU !</h1>
                            <p class="text-white my-4">We are continuously trying to Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore sed voluptas est error amet! Voluptatum, mollitia atque. Saepe, similique earum!.</p>
                           <router-link to="/" class="btn sApp-btn text-uppercase">Go to Homepage</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ***** Thank You Area End ***** -->
  <div class="container text-center" v-if="!paidFor">
    <div class="Donation">
      <h1>Donate </h1>

      <p>It does not matter how minor or major your support is, it will be highly appreciated from Refood Team.</p>

      <img width="400" src="../assets/img/donation/Money tree _Monochromatic.svg" />
    </div>

    <div ref="paypal"></div>
  </div>
</template>

<script>
// import image from "../assets/lamp.png"
export default {
  name: "Checkout",

  data: function() {
    return {
      loaded: false,
      paidFor: false,
      product: {
        price: 1,
        description: "Here the users can add comment to their donations",
        img: "../assets/img/donation/Money tree _Monochromatic.svg"
      }
    };
  },
  mounted: function() {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AW86lO3r1TrhcNPQ15HS-iq26ghgZdK-7BcCQGihHt4fyDWp_aVtfHc68SYlc6KuAykLoMPNX4uEbsvi";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency_code: "USD",
                    value: this.product.price
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();

            this.data;

            this.paidFor = true;

            console.log(order);
          },
          onError: err => {
            console.log(err);
          }
        })
        .render(this.$refs.paypal);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  overflow:hidden;
}
header.navbar{
  background-color: #42b983;
}
img{
  margin :2rem 0rem;
}
.Donation {
  margin-top:10rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
