<template>
    <input
		class="search-input"
		:type="inputType"
		:placeholder="placeholder"
	/>
</template>

<script>
export default {
    props:{
        inputType: {
			type: String,
			default: 'text',
        },
        placeholder: {
			type: String,
			default: '',
		},
    }
    
}
</script>

<style scoped lang="scss">
.search-input {
	margin-top: 10px;
    width: 150px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 1px;
    color: #FFFFFF;
    font-size: 13px;
    background-color: #000000;
    margin-bottom: 10px;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 5px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    
	 &--circle{
        //wykorzystawne w Ustawieniach
        border-radius: 30px;
        padding: 12px 20px 12px 8px;
        width: 180px;
        color:  $white;
        background-color: #1a1a1a;
        border: 2px solid #595959;
    }
    &:focus{
        width: 100%;
    }
}
</style>>