<template>
    <div class="app-menu">
        <div class="container">
            <router-link :to="{ path: '/' }" class="menu-link">Home</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.app-menu {
    background-color: #0061ad;
    padding: 15px 20px;
}
.app-menu a {
    color: white;
}
</style>
