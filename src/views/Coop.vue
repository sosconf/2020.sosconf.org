<template>
  <section class="coop d-flex align-center">
    <v-container class="mt-6 mt-md-12">
      <v-card>
        <v-container>
          <v-card-text>
            <h3 class="v-heading text-h4 mb-2">联系赞助</h3>
            <p>
              {{ $t("views.coop.desc1") }}
            </p>
            <p>
              {{ $t("views.coop.desc2") }}
            </p>
            <ul>
              <li v-for="p in $t('views.coop.items')" :key="p">{{ p }}</li>
            </ul>
          </v-card-text>
          <v-card-actions>
            <v-btn
              x-large
              rounded
              color="primary"
              class="px-8"
              href="https://gitlab.com/sosconf_zh/sosconf2020-doc/-/raw/master/SOSCONF.zh-2020-Sponsor-v2.pdf"
              ><v-icon class="pr-4">mdi-link</v-icon>赞助策划</v-btn
            ></v-card-actions
          >
        </v-container>
      </v-card>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Coop"
};
</script>
