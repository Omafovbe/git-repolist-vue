<script setup>
import { onMounted } from 'vue';
import { repository } from '../state/repoState';
import RepositoryList from '@/components/RepositoryList.vue'



onMounted(() => {
    repository.getRepos();


})

</script>
<template>
    <div v-show="repository.isLoading" style="text-align: center; font-size: 2rem">
        <i class="icon-spin4 animate-spin"></i> Loading...
    </div>
    <RepositoryList v-show="!repository.isLoading" :repos="repository.repos" />
    

</template>