<template>
  <div>
    <NuxtLayout>
      <header class="py-2 px-4 space-x-4 font-bold">
        <NuxtLink class="inline-block rounded  px-2 py-2 bg-red-200 text-red-500" to="/">Home</NuxtLink>
        <NuxtLink class="inline-block rounded  px-2 py-2 bg-red-200 text-red-500"  to="/events">Events</NuxtLink>
      </header>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
