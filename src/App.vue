<template>
  <div>
    <Parent/>
    <UserData/>
    <FormData/>
  </div>
</template>

<script>
import Parent from './components/ParentChildQ1/Parent.vue';
import UserData from './components/UsersList/UserData.vue';
import FormData from './components/Form/FormData.vue';
export default {
  name: 'App',
  components: {
    Parent,
    UserData,
    FormData,
  },
};
</script>