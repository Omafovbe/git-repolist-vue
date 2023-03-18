<script setup>

defineProps({
    repos: Array
})

const url = '/repo/'

</script>

<template>
    <div class="center">
        <ul>
        <li v-for="repo in repos" :key="repo.id">
            <h3>{{ repo.name }}</h3>
            <p>{{ repo.description }}</p>
            <RouterLink :to="url+repo.node_id">More...</RouterLink>

        </li>
    </ul>
    </div>
    
</template>

<style scoped>
/* .center {
    margin: 0 auto;
} */
ul {
    list-style: none;
    padding: 0;
    
    
}
ul > li {
    background-color: rgb(33, 32, 32);
    margin: 10px 0;
    padding: 20px;
    border-radius: 5px;
    width: 400px;
}

h3 {
    font-weight: 700;
}
</style>