<template>
  <div
    class="text-white flex flex-col gap-8 w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-50"
  >
    <div class="w-full md:w-10/12 lg:w-8/12 mx-auto flex flex-col gap-6">
      <h1 class="text-center">{{ t.privacy.title }}</h1>
      <h2>{{ t.privacy.sections.overview.title }}</h2>
      <h3>{{ t.privacy.sections.overview.general.title }}</h3>
      <p>
        {{ t.privacy.sections.overview.general.description }}
      </p>
      <h3>{{ t.privacy.sections.overview.dataCollection.title }}</h3>
      <h4>
        {{ t.privacy.sections.overview.dataCollection.responsible.title }}
      </h4>
      <p>
        {{ t.privacy.sections.overview.dataCollection.responsible.description }}
      </p>
      <h4>{{ t.privacy.sections.overview.dataCollection.how.title }}</h4>
      <p>
        {{ t.privacy.sections.overview.dataCollection.how.description }}
      </p>
      <h4>{{ t.privacy.sections.overview.dataCollection.purpose.title }}</h4>
      <p>
        {{ t.privacy.sections.overview.dataCollection.purpose.description }}
      </p>
      <h4>{{ t.privacy.sections.overview.dataCollection.rights.title }}</h4>
      <p>
        {{ t.privacy.sections.overview.dataCollection.rights.description }}
      </p>
      <p>
        {{ t.privacy.sections.overview.dataCollection.rights.contact }}
      </p>
      <h3>{{ t.privacy.sections.overview.analytics.title }}</h3>
      <p>
        {{ t.privacy.sections.overview.analytics.description }}
      </p>
      <p>
        {{ t.privacy.sections.overview.analytics.details }}
      </p>
      <h3 id="kontaktformular">
        {{ t.privacy.sections.overview.contactForm.title }}
      </h3>
      <p>
        {{ t.privacy.sections.overview.contactForm.description }}
      </p>

      <p>{{ t.privacy.sections.overview.contactForm.noSharing }}</p>

      <p>
        {{ t.privacy.sections.overview.contactForm.legalBasis }}
      </p>

      <p>
        {{ t.privacy.sections.overview.contactForm.retention }}
      </p>

      <h3>{{ t.privacy.sections.overview.web3forms.title }}</h3>
      <p>
        {{ t.privacy.sections.overview.web3forms.description }}
      </p>
      <p>
        {{ t.privacy.sections.overview.web3forms.processing }}
      </p>
      <p>
        {{ t.privacy.sections.overview.web3forms.legalBasis }}
      </p>
      <p>
        {{ t.privacy.sections.overview.web3forms.moreInfo }}
        <a
          href="https://web3forms.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t.privacy.sections.overview.web3forms.privacyLink }}
        </a>
      </p>

      <h2>{{ t.privacy.sections.hosting.title }}</h2>
      <p>{{ t.privacy.sections.hosting.description }}</p>
      <h3>{{ t.privacy.sections.hosting.allInkl.title }}</h3>
      <p>
        {{ t.privacy.sections.hosting.allInkl.description }}
        <a
          href="https://all-inkl.com/datenschutzinformationen/"
          target="_blank"
          rel="noopener noreferrer"
          >{{ t.privacy.sections.hosting.allInkl.link }}</a
        >.
      </p>
      <p>
        {{ t.privacy.sections.hosting.allInkl.legalBasis }}
      </p>

      <h4>{{ t.privacy.sections.hosting.allInkl.processing.title }}</h4>
      <p>
        {{ t.privacy.sections.hosting.allInkl.processing.description }}
      </p>
      <h2>{{ t.privacy.sections.general.title }}</h2>
      <h3>{{ t.privacy.sections.general.privacy.title }}</h3>
      <p>
        {{ t.privacy.sections.general.privacy.description }}
      </p>
      <p>
        {{ t.privacy.sections.general.privacy.dataCollection }}
      </p>
      <p>
        {{ t.privacy.sections.general.privacy.security }}
      </p>
      <h3>{{ t.privacy.sections.general.responsible.title }}</h3>
      <p>
        {{ t.privacy.sections.general.responsible.description }}
      </p>
      <p>
        {{ t.privacy.sections.general.responsible.address }}
      </p>

      <p>
        {{ t.privacy.sections.general.responsible.contact }}
      </p>
      <p>
        {{ t.privacy.sections.general.responsible.definition }}
      </p>

      <h3>{{ t.privacy.sections.general.retention.title }}</h3>
      <p>
        {{ t.privacy.sections.general.retention.description }}
      </p>
      <h3>
        {{ t.privacy.sections.general.legalBasis.title }}
      </h3>
      <p>
        {{ t.privacy.sections.general.legalBasis.description }}
      </p>
      <h3>{{ t.privacy.sections.general.recipients.title }}</h3>
      <p>
        {{ t.privacy.sections.general.recipients.description }}
      </p>
      <h3>{{ t.privacy.sections.general.withdrawal.title }}</h3>
      <p>
        {{ t.privacy.sections.general.withdrawal.description }}
      </p>
      <h3>
        {{ t.privacy.sections.general.objection.title }}
      </h3>
      <p>
        {{ t.privacy.sections.general.objection.description }}
      </p>
      <p>
        {{ t.privacy.sections.general.objection.directMarketing }}
      </p>
      <h3>
        {{ t.privacy.sections.general.complaint.title }}
      </h3>
      <p>
        {{ t.privacy.sections.general.complaint.description }}
      </p>
      <h3>{{ t.privacy.sections.general.dataPortability.title }}</h3>
      <p>
        {{ t.privacy.sections.general.dataPortability.description }}
      </p>
      <h3>{{ t.privacy.sections.general.access.title }}</h3>
      <p>
        {{ t.privacy.sections.general.access.description }}
      </p>
      <h3>{{ t.privacy.sections.general.restriction.title }}</h3>
      <p>
        {{ t.privacy.sections.general.restriction.description }}
      </p>
      <ul class="poppins-200">
        <li>
          {{ t.privacy.sections.general.restriction.cases.accuracy }}
        </li>
        <li>
          {{ t.privacy.sections.general.restriction.cases.unlawful }}
        </li>
        <li>
          {{ t.privacy.sections.general.restriction.cases.noLongerNeeded }}
        </li>
        <li>
          {{ t.privacy.sections.general.restriction.cases.objection }}
        </li>
      </ul>
      <p>
        {{ t.privacy.sections.general.restriction.processing }}
      </p>
      <h3>{{ t.privacy.sections.general.ssl.title }}</h3>
      <p>
        {{ t.privacy.sections.general.ssl.description }}
      </p>
      <p>
        {{ t.privacy.sections.general.ssl.encryption }}
      </p>
      <h2>{{ t.privacy.sections.dataCollection.title }}</h2>
      <h3>{{ t.privacy.sections.dataCollection.cookies.title }}</h3>
      <p>
        {{ t.privacy.sections.dataCollection.cookies.description }}
      </p>
      <p>
        {{ t.privacy.sections.dataCollection.cookies.types }}
      </p>
      <p>
        {{ t.privacy.sections.dataCollection.cookies.functions }}
      </p>
      <p>
        {{ t.privacy.sections.dataCollection.cookies.legalBasis }}
      </p>
      <p>
        {{ t.privacy.sections.dataCollection.cookies.settings }}
      </p>
      <p>
        {{ t.privacy.sections.dataCollection.cookies.which }}
      </p>
      <h3>{{ t.privacy.sections.dataCollection.contactForm.title }}</h3>
      <p>
        {{ t.privacy.sections.dataCollection.contactForm.description }}
      </p>
      <p>
        {{ t.privacy.sections.dataCollection.contactForm.legalBasis }}
      </p>
      <p>
        {{ t.privacy.sections.dataCollection.contactForm.retention }}
      </p>
      <h3>{{ t.privacy.sections.dataCollection.email.title }}</h3>
      <p>
        {{ t.privacy.sections.dataCollection.email.description }}
      </p>
      <p>
        {{ t.privacy.sections.dataCollection.email.legalBasis }}
      </p>
      <p>
        {{ t.privacy.sections.dataCollection.email.retention }}
      </p>
      <h2>{{ t.privacy.sections.socialMedia.title }}</h2>
      <h3>{{ t.privacy.sections.socialMedia.instagram.title }}</h3>
      <p>
        {{ t.privacy.sections.socialMedia.instagram.description }}
      </p>
      <p>
        {{ t.privacy.sections.socialMedia.instagram.connection }}
      </p>
      <p>
        {{ t.privacy.sections.socialMedia.instagram.linking }}
      </p>
      <p>
        {{ t.privacy.sections.socialMedia.instagram.legalBasis }}
      </p>
      <p>
        {{ t.privacy.sections.socialMedia.instagram.jointResponsibility }}
      </p>
      <p>
        {{ t.privacy.sections.socialMedia.instagram.dataTransfer }}
      </p>
      <p>
        {{ t.privacy.sections.socialMedia.instagram.moreInfo }}
        <a
          href="https://privacycenter.instagram.com/policy/"
          target="_blank"
          rel="noopener noreferrer"
          >{{ t.privacy.sections.socialMedia.instagram.policyLink }}</a
        >.
      </p>
      <p>
        {{ t.privacy.sections.socialMedia.instagram.source }}
        <a href="https://www.e-recht24.de">{{
          t.privacy.sections.socialMedia.instagram.sourceLink
        }}</a>
      </p>

      <h3 id="instagram-plugin">
        {{ t.privacy.sections.socialMedia.instagramPlugin.title }}
      </h3>
      <p>
        {{ t.privacy.sections.socialMedia.instagramPlugin.description }}
      </p>

      <p>
        {{ t.privacy.sections.socialMedia.instagramPlugin.linking }}
      </p>

      <p>
        {{ t.privacy.sections.socialMedia.instagramPlugin.legalBasis }}
      </p>

      <p>
        {{ t.privacy.sections.socialMedia.instagramPlugin.jointResponsibility }}
      </p>

      <h3 id="whatsapp-kontakt">
        {{ t.privacy.sections.socialMedia.whatsapp.title }}
      </h3>
      <p>
        {{ t.privacy.sections.socialMedia.whatsapp.description }}
      </p>

      <p>
        {{ t.privacy.sections.socialMedia.whatsapp.usage }}
      </p>

      <p>
        {{ t.privacy.sections.socialMedia.whatsapp.legalBasis }}
      </p>

      <p>
        {{ t.privacy.sections.socialMedia.whatsapp.dataProcessing }}
      </p>

      <p>
        <strong
          >{{ t.privacy.sections.socialMedia.whatsapp.note.title }}:</strong
        >
        {{ t.privacy.sections.socialMedia.whatsapp.note.description }}
      </p>

      <h3 id="cookie-banner">
        {{ t.privacy.sections.socialMedia.consent.title }}
      </h3>
      <p>
        {{ t.privacy.sections.socialMedia.consent.description }}
      </p>

      <p>
        {{ t.privacy.sections.socialMedia.consent.legalBasis }}
      </p>
    </div>
  </div>
</template>

<script setup>
import "assets/css/main.scss";
import { useI18n } from "~/composables/useI18n";

const { t } = useI18n();
</script>

<style></style>
