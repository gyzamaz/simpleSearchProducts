<template>
  <article class="product">
    <figure class="product__image-container">
      <img
        :src="`http://localhost:3000${product.image.url}`"
        class="product__image"
      />
    </figure>
    <div class="product__info">
      <p class="product__name">{{ product.title }}</p>
      <slot name="description" :product="product"> </slot>
      <slot name="price" :product="product"> </slot>
    </div>
  </article>
</template>

<script>
export default {
  name: "CategoryProductItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
</style>