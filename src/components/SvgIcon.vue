<template>
  <svg :class="className" xmlns="http://www.w3.org/2000/svg">
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>
<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "svg-icon",
  props: {
    name: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const iconPath = computed(() => {
      let icon = require(`@/assets/icons/${props.name}.svg`);
      if (Object.prototype.hasOwnProperty.call(icon, "default")) {
        icon = icon.default;
      }

      return icon.url;
    });

    const className = computed(() => {
      return "svg-icon svg-icon--" + props.name;
    });
    return {
      className,
      iconPath,
    };
  },
});
</script>
<style>
.svg-icon {
  fill: currentColor;
  height: 24px;
  width: 24px;
}
</style>
