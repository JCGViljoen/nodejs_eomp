<template>
  <div>
    <div class="products">
      <h1 class="hclass">Check out our Products:</h1>
      <div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" v-for="item in homedecor" :key="item.prodID">
            <div class="card h-100">
              <img :src="item.prodUrl" class="card-img-top" alt="pic">
              <div class="card-body">
                <h5 class="card-title">{{ item.prodName }}</h5>
                <p>{{ item.Category }}</p>
                <router-link
                  :to="{
                    name: 'single',
                    params: { id: item.prodID },
                    query: {
                      name: item.prodName,
                      category: item.Category,
                      img: item.prodUrl,
                      amount: item.amount,
                    },
                  }"
                >
                  <button class="btn btn-primary">
                    View Product
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    homedecor() {
      return this.$store.state.homedecor;
    },
  },
  mounted() {
    this.$store.dispatch('fetchHomedecor');
  },
};
</script>
<style scoped>
.hclass {
  text-align: center;
  margin-top: 1rem;
}
.btn {
  background-color: #000000;
  color: white;
}
</style>