<template>
  <div>
    <v-card-title>
      <div class="v-heading text-h5 mb-2">
        筹备委员会
        <div class="text-h6 font-weight-light">Preparatory Committee</div>
      </div>
    </v-card-title>
    <v-card-text>
      <div class="v-heading text-h6 mb-2">
        {{ $t("components.about.staff.volunteers") }}
      </div>

      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-text class="text-center">
              <div class="v-heading text-h5 mb-2">
                <v-icon>mdi-emoticon-happy-outline</v-icon>最衷心的感谢
              </div>
              <p>2020中文学生开源年会的成功举办与你们的志愿服务息息相关！</p>
            </v-card-text>
          </v-card></v-col
        >
      </v-row>
    </v-card-text>
    <v-card-text>
      <StaffListView :staff="$t('data.staff').special" />
    </v-card-text>
    <v-card-text>
      <div class="v-heading text-h6 mb-2">
        {{ $t("components.about.staff.media") }}
      </div>
      <StaffListView :staff="$t('data.staff').media" />
    </v-card-text>
    <v-card-text>
      <div class="v-heading text-h6 mb-2">
        {{ $t("components.about.staff.technical") }}
      </div>
      <StaffListView :staff="$t('data.staff').tech" />
    </v-card-text>
    <v-card-text>
      <div class="v-heading text-h6 mb-2">
        {{ $t("components.about.staff.sponsor") }}
      </div>
      <StaffListView :staff="$t('data.staff').sponsor" />
    </v-card-text>
    <v-card-text>
      <div class="v-heading text-h6 mb-2">
        {{ $t("components.about.staff.site") }}
      </div>
      <StaffListView :staff="$t('data.staff').site" />
    </v-card-text>
    <v-card-text>
      <div class="v-heading text-h6 mb-2">
        {{ $t("components.about.staff.graphic") }}
      </div>
      <StaffListView :staff="$t('data.staff').graphic" />
    </v-card-text>
    <v-card-text>
      <div class="v-heading text-h6 mb-2">
        {{ $t("components.about.staff.effect") }}
      </div>
      <StaffListView :staff="$t('data.staff').video" />
    </v-card-text>
  </div>
</template>

<script>
import StaffListView from "@/components/About/StaffListView.vue";
export default {
  components: { StaffListView }
};
</script>
