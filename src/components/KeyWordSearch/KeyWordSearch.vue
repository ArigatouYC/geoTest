<template>
    <div>
        <input type="text" placeholder="请输入目的地" class="ipt" v-model="InputContentStore.inputContent">
        <el-button type="primary" size="default" class="searchButton" @click="">搜索</el-button>
    </div>
</template>

<script setup lang="ts">
import { useInputContentStore } from "@/stores/inputContent";
let InputContentStore = useInputContentStore()
</script>

<style scoped>
.searchButton {
    height: 36px;
}

.ipt {
    width: 400px;
    height: 30px;
    margin: 10px;
    margin-right: -55px;
}
</style>