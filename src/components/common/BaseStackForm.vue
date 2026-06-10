<script setup>
import BaseButton from "./BaseButton.vue";
import BaseFormSection from "./BaseFormSection.vue";
import BaseSelect from "./BaseSelect.vue";
import { businessContextFields, coreSystemFields, constraintFields, criticalConstraintFields } from "@/services/architectureFormData.service"
const emit = defineEmits(['submit']);

const handleSubmit = () => {
  emit('submit');
};

// const businessContextFields = [
//   {
//     key: 'companySize',
//     label: 'Company Size',
//     placeholder: 'Select company size',
//     options: [
//       { label: 'Startup', value: 'startup' },
//       { label: 'Mid-cap', value: 'mid-cap' },
//       { label: 'Enterprise', value: 'enterprise' }
//     ]
//   },

//   {
//     key: 'functionFocus',
//     label: 'Function Focus',
//     placeholder: 'Select focus',
//     options: [
//       { label: 'Finance', value: 'finance' },
//       { label: 'HR', value: 'hr' },
//       { label: 'Marketing', value: 'marketing' }
//     ]
//   }
// ]

</script>
<template>
  <div class="stack-form-wrap">
    <div class="form-hdn-btn">
      <BaseButton variant="plain">
        Clear all
      </BaseButton>
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="form-row">
        <BaseFormSection title="Business Context" subtitle="Defines scale and complexity of your target architecture">
          <BaseSelect v-for="data in businessContextFields" :key="data.key" :label="data.label"
            :placeholder="data.placeholder" :options="data.options" :name="data.key" v-model="data.value" />
        </BaseFormSection>
        <BaseFormSection title="Existing core system" subtitle="Select a core system you want to build around."
          variant="one">
          <BaseSelect v-for="data in coreSystemFields" :key="data.key" :label="data.label"
            :placeholder="data.placeholder" :options="data.options" :name="data.key" v-model="data.value" />
        </BaseFormSection>

        <BaseFormSection title="Constraints" subtitle="Shapes trade-offs between speed, cost, and robustness"
          variant="three">
          <BaseSelect v-for="data in constraintFields" :key="data.key" :label="data.label"
            :placeholder="data.placeholder" :options="data.options" :name="data.key" v-model="data.value"
            :helper-text="data.helperText" />
        </BaseFormSection>

        <BaseFormSection title="Critical Constraints" subtitle="These shape governance, deployment, and capability fit."
          variant="three">
          <BaseSelect v-for="data in criticalConstraintFields" :key="data.key" :label="data.label"
            :placeholder="data.placeholder" :options="data.options" :name="data.key" v-model="data.value"
            :helper-text="data.helperText" />
        </BaseFormSection>
      </div>
      <div class="frm-ftr">
        <div class="left-prt">
          <p>Impact of your choices: <span>Open-source tools prioritised</span></p>
        </div>
        <div class="rght-prt">
          <BaseButton variant="primary">
            <span name=#icon-left>

              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 9.00044C18 8.66869 16.9115 8.3643 16.6113 8.21342C15.843 7.82697 15.0202 7.47141 14.0982 7.12554C12.574 6.54852 11.4635 5.43505 10.8864 3.90954C10.5407 2.984 10.1851 2.15993 9.80004 1.39056C9.64905 1.09058 9.33815 0 8.99955 0C8.66095 0 8.34826 1.09058 8.19907 1.39144C7.81491 2.15817 7.46023 2.98224 7.11448 3.90601C6.53735 5.43417 5.42596 6.54763 3.9045 7.12378C2.97715 7.47229 2.15344 7.82786 1.3878 8.21342C1.08851 8.36342 0 8.66781 0 8.99956C0 9.33131 1.08851 9.6357 1.38869 9.78657C2.1588 10.173 2.98162 10.5295 3.90182 10.8736C5.42596 11.4506 6.53645 12.5641 7.11359 14.0905C7.46112 15.0195 7.8158 15.8418 8.19907 16.6086C8.35005 16.9094 8.66006 18 8.99955 18C9.33904 18 9.64995 16.9094 9.80004 16.6086C10.1851 15.8418 10.5398 15.0178 10.8846 14.0931C11.4627 12.565 12.5749 11.4515 14.0946 10.8753C15.0184 10.5295 15.8412 10.1739 16.6113 9.78746C16.9115 9.63658 18 9.33307 18 9.00044Z"
                  fill="white" />
              </svg>

            </span>
            Generate My AI Architecture
          </BaseButton>
          <p>Takes ~5 seconds. No signup required.</p>
        </div>
      </div>

    </form>

  </div>
</template>
