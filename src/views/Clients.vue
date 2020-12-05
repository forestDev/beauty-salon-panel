<template>
    <div>
        <div class="row">
            <div class="col-12 col-md-7 client-header">
                <div class=" label">Baza klientów</div>
            </div>    
            <div class="col-12 col-md-5 client-header client-header--right">
                <div class=" search-box">
                    <clients-search
                    placeholder="Znajdź klientów"/>
                </div>
            </div>
            <clients-content/>
            
        </div>
        <div class="row clients-button">
            <div class="col-md-4 col-12 clients-button--mobile-margin-top">
                <base-button is-secondary>Dodaj</base-button>
            </div>
            <div class="col-md-4 col-12 clients-button--mobile-margin-top">
                <base-button is-secondary>Edytuj</base-button>
            </div>    
        </div>
    </div>
</template>
<script>
import ClientsSearch from '@/components/ClientsSearch.vue'
import ClientsContent from '@/components/ClientsContent.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
    components: {
        BaseButton,
        ClientsSearch,
        ClientsContent
	},
}
</script>,
        BaseButton
<style scoped lang="scss">
.label{
    display: flex;
    font-size: 24px;

}
.search-box{
     
    @include device-small{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @include device-medium {
        display: flex;
        justify-content: right;
        margin-top: 10px;
    }
 
}
.client-header{
    display: flex;
    justify-content: right;
    align-items: center;
    margin-top: 20px;
    &--right{
        justify-content: right;
        @include device-small{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    }
    @include device-small{
        justify-content: center;
    }
}
.clients-button {
	margin-top: 16px;
	margin-bottom: 32px;
	justify-content:space-between;
    @include device-small{
        &--mobile-margin-top{
            margin-top:20px;
        }
    }
	
}
</style>