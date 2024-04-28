<template>
<div v-html="markedContent"></div>
</template>

<script>
import {marked} from 'marked';

export default {
    data() { return {
        markedContent: ""
    }
    },
    methods: {
        async GetContent() {
            let res = await fetch('sampleProject.md');
            let data = await res.text();
            this.markedContent = marked(data);
        }
    },
    mounted() {
        this.GetContent();
    }
}
</script>