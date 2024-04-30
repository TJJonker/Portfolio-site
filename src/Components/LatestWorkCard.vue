<template>
    <div ref="elementToCheck" class="rectbox">
        <div :class="{'card-mobile-hover': this.isCentered, 'tablet-active':this.active}" class="card">
            <router-link :to="'Projects/' + index">
                <div class="aspect-ratio-container">
                    <div class="image-container">
                        <img :src="imageURL" alt="Card Image" class="card-image">
                        <div class="image-overlay">
                            <div>
                                <h2 class="title">{{ project.Preview.Title }}</h2>
                                <p class="subtitle"> {{ project.Preview.Subtitle }} </p>
                            </div>
                            <div class="category-container">
                                <span v-for="category in project.Categories" class="category">{{ category }}</span>
                            </div>
                            <div class="arrow"></div>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="progress-bar" :class="{'active':this.active}">
        </div>
    </div>
</template>

<script>
export default {
    props: ['project', 'index', 'active'],
    computed: {
        imageURL() {
            if(window.innerWidth > 749) 
                return 'Projects/' + this.project.ContentFolder + '/Big.png'
            return 'Projects/' + this.project.ContentFolder + '/Small.png'
        }
    },
    data() {
        return {
            isCentered: false
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.checkCenter);
        this.checkCenter();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('scroll', this.checkCenter);
    },
    methods: {
        handleResize() {
            // Update image source when window is resized
            this.$forceUpdate();
        },
        checkCenter() {
            if(window.innerWidth > 749)
                return;

            const element = this.$refs.elementToCheck;
            try {
                const rect = element.getBoundingClientRect();
                const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

                // Calculate the center of the viewport
                const viewportCenter = viewportHeight / 2;

                // Check if the element is in the center of the viewport
                if (rect.top < viewportCenter && rect.top + rect.height > viewportCenter) {
                    this.isCentered = true;
                } else {
                    this.isCentered = false;
                }
            }
            catch {

            }
        }
    }
}
</script>

<style scoped>

.rectbox {
    padding: 12px 0 12px 0;
}

.card {
    margin: 0 0;
    width: 100%; /* Adjust width as needed */
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    border-width: 0;
    transition: transform 0.5s ease-in-out;
    z-index: 2;
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
    background-color: rgba(0, 0, 0, 0.7); /* Adjust opacity as needed */
    opacity: 0;
    transition: opacity 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    box-sizing: border-box;
}

.card:hover .image-overlay {
    /* opacity: 1; */
}

.card-mobile-hover .image-overlay {
    opacity: 1;
}

.title {
    color: #fff;
    font-size: 18px;
    font-family: 'Montserrat';
    font-weight: 700;
}

.subtitle {
    color: #fff;
    font-size: 12px;
    font-family: 'Montserrat';
    font-weight: 400;
}

.category-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-right: 16px;
}

.category {
    background-color: #fff;
    color: #000;
    border-radius: 20px;
    padding: 2px 6px;
    margin-right: 4px;
    margin-bottom: 4px;
    font-size: 12px;
}

.arrow {
    position: absolute;
    bottom: 16px;
    right: 16px;
    width: 16px;
    height: 16px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(0deg);
}


@media only screen and (min-width: 370px) {
    .title {
        font-size: 22px;
        margin-bottom: 12px;
    }

    .subtitle {
        font-size: 14px;
    }

    .category {
        font-size: 12px;
    }

    .image-overlay {
        transition: opacity 0.5s ease;
    }
}

@media only screen and (min-width: 750px) {
    .rectbox {
        padding: 0;
        width: 30%;
    }

    .aspect-ratio-container {
        padding-top: 175%; /* Maintain 1:1.75 aspect ratio */
    }

    .tablet-active {
        transform: translateY(-32px);
    }

    .tablet-active .image-overlay {
        opacity: 1;
    }

    .progress-bar {
        width: 0%;
        height: 32px;
        border-radius: 90px;
        transform: translateY(-58px);
        background-color: #857D75; /* Change this to the desired color */
        transition: width 5s linear; /* Smooth transition for width changes over 5 seconds */
    }

    .progress-bar.active {
        width: 100%;
    }
}


/* @media only screen and (min-width: 1200px) {
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
        padding-top: 175%; 
        position: relative;
    }

    .card {
        border-radius: 30px;        
    }
} */


</style>
