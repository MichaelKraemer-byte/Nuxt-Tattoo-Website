<template>
  <div class="max-w-3xl mx-auto px-6 py-12 text-center py-40">
    <h1 class="text-3xl poppins-600 mb-8 text-white cinzel-500">
      {{ t.imprint.title }}
    </h1>

    <div
      class="text-left space-y-6 text-sm leading-relaxed text-gray-800 dark:text-gray-200"
    >
      <div>
        <p class="poppins-600 text-xl">{{ t.imprint.legalInfo.title }}</p>
        <p class="poppins-200">
          {{ t.imprint.legalInfo.company }}<br />
          {{ t.imprint.legalInfo.name }}<br />
          {{ t.imprint.legalInfo.street }}<br />
          {{ t.imprint.legalInfo.city }}<br />
          {{ t.imprint.legalInfo.country }}
        </p>
      </div>

      <div>
        <p class="poppins-600">{{ t.imprint.contact.title }}</p>
        <p class="poppins-200">
          {{ t.imprint.contact.phone }}: {{ t.imprint.contact.phoneNumber
          }}<br />
          {{ t.imprint.contact.email }}: {{ t.imprint.contact.emailAddress }}
        </p>
      </div>

      <div>
        <p class="poppins-600 text-xl">
          {{ t.imprint.responsible.title }}
        </p>
        <p class="poppins-200">
          {{ t.imprint.responsible.name }}<br />
          {{ t.imprint.responsible.street }}<br />
          {{ t.imprint.responsible.city }}
        </p>
      </div>

      <div>
        <p class="poppins-600 text-xl">
          {{ t.imprint.liability.content.title }}
        </p>
        <p class="poppins-200">
          {{ t.imprint.liability.content.description }}
        </p>
      </div>

      <div>
        <p class="poppins-600 text-xl">{{ t.imprint.liability.links.title }}</p>
        <p class="poppins-200">
          {{ t.imprint.liability.links.description }}
        </p>
      </div>

      <div>
        <p class="poppins-600 text-xl">{{ t.imprint.copyright.title }}</p>
        <p class="poppins-200">
          {{ t.imprint.copyright.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "~/composables/useI18n";

const { t } = useI18n();
</script>
