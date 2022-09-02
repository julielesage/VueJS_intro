<template>
<h2>
    {{name}}
</h2>
<div v-if="customed === false"><slot>default data here if nothing inside slotv2</slot></div>
<div v-else>
	<header>
    <slot name="header"> header default data here if nothing inside slotv2 </slot>
</header>
<footer>
    <slot name="footer"> footer default data here if nothing inside slotv2 </slot>
</footer>
</div>

</template>

// util pour du layout avec content ;)

<script>
export default {
    name: "SlotV2",
    props: {
        name: String,
		customed: Boolean
    }
}
</script>

<style lang="scss" scoped>

</style>
