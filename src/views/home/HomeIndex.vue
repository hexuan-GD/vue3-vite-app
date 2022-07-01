<script lang="ts" setup>
import { useCounterStore } from "@/stores/counters";

import { storeToRefs } from "pinia";
const counter = useCounterStore();
const { count } = storeToRefs(counter);
</script>
<template>
    <button @click="counter.increment()">
        {{ counter.count }}
    </button>
    <div>{{ count }}</div>
</template>
