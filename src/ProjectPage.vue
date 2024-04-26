<template>
<div v-html="markdownToHtml"></div>
</template>

<script>
import {marked} from 'marked';

export default {
    data() {
        return {
            markdown: "",
        };
    },
    computed: {
        markdownToHtml() {
            return marked(this.markdown);
        }
    }
}
</script>