<script setup>
import { computed, onMounted, ref } from 'vue'

let props = defineProps({
    maxVisibleButtons: {
        type: Number,
        required: false,
        default: 3
    },
    totalPages: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    perPage: {
        type: Number,
        required: true
    },
    currentPage: {
        type: Number,
        required: true
    },
});

//  props.currentPage = 1;
let emits = defineEmits(['pagechanged'])

console.log(props.maxVisibleButtons, props.totalPages)


function onPageChange(page) {
    console.log(page)
    props.currentPage = page;

}

function onClickFirstPage() {
    emits('pagechanged', 1);
}
function onClickPreviousPage() {
    emits('pagechanged', props.currentPage - 1);
}
function onClickPage(page) {
    emits('pagechanged', page);
}
function onClickNextPage() {
    emits('pagechanged', props.currentPage + 1);
}
function onClickLastPage() {
    emits('pagechanged', props.totalPages);
}
function isPageActive(page) {
      return props.currentPage === page;
    }

const startPage = computed(() => {
    if (props.currentPage === 1) {
        return 1;
    }

    if (props.currentPage === props.totalPages) {
        return props.totalPages - props.maxVisibleButtons + 1;
    }

    return props.currentPage - 1;

});
const endPage = computed(() => {

    // return Math.min(3, 2);
    return Math.min((startPage.value + props.maxVisibleButtons - 1), props.totalPages);

});


const pages = computed(() => {
    const range = [];

    for (let i = startPage.value; i <= endPage.value; i += 1) {
        range.push({
            name: i,
            isDisabled: i === props.currentPage
        });
    }
    
    return range;
});
console.log('start: ' +startPage.value + 'end: '+ endPage.value)
const isInFirstPage = computed(() => {
    return props.currentPage === 1;
});
const isInLastPage = computed(() => {
    return props.currentPage === props.totalPages;
});

</script>

<template>
    <ul class="pagination">

        <li class="pagination-item">
        <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage" aria-label="Go to previous page">
            Previous
        </button>
        </li>

        <li v-for="page in pages" class="pagination-item">
            <button type="button" @click="onClickPage(page.name)" :disabled="page.isDisabled"
                :class="{ active: isPageActive(page.name) }" :aria-label="`Go to page number ${page.name}`">
                {{ page.name }}
            </button>
        </li>

        <li class="pagination-item">
            <button type="button" @click="onClickNextPage" :disabled="isInLastPage" aria-label="Go to next page">
                Next
            </button>
        </li>

        <li class="pagination-item">
            <button type="button" @click="onClickLastPage" :disabled="isInLastPage" aria-label="Go to last page">
                Last
            </button>
        </li>
    </ul>
</template>

<style scoped>
.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
  margin-right: 4px;
}

button {
    padding: 5px;
}

.active {
  background-color: rgb(13, 142, 99);
  color: #ffffff;
}
</style>