<template lang="html">
  <section class="products">
    <main class="category__main">
      <div class="section__details">
        <h1 class="section__title">Simple search products</h1>
        <p
          class="section__category"
          v-for="category in categories"
          :key="category.id"
        >
          {{ category.title }}
        </p>
      </div>

      <form class="search-local" @submit.prevent>
         

        <label class="search__label" for="search-input-local"
          >
           Type product that you are looking for<br>
          <input
          class="search__input"
          id="search-input-local"
          type="search"
          name="search__input"
          v-model="searchValue"
        />
        </label
        >
      </form>
      <div
        v-for="category in filteredCategories"
        :key="category._id">
        <CategoryProductItem
          v-for="product in category.products"
          :key="product._id"
          :product="product"
        >
          <template v-slot:price="category">
            <p class="product__price">${{ category.product.price }}</p>
          </template>
          <template v-slot:description="category">
  <p class="product__description">{{ category.product.description }}</p>
</template>
        </CategoryProductItem>
      </div>
    </main>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import CategoryProductItem from "./CategoryProductItem";
export default {
  name: "CategoryProduct",
  components: {
    CategoryProductItem,
  },
  data() {
    return {
      searchValue: "",
    };
  },
  computed: {
    ...mapGetters(["categories"]),
    filteredCategories() {
      return this.categories.reduce((output, category) => {
        const filteredProducts = category.products.filter((product) =>
          product.title.includes(this.searchValue)
        );

        if (filteredProducts.length) {
          output.push({
            ...category,
            products: filteredProducts,
          });
        }
        return output;
      }, []);
    },
  },
  async created() {
    await this.$store.dispatch("fetchCategory");
  },
};
</script>

<style lang="scss" scoped>
</style>
