<script setup>
import { onMounted, ref } from 'vue';
import paginateComp from './paginateComp.vue';
import { repository } from '../state/repoState';
import RepositoryList from '@/components/RepositoryList.vue'


onMounted(() => {
    repository.getRepos()
})

let currentPage = ref(1)

const onPageChange = (page) => {
    console.log(page)
      currentPage.value = page;
}
</script>
<template>
    <h2 style="text-align: 'center'">Homepage</h2>    
    
    <RepositoryList :repos="repository.repos" />

    <paginateComp
    :totalPages="5"
      :perPage="1"
      :total="20"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
    />
</template>