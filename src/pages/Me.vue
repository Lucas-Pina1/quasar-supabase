<template>
  <q-page class="flex flex-center">
    <div v-if="user">
      <p>Hello {{ user.user_metadata.name }}</p>
    </div>
  </q-page>
</template>

<script>
import useAuthUser from '../composables/UserAuthUser'

export default {
  name: 'PageMe'
}
</script>

<script setup>
const { user } = useAuthUser()
</script>
