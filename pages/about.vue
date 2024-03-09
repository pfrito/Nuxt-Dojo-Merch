<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illum
      dolorem exercitationem modi eum voluptates, voluptate magni. Maxime,
      impedit quibusdam?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
      repellendus asperiores nam saepe vero! Nisi expedita iusto aperiam debitis
      recusandae?
    </p>

    <div>{{ data }}</div>
  </div>
</template>

<script setup>
// const { data } = await useFetch("/api/ninja?name=mario", {
//   method: "post",
//   body: {
//     age: 30,
//   },
// });

const { data } = await useFetch("/api/currency/GBP");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
