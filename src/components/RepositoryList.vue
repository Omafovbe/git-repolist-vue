<script setup>
import { ref, computed, reactive } from 'vue'
import { repository } from '../state/repoState';
import paginateComp from './paginateComp.vue';


let props = defineProps({
    repos: Array,
})

const url = '/repo/'

// Reactive object to declare default list options
const dispList = reactive({
    repoList: [],
    minLimit: 0,
    maxLimit: 4,
    perPage: 4,
})

dispList.repoList = computed(() => {
    // return props.repos.slice(0, 8)
    return props.repos.slice(dispList.minLimit, dispList.maxLimit)
});



const getTotalPages = computed(() => {
    return  Math.ceil(props.repos.length/dispList.perPage)
})

let currentPage = ref(1)

const onPageChange = (page) => {
    console.log('page: '+page, dispList.currentPage)
    currentPage.value =page;
    dispList.minLimit = ((page - 1) * dispList.perPage)
    dispList.maxLimit = (page * dispList.perPage)
    console.log(dispList.minLimit, dispList.maxLimit)
}

</script>

<template>
    <div>
        <!-- {{ dispList }} -->
        <!-- {{ repos }} -->
        <ul>
        <li v-for="repo in dispList.repoList" :key="repo.id">
            <h3>{{ repo.name }}</h3>
            <p>{{ repo.description }}</p>
            <RouterLink :to="url+repo.node_id">More...</RouterLink>

        </li>
    </ul>

    <paginateComp
        :totalPages=getTotalPages
        :perPage=dispList.perPage
        :total=5
        :currentPage=currentPage
        @pagechanged="onPageChange"
    />
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
    margin: 15px 0;
    padding: 15px;
    border-radius: 5px;
    width: 400px;
}

h3 {
    font-weight: 700;
}
</style>