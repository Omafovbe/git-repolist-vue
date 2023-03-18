<script setup>
import { repository } from '../state/repoState';
import { useRoute } from 'vue-router';

const route = useRoute()
const repoSingle = repository.getSingle(route.params.id)
</script>

<template>
    <h1>
        <!-- Name: {{ repoSingle.name }} -->

    </h1>
    <p>{{ repoSingle.description }}</p>
    {{ repoSingle }}
</template>