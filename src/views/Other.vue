<template>
  <div class="other">
    <HelloWorld msg="Welcome other pages." />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Other',
  components: {
    HelloWorld,
  },
}
</script>
