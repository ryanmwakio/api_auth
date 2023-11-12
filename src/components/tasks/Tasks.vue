<script setup>
import { defineComponent, defineProps } from "vue";
import Task from "@/components/tasks/Task.vue";

defineProps({
  tasks: Array,
  show: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="card mt-2" v-if="tasks.length && show">
    <ul class="list-group list-group-flush">
      <Task v-for="task in tasks" :key="task.id" :task="task" />
    </ul>
  </div>
</template>

<style scoped></style>
