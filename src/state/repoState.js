import { reactive } from "vue";
import { $_getPosts } from "../services";

export let repository = reactive({
    repos: [],
    isLoading: false,

    async getRepos() {
        
        const loadRepo = localStorage.getItem('repo')

        if (loadRepo === null) {
            this.isLoading = true
            
            this.repos = await $_getPosts()
            this.updateLocalStore()
            this.isLoading = false
            
        }
        else
            this.repos = JSON.parse(loadRepo)
        
    },

    updateLocalStore() {
        let savethis = JSON.stringify(this.repos)
        localStorage.setItem('repo', savethis)
    },

    getSingle(node_id) {
        return this.repos.find( (repo) => repo.node_id === node_id)
    }
})