<template>
<a :href="url" class="card" :style="enableUnderline">
    <div class="stack">
        <div class="title">
            <h3>{{ title }}</h3>
            <p>{{ subTitle }}</p>
        </div>
        <div class="row">
            <p class="secondary line-prefix">{{ date }}</p>
            <div class="icons">
                <!-- <a href=""><img class="icon" src="/Icons/ic_share_white.svg" alt="Share icon"></a>
                <a href=""><img class="icon" src="/Icons/ic_bookmark_white.svg" alt="Bookmark icon"></a> -->
            </div>
        </div>
    </div>
    <div class="image">
        <img :src="image" alt="">
    </div>
</a>
</template>

<script>
export default {
    name: "ArticleCard",
    props: {
        title: { Type: String, require: true },
        subTitle: { Type: String, require: true },
        date: { Type: String, require: true },
        url: { Type: String, require: true },
        image: { Type: String, require: true },
        last: { Type: Boolean, require: false, default: false }
    },
    computed: {
    enableUnderline() {
        return !this.last
            ? { 'border-bottom': '2px solid var(--background-tertiary-color)' } // Removed the semicolon
            : {};
        }
    }
}
</script>

<style lang="css" scoped>
.card {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    column-gap: var(--column-gap);
    padding: var(--space-l);
    transition: padding var(--animation-mode-medium);
}

.card:hover {
    padding-left: calc(var(--space-l) * 2);
    padding-right: 0;
}

.card:hover .row {
    padding-right: calc(var(--space-m) + var(--space-l));
}

.stack {
    grid-column: 1 / span 6;
    display: flex;
    flex-direction: column;
    gap: var(--space-l);
}

.image {
    grid-column: 7 / span 2;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.line-prefix {
    position: relative;
    padding-left: var(--space-m); 
}

.line-prefix::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 100%; /* Full height of the text */
    background-color: var(--accent-color); /* Set the color of the rectangle */
    transition: background-color var(--animation-mode-titles);
}

.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: var(--space-m);
    transition: padding-right var(--animation-mode-medium);
}

.icons {
    display: flex;
    flex-direction: row;
    gap: var(--space-m);
}

.icon {
    filter: grayscale(100%) brightness(70%);
    transition: filter var(--animation-mode-fast);
    height: 20px;
    width: 20px;
}

.icon:hover {
  filter: none;
}

.image img {
    border-radius: 5px;
    max-width: 200px;
}
</style>