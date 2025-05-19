<template>
  <Datepicker
    :model-value="modelValue"
    @update:model-value="(val) => $emit('update:modelValue', val)"
    :min-date="new Date()"
    :disabled-week-days="[2, 3, 4]"
    :disabled="asap"
    :enable-time-picker="false"
    :auto-apply="true"
    placeholder="Wunschdatum wählen"
    class="rounded-sm w-full"
    required
  />
</template>

<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

defineProps({
  modelValue: {
    type: [String, Date],
    required: true,
  },
  asap: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["update:modelValue"]);
</script>

<style scoped>
/* Verwenden von ::v-deep, um tief in die Komponentenstruktur zu stylen */
::v-deep .vdp-datepicker,
::v-deep .dp__input {
  background-color: #2d2d2d !important; /* Helles Anthrazit für den Hintergrund */
  border: solid 1.5px #3f3f46 !important;
  border-radius: 0.25rem !important; /* Border-Radius angepasst */
  padding: 0.5rem;
  color: white;
  padding-left: 36px;
}

::v-deep .dp__input:focus {
  outline: solid 2.5px oklch(0.705 0.213 47.604) !important;
}

::v-deep .dp__range_end,
::v-deep .dp__range_start,
::v-deep .dp__active_date {
  background-color: #f97316 !important; /* Orange für das Highlight */
}

::v-deep .vdp-datepicker__day--disabled {
  background-color: #facc15 !important; /* Gelb für blockierte Tage */
  color: #4b5563 !important; /* Dunkles Grau für Text auf blockierten Tagen */
  cursor: not-allowed !important;
}

::v-deep .vdp-datepicker__day--disabled:hover {
  background-color: #facc15 !important; /* Gelb bei Hover */
  cursor: not-allowed !important;
}

::v-deep .dp__theme_light {
  background-color: #18181b;
}

::v-deep .dp--year-select,
::v-deep .dp__month_year_select,
::v-deep .dp__calendar_item {
  color: white;
}

::v-deep .dp--year-select:hover,
::v-deep .dp__month_year_select:hover,
::v-deep .dp__button:hover {
  background-color: rgba(240, 248, 255, 0.575);
  color: white;
}

::v-deep .dp__calendar_header {
  color: rgba(255, 255, 255, 0.742);
}

::v-deep .dp__cell_disabled {
  color: #cb67677b;
}

::v-deep .dp__cell_offset {
  color: white;
}

::v-deep .dp__today {
  border: 1px solid rgba(255, 255, 255, 0.42);
}

::v-deep .dp__cell-item:hover {
  background: aqua;
}

::v-deep .dp__date_hover_end:hover,
::v-deep .dp__date_hover_start:hover,
::v-deep .dp__date_hover:hover {
  background: #fb8c3c;
  color: white;
}

::v-deep .dp__overlay {
  background-color: #2d2d2d !important;
  color: white;
}

::v-deep .dp--time-overlay-btn {
  color: white;
}

::v-deep .dp__btn:hover {
  color: white;
  background-color: rgba(240, 248, 255, 0.575);
}

::v-deep .dp__action_cancel {
  color: rgba(255, 255, 255, 0.749);
  border: 1px solid rgba(255, 255, 255, 0.749);
  padding: 24px;
  font-size: 20px;
  margin-right: 16px;
}

::v-deep .dp__action_buttons .dp__action_select {
  background-color: #f97316;
  padding: 24px 32px;
  font-size: 20px;
}

/* Responsive Anpassungen */
@media (max-width: 320px) {
  ::v-deep .dp__calendar_item {
    font-size: 12px; /* Kleinere Schrift für kleine Bildschirme */
  }
}

@media (min-width: 320px) and (max-width: 768px) {
  ::v-deep .dp__input {
    padding-left: 24px; /* Etwas mehr Platz auf mittleren Geräten */
  }
  ::v-deep .dp__calendar_item {
    font-size: 14px; /* Etwas größere Schrift für Tablets */
  }
}

@media (min-width: 768px) {
  ::v-deep .dp__input {
    padding-left: 36px; /* Mehr Padding auf größeren Bildschirmen */
  }
  ::v-deep .dp__calendar_item {
    font-size: 16px; /* Normale Schriftgröße auf größeren Geräten */
  }
}
</style>
