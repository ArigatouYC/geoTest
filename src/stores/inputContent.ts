import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useInputContentStore = defineStore('InputContent', () => {
    let inputContent = ref()

    return { inputContent }
})