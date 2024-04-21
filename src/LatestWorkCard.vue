<template>
    <div class="card">
        <div class="aspect-ratio-container">
            <div class="image-container">
                <img :src="imageURL" alt="Card Image" class="card-image">
                <div class="image-overlay">
                    <div>
                        <h2 class="title">{{ work.title }}</h2>
                        <p class="subtitle"> {{ work.subTitle }} </p>
                    </div>
                    <div class="category-container">
                        <span v-for="category in work.categories" class="category">{{ category.value }}</span>
                    </div>
                    <div class="arrow"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['work'],
    computed: {
        imageURL() {
            if(window.innerWidth > 1200)
                return this.work.imageUrl.big
            return this.work.imageUrl.small
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            // Update image source when window is resized
            this.$forceUpdate();
        }
    }
}
</script>

<style scoped>
.card {
    margin: 0 0;
    width: 100%; /* Adjust width as needed */
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 24px;
    border-width: 0;
}

.aspect-ratio-container {
    width: 100%;
    padding-top: 100%; /* Maintain 1:1.75 aspect ratio */
    position: relative;
}

.image-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.card-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the image covers the entire container */
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity as needed */
    opacity: 0;
    transition: opacity 0.2s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px;
    box-sizing: border-box;
}

.card:hover .image-overlay {
    opacity: 1;
}

.title {
    color: #fff;
    font-size: 16px;
    font-family: 'Montserrat';
    font-weight: 700;
}

.subtitle {
    color: #fff;
    font-size: 8px;
    font-family: 'Montserrat';
    font-weight: 400;
}

.category-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}

.category {
    background-color: #fff;
    color: #000;
    border-radius: 20px;
    padding: 4px 8px;
    margin-right: 4px;
    margin-bottom: 4px;
    font-size: 8px;
}

.arrow {
    position: absolute;
    bottom: 40px;
    right: 40px;
    width: 20px;
    height: 20px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(0deg);
}

@media only screen and (min-width: 1200px) {
    .title {
        font-size: 22px;
    }

    .subtitle {
        font-size: 12px;
    }

    .category {
        font-size: 12px;
    }

    .aspect-ratio-container {
        width: 100%;
        padding-top: 175%; /* Maintain 1:1.75 aspect ratio */
        position: relative;
    }

    .card {
        border-radius: 30px;        
    }
}

@media only screen and (min-width: 1500px) {
    .title {
        font-size: 32px;
    }

    .subtitle {
        font-size: 24px;
    }

    .category {
        font-size: 12px;
    }

    .card {
        margin: 0 32px;
        border-radius: 30px;    
    }
}
</style>
