<template>
    <div class="footer">
        <div class="con">
            <div class="layout">
                <div class="links">
                    <p>Home</p>
                    <p>Projects</p>
                    <p>Articles</p>
                    <p>Resume</p>
                </div>
                <div class="social-media">
                    <img src="Social IconsLinkedIn_light.svg">
                    <img src="Social IconsGithub_light.svg">
                    <img src="Social IconsGoogle_light.svg">
                </div>
                <img class="logo" src="Logo_Light.png">
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    background-color: #142429;
}

.layout {
    display: flex;    
    flex-direction: column;
}

.links {
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
}

.social-media {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.social-media img {
    width: 24px;
    margin: 12px 12px;
}

.logo {
    width: 48px;
    margin: 12px auto;
}

.con {
    padding: 28px 40px;
}
</style>