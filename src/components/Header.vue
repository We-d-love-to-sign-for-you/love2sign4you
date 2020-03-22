<template>
    <img src="images/Element 3@3x.png" v-bind:style="{width : 'auto', height : 'auto', maxWidth : maxWidth + 'px', maxHeight : maxHeight + 'px'}" alt="">
</template>

<script>
export default {
    name: "Header",
    props: {
        maxWidth:Number,
        maxHeight:Number,
    }
}
</script>