<script setup lang="ts">
const { data } = await useAsyncData(() => queryCollection('content').path('/').first())
const { data: officialServiceIds } = await useAsyncData('officialServiceIds', () => {
  return queryCollection('officialServiceIds')
    .first()
    .then((result) => result?.services?.aircon ?? []); 
})
console.log(officialServiceIds.value, 'officialServiceIds')
</script>

<template>
  <div>
    <p>officialServiceIds: {{ officialServiceIds }}</p>
    <ContentRenderer v-if="data" :value="data" />
    <div v-else>コンテンツが見つかりませんでした。</div>
  </div>
</template>