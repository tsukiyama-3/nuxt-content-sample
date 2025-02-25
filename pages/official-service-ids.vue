<script setup lang="ts">
const { data: officialServiceIds } = await useAsyncData('officialServiceIds', () => {
  return queryCollection('officialServiceIds')
    .first()
    .then(result => result?.services?.aircon ?? [])
})
</script>

<template>
  <div>
    <p>officialServiceIds: {{ officialServiceIds }}</p>
  </div>
</template>
