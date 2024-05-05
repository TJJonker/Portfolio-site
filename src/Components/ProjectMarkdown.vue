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

                this.$el.querySelectorAll('a').forEach(link => {
                    link.setAttribute('target', '_blank');
                });
            });
        }
    }, 
    mounted() {
        this.GetContent();
    },
    watch: {
        async filePath(newPath, oldPath){
            await this.GetContent();
        }
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
    text-align: justify;
    text-justify: inter-word;    
}

.markdown-content img {
    width: 100%;
}

.markdown-content blockquote p {
    font-size: 12px;
    text-decoration: none;
    text-align: left;
    text-justify: auto; 
}

.contentRow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 32px;
}

.R {
    width: 100%;
}

.markdown-content hr {
    width: 50%;
    margin: 12px auto;
    border: none;
    height: 3px;
    background-color: #000; /* Change this to the desired color */
    border-radius: 1.5px; /* Adjust border-radius for rounded edges */
}


</style>