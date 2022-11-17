<template>
  <q-page padding>
    <p class="text-body-1">Thanks for registering</p>
    <p class="text-body-1">
      Please confirme your email to finishing registering:
      <strong>{{ $route.query.email }}</strong>
    </p>
  </q-page>
</template>

<script>
export default {
  name: 'PageEmailConfirmation'
}
</script>
