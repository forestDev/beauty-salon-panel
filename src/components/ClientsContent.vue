<template>
  <div class="row">
      <div class="row col-12 clients">
          <div class="col-12 col-md-5 name-box name-box--mt">
              <div class="row date-person">
              <div class="col-12 name">Jan Kowalski</div>
              <div class="col-12 phone-number">750 256 365</div>
              </div>
              <div class="info-client">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit eaque consectetur explicabo voluptates magni! Et aspernatur 
                  praesentium facere velit non unde quidem autem fugit perspiciatis, dolorem doloribus culpa debitis quam, nam eaque rem cum corrupti officia 
                  praesentium facere velit non unde quidem autem fugit perspiciatis, dolorem doloribus culpa debitis quam, nam eaque rem cum corrupti officia
                  praesentium facere velit non unde quidem autem fugit perspiciatis, dolorem doloribus culpa debitis quam, nam eaque rem cum corrupti officia
                  laboriosam aperiam deserunt ut. Ad iusto saepe quas quos eveniet sint consectetur similique.</div>
          </div>
          <div class="col-12 col-md-5 name-box name-box--mt">
              <div class="row date-person">
              <div class="col-12 name">Jan Kowalski</div>
              <div class="col-12 phone-number">750 256 365</div>
              </div>
              <div class="info-client">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit eaque consectetur explicabo voluptates magni! Et aspernatur 
                  praesentium facere velit non unde quidem autem fugit perspiciatis, dolorem doloribus culpa debitis quam, nam eaque rem cum corrupti officia
                  praesentium facere velit non unde quidem autem fugit perspiciatis, dolorem doloribus culpa debitis quam, nam eaque rem cum corrupti officia
                  praesentium facere velit non unde quidem autem fugit perspiciatis, dolorem doloribus culpa debitis quam, nam eaque rem cum corrupti officia 
                  laboriosam aperiam deserunt ut. Ad iusto saepe quas quos eveniet sint consectetur similique.</div>
          </div>
          <div class="col-12 col-md-5 name-box name-box--mt">
              <div class="row date-person">
              <div class="col-12 name">Jan Kowalski</div>
              <div class="col-12 phone-number">750 256 365</div>
              </div>
              <div class="info-client">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit eaque consectetur explicabo voluptates magni! Et aspernatur 
                  praesentium facere velit non unde quidem autem fugit perspiciatis, dolorem doloribus culpa debitis quam, nam eaque rem cum corrupti officia
                  praesentium facere velit non unde quidem autem fugit perspiciatis, dolorem doloribus culpa debitis quam, nam eaque rem cum corrupti officia
                  praesentium facere velit non unde quidem autem fugit perspiciatis, dolorem doloribus culpa debitis quam, nam eaque rem cum corrupti officia 
                  laboriosam aperiam deserunt ut. Ad iusto saepe quas quos eveniet sint consectetur similique.</div>
          </div>
          <div class="col-12 col-md-5 name-box name-box--mt">
              <div class="row date-person">
              <div class="col-12 name">Jan Kowalski</div>
              <div class="col-12 phone-number">750 256 365</div>
              </div>
              <div class="info-client">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit eaque consectetur explicabo voluptates magni! Et aspernatur 
                  praesentium facere velit non unde quidem autem fugit perspiciatis, dolorem doloribus culpa debitis quam, nam eaque rem cum corrupti officia
                  praesentium facere velit non unde quidem autem fugit perspiciatis, dolorem doloribus culpa debitis quam, nam eaque rem cum corrupti officia
                  praesentium facere velit non unde quidem autem fugit perspiciatis, dolorem doloribus culpa debitis quam, nam eaque rem cum corrupti officia 
                  laboriosam aperiam deserunt ut. Ad iusto saepe quas quos eveniet sint consectetur similique.</div>
          </div>
        
      </div>
 </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.clients{
   display: flex;
    background-color: #302d2d;
    border: 2px solid $black;
    border-radius: 5px;
    height: 600px;
    overflow-y: auto;
    font-family: "mukta-light";
    scrollbar-width: thin;
    justify-content: space-around;
    margin-top: 20px;
}
.name-box{
   display: flex;
   flex-direction: column;
   height: 220px;
   font-family: 'mukta-light';
   margin-top: 10px;
   overflow-y: auto;
   --border-radius: 5px;
   box-shadow: 0 0 1.5em $black;
   @include device-small{
       margin-left: 30px;
   }
&--mt{
    margin-top: 20px;
}
}
.name{
    
}
.date-person{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100px;
    background: #A2A2A200;
    margin-left: -15px;
    margin-right: -15px;
    color: white;
    font-size: 20px;
}
.info-client{
    background: black;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 18px;
    height: 100%;
    margin-left: -15px;
    margin-right: -15px;
    overflow-y: auto;
    padding: 3px;
    scrollbar-width: thin;
}
</style>