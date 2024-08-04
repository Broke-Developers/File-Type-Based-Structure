<template>
  <details open>
    <summary>
      <slot />
    </summary>

    <template v-for="(folder, index) in props.items" :key="folder.title">
      <folders v-if="folder.folders" :items="folder.folders" indent :parent-link="folder.link">
        <div class="folder">
          └──
          <img :src="folder.img" />
          <a :href="folder.link" v-if="folder.link"> {{ folder.title }} </a>
          <span v-else>{{ folder.title }}</span>
        </div>
      </folders>

      <div class="folder" v-else>
        {{ props.indent ? "&emsp;" : "" }}
        {{ index === props.items.length - 1 ? "└──" : "├──" }}
        <img :src="folder.img" />
        <a :href="props.parentLink + folder.link" v-if="folder.link"> {{ folder.title }} </a>
        <span v-else>{{ folder.title }}</span>

        <br />
      </div>
    </template>
  </details>
</template>

<script setup>
  defineOptions({
    name: "folders",
  });

  const props = defineProps({
    items: {
      type: Array,
      validator(value) {
        return !value.some((folder) => !("title" in folder) || !("img" in folder));
      },
    },
    indent: Boolean,
    parentLink: {
      type: String,
      default: "",
    },
  });
</script>

<style scoped>
  .folder {
    display: inline;
  }

  .folder > * {
    display: inline;
    margin-left: 8px;
  }

  img {
    width: 20px;
    height: 20px;
  }

  summary {
    margin-bottom: 0;
    margin-left: -16px;
  }
</style>
