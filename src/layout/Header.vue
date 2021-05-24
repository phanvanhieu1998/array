<template>
  <div>
    day la header
    <router-link to="/login">
      <button>haha</button>
    </router-link>
    <router-link :to="{ name: 'product', params: { slug: 'slug' } }"
      >Women</router-link
    >
    <!-- <nuxt-link
                  style="color:#fff"
                  :to="{ path: `/categories/${item.slug}` }"
                  >{{ item.name }}</nuxt-link
                > -->

    <router-link :to="{ name: 'product', params: { slug: 'slugggg' } }"
      >Women3</router-link
    >

    <router-link to="/about">about</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
