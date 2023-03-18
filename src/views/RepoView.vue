<script setup>
import { repository } from '../state/repoState';
import { useRoute } from 'vue-router';

import { format, formatDistance } from "date-fns"

const route = useRoute()
const repoSingle = repository.getSingle(route.params.id)
const lastUpdatedAt = format(new Date(repoSingle.updated_at), "d MMM yyyy")
const lastUpdatedTimeLapse = formatDistance(new Date(repoSingle.updated_at), new Date(), {
    addSuffix: true,
})


</script>

<template>
    <div id="details">
        <h1>
            {{ repoSingle.name }}

        </h1>
        <p v-show="!repoSingle.description">No Description Available</p>
        <p>{{ repoSingle.description }}</p>
        <p>
            <i className="icon-github-circled"></i> {{ repoSingle.git_url }}
        </p>

        <p>
            <span v-if="repoSingle.language">
                <i class="icon-book"></i> {{ repoSingle.language }} &nbsp; &nbsp; &nbsp;
            </span>
            <i className="icon-fork"></i> {{ repoSingle.forks }}
        </p>
        <p>
            Last updated: {{ lastUpdatedAt }} &nbsp; ({{ lastUpdatedTimeLapse }})
        </p>
        <!-- {{ repoSingle }} -->
    </div>

</template>

<style scoped>
#details {
    display: grid;
    place-content: center;
    text-align: center;
}
</style>