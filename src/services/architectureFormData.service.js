

export const businessContextFields = [
  {
    key: 'companySize',
    label: 'Company Size',
    placeholder: 'Select company size',
    options: [
      { label: 'Startup', value: 'startup' },
      { label: 'Mid-cap', value: 'mid-cap' },
      { label: 'Enterprise', value: 'enterprise' }
    ]
  },

  {
    key: 'functionFocus',
    label: 'Function Focus',
    placeholder: 'Select focus',
    options: [
      { label: 'Finance', value: 'finance' },
      { label: 'HR', value: 'hr' },
      { label: 'Marketing', value: 'marketing' }
    ]
  }
]

export const coreSystemFields = [
  {
    key: 'coreSystem',
    label: 'Existing core system',
    subtitle: 'Select a core system you want to build around.',
    placeholder: 'Select core system',
    options: [
      {
        label: 'NetSuite',
        value: 'netsuite'
      },
      {
        label: 'SAP',
        value: 'sap'
      },
      {
        label: 'Oracle',
        value: 'oracle'
      },
      {
        label: 'Microsoft Dynamics',
        value: 'microsoft-dynamics'
      },
      {
        label: 'Salesforce',
        value: 'salesforce'
      }
    ]
  }
]

/* =========================
   CONSTRAINTS
========================= */

export const constraintFields = [
  {
    key: 'budget',
    label: 'Budget',
    placeholder: 'Select budget',
    helperText:
      'We balance speed, cost, and scalability based on your inputs.',
    options: [
      {
        label: 'Startup',
        value: 'startup'
      },
      {
        label: 'Mid-cap',
        value: 'mid-cap'
      },
      {
        label: 'Enterprise',
        value: 'enterprise'
      }
    ]
  },

  {
    key: 'integrationComplexity',
    label: 'Integration complexity tolerance',
    placeholder: 'Select complexity',
    options: [
      {
        label: 'Low',
        value: 'low'
      },
      {
        label: 'Medium',
        value: 'medium'
      },
      {
        label: 'High',
        value: 'high'
      }
    ]
  },

  {
    key: 'timeToDeploy',
    label: 'Time to deploy',
    placeholder: 'Select deployment time',
    options: [
      {
        label: 'Fast',
        value: 'fast'
      },
      {
        label: 'Moderate',
        value: 'moderate'
      },
      {
        label: 'Flexible',
        value: 'flexible'
      }
    ]
  }
]


/* =========================
   CRITICAL CONSTRAINTS
========================= */

export const criticalConstraintFields = [
  {
    key: 'dataCompliance',
    label: 'Data sensitivity / compliance',
    placeholder: 'Select compliance',
    helperText: 'GDPR, financial data, PII exposure',
    options: [
      {
        label: 'Low',
        value: 'low'
      },
      {
        label: 'Moderate',
        value: 'moderate'
      },
      {
        label: 'High',
        value: 'high'
      }
    ]
  },

  {
    key: 'aiCapability',
    label: 'Internal AI capability',
    placeholder: 'Select capability',
    helperText:
      'Low: no AI team · Medium: 1-2 engineers · High: dedicated team',
    options: [
      {
        label: 'Low',
        value: 'low'
      },
      {
        label: 'Medium',
        value: 'medium'
      },
      {
        label: 'High',
        value: 'high'
      }
    ]
  },

  {
    key: 'cloudPreference',
    label: 'Cloud preference (optional)',
    placeholder: 'Select preference',
    options: [
      {
        label: 'No preference',
        value: 'no-preference'
      },
      {
        label: 'AWS',
        value: 'aws'
      },
      {
        label: 'Azure',
        value: 'azure'
      },
      {
        label: 'Google Cloud',
        value: 'gcp'
      },
      {
        label: 'On-premise',
        value: 'on-premise'
      }
    ]
  }
]

