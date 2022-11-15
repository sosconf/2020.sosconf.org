<template>
  <v-list>
    <v-subheader>上午</v-subheader>
    <ProgressScheduleItem :event_list="$t('data.schedule').morning" />
    <v-subheader>下午</v-subheader>

    <ProgressScheduleItem :event_list="$t('data.schedule').afternoon" />
  </v-list>
</template>

<script>
import ProgressScheduleItem from "./ProgressScheduleItem.vue";

export default {
  components: {
    ProgressScheduleItem
  }
};
</script>

<style></style>
