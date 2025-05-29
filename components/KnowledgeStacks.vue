<template>
    <div>
        <AnimatedTitle v-if="width > 425" title="Knowledge Stacks"
            subTitle="The essential tools used to bring ideas to life and drive productivity." />
        <AnimatedTitle v-else title="Tools"
            subTitle="The essential tools to get the job done." />

        <div class="skill-stack">
            <IconArrowButton title="Figma" subTitle="Interface Design Tool" icon="/Icons/ic_figma_colored.svg"
                link="https://www.figma.com/" />
            <IconArrowButton title="Slack" subTitle="Productivity Tool" icon="/Icons/ic_slack_colored.svg"
                link="https://slack.com/" />
            <IconArrowButton title="Jira" subTitle="Productivity Tool" icon="/Icons/ic_jira_colored.svg"
                link="https://www.atlassian.com/nl/software/jira" />
            <IconArrowButton title="Obsidian" subTitle="Knowledge Tool" icon="Icons/ic_obsidian_colored.svg"
                link="https://obsidian.md/" />
        </div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
</script>

<style lang="scss" scoped>
.skill-stack {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-s);

    @media (max-width: $breakpoint-mobile) {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>