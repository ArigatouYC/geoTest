<template>
    <div class="box">
        <div>
            <KeyWordSearch></KeyWordSearch>
        </div>
        <div id="container"></div>
    </div>
    {{ auto }}
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import KeyWordSearch from '@/components/KeyWordSearch/KeyWordSearch.vue'

import { useInputContentStore } from "@/stores/inputContent";
import { ref } from "vue";
let InputContentStore = useInputContentStore()

let map: any = ref(null);

let autoOptions = ref(InputContentStore.inputContent)
let auto: any = ref(null)

onMounted(() => {
    AMapLoader.load({
        key: "d9ffa64390106f040749a8fcc0284c19", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        //同步加载需要配置此行代码
        plugins: ['AMap.ToolBar', 'AMap.Scale', 'AMap.HawkEye', 'AMap.MapType', 'AMap.Geolocation', 'AMap.AutoComplete'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
        .then((AMap) => {
            map = new AMap.Map("container", {
                // 设置地图容器id
                viewMode: "3D",
                zoom: 13,
                center: [102.71348, 25.04930],
            });
            // 同步加载
            map.addControl(new AMap.Scale())
            map.addControl(new AMap.ToolBar())
            map.addControl(new AMap.HawkEye())
            map.addControl(new AMap.MapType())
            map.addControl(new AMap.Geolocation())
            auto.value = new AMap.AutoComplete(autoOptions.value)

            // 异步加载插件
            // AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.HawkEye',
            //     'AMap.MapType', 'AMap.Geolocation'], function () {
            //         let toolbar = new AMap.ToolBar();
            //         map.addControl(toolbar);
            //         let scale = new AMap.Scale();
            //         map.addControl(scale);
            //         let hawkEye = new AMap.HawkEye();
            //         map.addControl(hawkEye);
            //         let mapType = new AMap.MapType();
            //         map.addControl(mapType);
            //         let geolocation = new AMap.Geolocation();
            //         map.addControl(geolocation);
            //     })

            //地图主题颜色
            map.setMapStyle('amap://styles/dark');
        })
        .catch((e) => {
            console.log(e);
        });
});
onUnmounted(() => {
    map?.destroy();
});

</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#container {
    /* 不设置宽高会谜之报错 */
    width: 1500px;
    height: 750px;
    border-radius: 20px;
}
</style>