<template>
    <client-only>
        <div class="narrow" :class="{ 'properties-row': width > 425, 'properties-column': width < 425 }">
            <TitleList :bold="true" title="Roles" title-short="Roles" :items="roles" :vertical="width > 425" />
            <TitleList :bold="true" title="Technologies" title-short="Techs" :items="technologies"
                :vertical="width > 425" />
            <TitleList :bold="true" title="Goal" title-short="Goal" :items="goal" :vertical="width > 425" />
            <TitleList :bold="true" title="Year" title-short="Year" :items="year" :vertical="width > 425" />
        </div>
    </client-only>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize();

defineProps(['roles', 'technologies', 'goal', 'year'])
</script>

<style lang="scss" scoped>
.narrow {
    grid-column: 4 / span 6;

    @media (max-width: $breakpoint-desktop) {
        grid-column: 3 / span 6;
    }

    @media (max-width: $breakpoint-laptop) {
        grid-column: 2 / span 6;
    }

    @media (max-width: $breakpoint-tablet) {
        grid-column: 1 / span 6;
    }
}

.properties-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.properties-column {
    display: flex;
    flex-direction: column;
    gap: var(--space-s);
}
</style>