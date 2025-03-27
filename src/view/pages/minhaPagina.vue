<template>
  <div>
    <sdPageHeader title="Blank Page" class="ninjadash-page-header-main"></sdPageHeader>
    <Main>
      Write your vue code
    </Main>
  </div>
</template>

<script>
  import { Main } from "../styled";
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "NewPage",
    components: {
      Main,
    },
  });
</script>