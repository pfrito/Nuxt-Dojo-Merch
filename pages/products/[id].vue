<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const url = "https://fakestoreapi.com/products/" + id;

// fetch product
const { data: product } = await useFetch(url);
if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found", fatal: true });
}

definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
