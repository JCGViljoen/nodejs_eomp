<template>
    <div class="spin">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .spin{
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin:15px;
    }
    .spinner-border{
        color: #a97847;
    }
</style>