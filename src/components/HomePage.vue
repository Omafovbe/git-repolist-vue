<script setup>
import { onMounted, ref, computed } from 'vue';
import { repository } from '../state/repoState';
import RepositoryList from '@/components/RepositoryList.vue'



onMounted(() => {
    repository.getRepos();


})

</script>
<template>
    <div v-show="repository.isLoading">
        Loading...
    </div>
    <RepositoryList v-show="!repository.isLoading" :repos="repository.repos" />
    

</template>