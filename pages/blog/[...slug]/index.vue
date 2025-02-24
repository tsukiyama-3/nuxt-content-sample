<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData(route.path, () =>
  queryCollection('blog').path(route.path).first(),
)
</script>

<template>
  <main class="article">
    <article v-if="data">
      <h1 class="title">
        {{ data.title }}
      </h1>
      <p class="date">
        {{ data.date }}
      </p>
      <ContentRenderer :value="data" />
    </article>
    <div v-else>
      <h1>記事が見つかりませんでした</h1>
    </div>
  </main>
</template>
