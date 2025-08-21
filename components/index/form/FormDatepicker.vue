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
:deep(.vdp-datepicker),
:deep(.dp__input) {
  background-color: #2d2d2d !important; /* Helles Anthrazit für den Hintergrund */
  border: solid 1.5px #3f3f46 !important;
  border-radius: 0.25rem !important; /* Border-Radius angepasst */
  padding: 0.5rem;
  color: white;
  padding-left: 36px;
}

:deep(.dp__input:focus) {
  outline: solid 2.5px oklch(0.705 0.213 47.604) !important;
}

:deep(.dp__range_end),
:deep(.dp__range_start),
:deep(.dp__active_date) {
  background-color: #f97316 !important; /* Orange für das Highlight */
}

:deep(.vdp-datepicker__day--disabled) {
  background-color: #facc15 !important; /* Gelb für blockierte Tage */
  color: #4b5563 !important; /* Dunkles Grau für Text auf blockierten Tagen */
  cursor: not-allowed !important;
}

:deep(.vdp-datepicker__day--disabled:hover) {
  background-color: #facc15 !important; /* Gelb bei Hover */
  cursor: not-allowed !important;
}

:deep(.dp__theme_light) {
  background-color: #18181b;
}

:deep(.dp--year-select),
:deep(.dp__month_year_select),
:deep(.dp__calendar_item) {
  color: white;
}

:deep(.dp--year-select:hover),
:deep(.dp__month_year_select:hover),
:deep(.dp__button:hover) {
  background-color: rgba(240, 248, 255, 0.575);
  color: white;
}

:deep(.dp__calendar_header) {
  color: rgba(255, 255, 255, 0.742);
}

:deep(.dp__cell_disabled) {
  color: #cb67677b;
}

:deep(.dp__cell_offset) {
  color: white;
}

:deep(.dp__today) {
  border: 1px solid rgba(255, 255, 255, 0.42);
}

:deep(.dp__cell-item:hover) {
  background: aqua;
}

:deep(.dp__date_hover_end:hover),
:deep(.dp__date_hover_start:hover),
:deep(.dp__date_hover:hover) {
  background: #fb8c3c;
  color: white;
}

:deep(.dp__overlay) {
  background-color: #2d2d2d !important;
  color: white;
}

:deep(.dp--time-overlay-btn) {
  color: white;
}

:deep(.dp__btn:hover) {
  color: white;
  background-color: rgba(240, 248, 255, 0.575);
}

:deep(.dp__action_cancel) {
  color: rgba(255, 255, 255, 0.749);
  border: 1px solid rgba(255, 255, 255, 0.749);
  padding: 24px;
  font-size: 20px;
  margin-right: 16px;
}

:deep(.dp__action_buttons .dp__action_select) {
  background-color: #f97316;
  padding: 24px 32px;
  font-size: 20px;
}

:deep(.dp__input::placeholder) {
  color: rgba(255, 255, 255, 0.5); /* z. B. leicht transparent weiß */
  /* Achtung: margin funktioniert NICHT hier, nur padding */
  padding-left: 10px; /* Funktioniert nur teilweise, besser im Eltern-Input regeln */
}

/* Responsive Anpassungen */
@media (max-width: 320px) {
  :deep(.dp__calendar_item) {
    font-size: 12px; /* Kleinere Schrift für kleine Bildschirme */
  }
}

@media (min-width: 320px) and (max-width: 768px) {
  :deep(.dp__input) {
    padding-left: 24px; /* Etwas mehr Platz auf mittleren Geräten */
  }
  :deep(.dp__calendar_item) {
    font-size: 14px; /* Etwas größere Schrift für Tablets */
  }
}

@media (min-width: 768px) {
  :deep(.dp__input) {
    padding-left: 36px; /* Mehr Padding auf größeren Bildschirmen */
  }
  :deep(.dp__calendar_item) {
    font-size: 16px; /* Normale Schriftgröße auf größeren Geräten */
  }
}
</style>
