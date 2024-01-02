<template>
    <button @click="activeTab = 'TabA'">Tab A</button>
    <button @click="activeTab = 'TabB'">Tab B</button>
    <button @click="activeTab = 'TabC'">Tab C</button>
    <keep-alive>
        <component :is="activeTab" />
    </keep-alive>
    <!--
    <tab-a v-if="activeTab === 'TabA'" />
    <tab-b v-if="activeTab === 'TabB'" />
    <tab-c v-if="activeTab === 'TabC'" />
    -->
</template>
 
<script>
    import TabA from './components/TabA.vue';
    import TabB from './components/TabB.vue';
    import TabC from './components/TabC.vue';

    export default {
        name: 'App',
        components: {
            TabA,TabB,TabC
        },
        data() {
            return {
                activeTab: 'TabA'
            }
        },
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
