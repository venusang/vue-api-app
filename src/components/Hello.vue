<template>
  <div class="hello" >
    <table>
      <tr v-for="(item, index) in items">
        <td v-show="item.resource.resourceType === 'Patient'">{{index}}</td >
        <td v-show="item.resource.resourceType === 'Patient'">{{item.resource.id.value}}</td>
        <td v-show="item.resource.resourceType === 'Patient'">{{item.resource.resourceType}}</td>
        <td v-show="item.resource.resourceType === 'Patient'">
          <div v-for="info in item.resource.name">
            GIVEN: {{info.given[0]}}  FAMILY: {{info.family}}
          </div>
        </td>
      </tr>
    </table>

    <table>
      <tr v-for="(item, index) in items">
        <td v-show="item.resource.resourceType === 'Encounter'">{{index}}</td >
        <td v-show="item.resource.resourceType === 'Encounter'">{{item.resource.id}}</td>
        <td v-show="item.resource.resourceType === 'Encounter'">{{item.resource.period}}</td>
      </tr>
    </table>

    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import json from '../api/bundle.json';

export default {
  name: 'hello',
  data() {
    return {
      entry: json,
      items: json.entry,
      patient: json.entry.name,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
