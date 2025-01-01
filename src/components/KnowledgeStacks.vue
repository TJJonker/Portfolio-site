<template>
    <div>
        <AnimatedTitle
            title="Knowledge Stacks"
            subTitle="The essential tools used to bring ideas to life and drive productivity."
        />
        <div class="stack">
            <div class="row">
                <IconArrowButton 
                title="Figma"
                subTitle="Interface Design Tool"
                icon="/Icons/ic_figma_colored.svg"
                link="https://www.figma.com/"
                />
                
                <IconArrowButton
                title="Slack"
                subTitle="Productivity Tool"
                icon="/Icons/ic_slack_colored.svg"
                link="https://slack.com/"
                />
            </div>
            <div class="row">
                <IconArrowButton
                title="Jira"
                subTitle="Productivity Tool"
                icon="/Icons/ic_jira_colored.svg"
                link="https://www.atlassian.com/nl/software/jira"
                />
                
                <IconArrowButton
                title="Obsidian"
                subTitle="Knowledge Management Tool"
                icon="Icons/ic_obsidian_colored.svg"
                link="https://obsidian.md/"
                />
            </div>
        </div>
    </div>
</template>

<script>
import IconArrowButton from "./IconArrowButton.vue"
import AnimatedTitle from "./AnimatedTitle.vue";

export default {
    title: "KnowledgeStacks",
    components: {
        IconArrowButton,
        AnimatedTitle
    }
}
</script>

<style lang="css" scoped>
.text {
    margin-bottom: var(--space-l);
}

.stack {
    margin: var(--space-m) 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: var(--space-s);
}

.row {
    display: flex;
    width: 100%;
    gap: var(--space-s);
}
</style>