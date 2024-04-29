<template>
<div class="markdown-content" v-html="markedContent"></div>
</template>

<script>
import {marked} from 'marked';
import prism from 'prismjs';

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
                prism.highlightAll();
            });
        }
    }, 
    mounted() {
        this.GetContent();

    },
    destroyed() {

    }
}
</script>

<style>
.markdown-content {
    font-family: 'Montserrat';
}
 
.markdown-content h1 {
    font-size: 32px;
    font-weight: 700;
}

.markdown-content h2 {
    font-size: 28px;
    font-weight: 500;
    margin: 24px 0px 12px 0px;
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
    font-weight: 500;
}

</style>