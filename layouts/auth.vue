<template>
  <v-app class="auth" dark>
    <v-main class="px-4">
      <v-card class="p-4" max-width="500" flat>
        <v-container>
          <div class="logo">
            <nuxt-link to="/" class="logo">
                <img src="https://www.ocsolutions.co.in/html/organic_food/images/style_blue.png">
            </nuxt-link>
          </div>
          <div class="title my-4">
            {{$t('login_to_your_account')}}
          </div>
          <nuxt />
        </v-container>
      </v-card>
    </v-main>
    <layouts-snack-bar/>
  </v-app>
</template>

<script>
export default {
  
}
</script>

<style >
@media(min-width : 768px){
  .auth .v-main{
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color:var(--primary-color);
  }
  .auth .v-main .v-card{
    margin:0 auto;
  }

}
.auth .no-account{
  margin-bottom: 20px;
  cursor: pointer;
  
}
.auth .no-account , .no-account a{
  font-size: 14px;
  color : var(--font-gray) !important;
  transition: var(--primary-transition);
  
}

.auth .no-account a:hover{
  color : var(--primary-color) !important

}
.auth button{
  width: 100%;
}
</style>

