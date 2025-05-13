<template>
  <v-card rounded="lg" class="mb-4" id="about-sosconf">
    <v-card-text>
      <v-container class="mt-8">
        <div class="text-h3 mb-4">
          SOSCONF.ZH 2020
        </div>
        <h3 class="v-heading text-h5 mb-2">
          {{ $t("components.home.about.title") }}
        </h3>
        <p v-for="p in $t('components.home.about.pre1')" :key="p">
          {{ p }}
        </p>
        <h3 class="v-heading text-h5 mb-2">年会展望</h3>
        <p v-for="p in $t('components.home.about.pre2')" :key="p">
          {{ p }}
        </p>
        <h3 class="v-heading text-h5 mb-2">如何参与</h3>
        <p>
          2020中文学生开源年会的报名渠道已经开放。
        </p>
        <p>
          若您希望站上年会讲台，与大家一同分享想法、观点或项目，请移步至“讲者报名”，每位学生讲者都将获得一定比例的餐旅费用补贴；
        </p>
        <p>
          我们欢迎各大高校社区与我们一同合作，打造具有本社区特色的分会场，若您希望报名或进一步了解合作社区事宜，请移步至“合作社区/分会场报名”；
        </p>
      </v-container>
    </v-card-text>
    <v-card-text>
      <v-container>
        <h3 class="v-heading text-h5 mb-2">
          {{ $t("components.home.about.information") }}
        </h3>
        <v-row class="mb-4">
          <v-spacer />
          <v-col cols="12" md="8" lg="6">
            <v-row
              v-for="l in $t('components.home.about.info_list')"
              :key="l.title"
            >
              <v-col cols="12" md="6"
                ><v-icon class="mr-4">mdi-{{ l.icon }}</v-icon
                >{{ l.title }}</v-col
              >
              <v-col>{{ l.desc }}</v-col>
            </v-row>
          </v-col>
          <v-spacer />
        </v-row>
        <v-divider />
        <Map />
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import Map from "./Map";

export default {
  components: {
    Map
  }
};
</script>
