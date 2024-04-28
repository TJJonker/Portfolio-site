<template>
<div v-html="markedContent"></div>
</template>

<script>
import {marked} from 'marked';

export default {
    props: ['filePath'],
    data() { return {
        markedContent: ""
    }
    },
    methods: {
        async GetContent() {
            let res = await fetch(this.filePath);
            let data = await res.text();
            this.markedContent = marked(data);
        }
    },
    mounted() {
        this.GetContent();
    }
}
</script>