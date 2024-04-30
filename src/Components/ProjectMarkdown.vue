<template>
<div class="markdown-content" v-html="markedContent"></div>
</template>

<script>
import {marked} from 'marked';
import Prism from 'prismjs';
import "prismjs/themes/prism.css";

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

            this.$nextTick(() => {
                window.Prism = window.Prism || {};
                window.Prism.manual = true;
                Prism.highlightAll();
            });
        }
    }, 
    mounted() {
        this.GetContent();
    },
} 
</script>

<style>
.markdown-content {
    font-family: 'Montserrat';
}
 
.markdown-content h1 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 24px;
}

.markdown-content h2 {
    font-size: 28px;
    font-weight: 500;
}

.markdown-content h3 {
    font-size: 22px;
    font-weight: 500;
}

.markdown-content h4 {
    font-size: 18px;
    font-weight: 600;
}

.markdown-content p {
    font-size: 16px;
    font-weight: 400;
}

.markdown-content img {
    width: 100%;
}

.markdown-content blockquote p {
    font-size: 12px;
    text-decoration: none;
}

</style>