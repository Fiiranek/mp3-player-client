<template>
  <div class="track">
    <ul>
        <li :v-for="file in files">
            {{file.file}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Track",
  props: {
    files: Array
  }
};
</script>


<style scoped>
</style>
