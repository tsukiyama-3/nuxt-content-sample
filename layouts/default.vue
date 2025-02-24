<template>
  <div class="content">
    <header>
      <HeaderNav />
    </header>
    <slot />
  </div>
</template>

<style scoped>
.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
