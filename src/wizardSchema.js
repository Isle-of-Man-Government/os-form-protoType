import componentTypes from "@data-driven-forms/react-form-renderer/dist/cjs/component-types";
import validatorTypes from "@data-driven-forms/react-form-renderer/dist/cjs/validator-types";
import componentMapper from "@data-driven-forms/mui-component-mapper/dist/cjs/component-mapper";
import TextField from "@data-driven-forms/mui-component-mapper/dist/cjs/text-field";
import DatePicker from "@data-driven-forms/mui-component-mapper/dist/cjs/date-picker";
import TextArea from "@data-driven-forms/mui-component-mapper/dist/cjs/textarea";
import Radio from "@data-driven-forms/mui-component-mapper/dist/cjs/radio";

//import MUIDatePicker from "./DatePicker";

export const osComponentMapper = {
  ...componentMapper,
  [componentTypes.TEXT_FIELD]: {
    component: TextField,
    variant: "outlined",
  },
  [componentTypes.TEXT_AREA]: {
    component: TextArea,
    variant: "outlined",
    multiline: true,
  },
  [componentTypes.DATE_PICKER]: {
    component: DatePicker,
    DatePickerProps: {
      variant: "outlined",
      keyboard: true,
      format: "DD/MM/YYYY",
      disableOpenOnEnter: true,
    },
  },
  [componentTypes.RADIO]: {
    component: Radio,
    FormFieldGridProps: {
      md: 12,
      container: true,
    },
    FormControlProps: {
      fullWidth: true,
      style: {
        display: "block",
        paddingLeft: "14px",
      },
      margin: "dense",
    },
    RadioProps: {
      size: "small",
      disableRipple: false,
    },
  },
};

export const wizardSchema = {
  fields: [
    {
      component: "wizard",
      name: "Multi Mera",
      fields: [
        {
          title: "Mera",
          name: "step-1",
          nextStep: "step-2",
          fields: [
            {
              name: "MERA-claim",
              label: "What date do you want to claim MERA from? ",
              component: componentTypes.DATE_PICKER,
              helperText: "you cannot claim before a certian date",
              isRequired: true,
              validate: [
                {
                  type: validatorTypes.REQUIRED,
                },
              ],
            },
            {
              name: "Full Name",
              label: "Full Name",
              component: "text-field",
              helperText: "your full name",
              isRequired: true,
              validate: [
                {
                  type: validatorTypes.REQUIRED,
                },
              ],
            },
            {
              name: "dob",
              label: "Date of Birth",
              component: componentTypes.DATE_PICKER,
              isRequired: true,
              validate: [
                {
                  type: validatorTypes.REQUIRED,
                },
              ],
            },
            {
              name: "NINumber",
              label: "National Insurance Number",
              component: "text-field",
              placeholder: "AB-123456-C",
              helperText: "your NI number in the format AB-123456-C",
              isRequired: true,
              validate: [
                {
                  type: validatorTypes.REQUIRED,
                },
              ],
            },
            {
              name: "Telephone",
              label: "Telephone",
              component: "text-field",
              isRequired: true,
              type: "number",
              helperText: "Please Include your full contact number",
              validate: [
                {
                  type: validatorTypes.PATTERN,
                  pattern: /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/,
                  message: "Please ensure this is a vailid contact number",
                },
                {
                  type: validatorTypes.REQUIRED,
                  message: "a valid contact number is required to proceed",
                },
              ],
            },
            {
              name: "email",
              label: "email",
              component: "text-field",
              type: "email",
              helperText: "your email address",
              isRequired: true,
              validate: [
                {
                  type: validatorTypes.REQUIRED,
                },
              ],
            },
            {
              component: componentTypes.RADIO,
              label: "Isle of Man Resident",
              name: "radio-IOM",
              options: [
                {
                  label: "Yes",
                  value: "true",
                },
                {
                  label: "No",
                  value: "false",
                },
              ],
              isRequired: true,
              validate: [
                {
                  type: validatorTypes.REQUIRED,
                  message: "You must select and option to proceed",
                },
              ],
            },
          ],
        },
        {
          title: "Address",
          name: "step-2",
          nextStep: "step-3",
          fields: [
            {
              name: "Address1",
              label: "Address 1",
              component: "text-field",
              isRequired: true,
              validate: [
                {
                  type: validatorTypes.REQUIRED,
                },
              ],
            },
            { name: "Address2", label: "Address 2", component: "text-field" },
            { name: "Address3", label: "Address 3", component: "text-field" },
            {
              name: "Town",
              label: "Town",
              component: "text-field",
              isRequired: true,
              validate: [
                {
                  type: validatorTypes.REQUIRED,
                },
              ],
            },
            {
              name: "Country",
              label: "Country",
              component: "text-field",
              isRequired: true,
              validate: [
                {
                  type: validatorTypes.REQUIRED,
                },
              ],
            },
            {
              name: "PostCode",
              label: "Post Code",
              component: "text-field",
              isRequired: true,
              validate: [
                {
                  type: validatorTypes.REQUIRED,
                },
              ],
            },
          ],
        },
        {
          title: "Banking Details",
          name: "step-3",
          nextStep: "step-4",
          fields: [
            {
              name: "AccountName",
              label: "Account Name",
              component: "text-field",
              isRequired: true,
              validate: [
                {
                  type: validatorTypes.REQUIRED,
                },
              ],
            },
            {
              name: "AccountNumber",
              label: "Account Number",
              component: "text-field",
              type: "number",
              helperText: "min 8 numbers, max 10",
              validate: [
                {
                  type: validatorTypes.MIN_LENGTH,
                  threshold: 5,
                },
                {
                  type: validatorTypes.MAX_LENGTH,
                  threshold: 10,
                },
              ],
            },
            {
              name: "BankName",
              label: "Bank Name",
              component: "text-field",
              isRequired: true,
              validate: [
                {
                  type: validatorTypes.REQUIRED,
                },
              ],
            },
            {
              name: "SortCode",
              label: "Sort Code",
              component: "text-field",
              isRequired: true,
              helperText: "must be six digits, with or without hyphens",
              validate: [
                {
                  type: validatorTypes.REQUIRED,
                },
                {
                  type: validatorTypes.PATTERN,
                  pattern: /(?!0{2}(-?0{2}){2})(\d{2}(-\d{2}){2})|(\d{6})/,
                  threshold: 6,
                  message: "does not match pattern XXXXXX or XX-XX-XX",
                },
              ],
            },
          ],
        },
        {
          title: "Benefit Details",
          name: "step-4",
          nextStep: "step-5",
          fields: [
            {
              component: componentTypes.RADIO,
              label:
                "Are you or your partner currently claiming any benefits other than Child Benefit?",
              name: "radioChildBenefit",
              options: [
                {
                  label: "Yes",
                  value: "true",
                },
                {
                  label: "No",
                  value: "false",
                },
              ],
            },
            {
              component: componentTypes.RADIO,
              label:
                "If yes, have you or your partner claimed Income Support, Income based Jobseeker’s Allowance, or Employed Person’s Allowance?",
              name: "radio-IncomeSupport",
              options: [
                {
                  label: "Yes",
                  value: "true",
                },
                {
                  label: "No",
                  value: "false",
                },
              ],
              condition: {
                when: "radioChildBenefit",
                is: "true",
              },
            },
            {
              component: componentTypes.RADIO,
              label:
                "If yes, have you claimed Incapacity Benefit or contribution based JSA?",
              name: "radio-Jsa",
              options: [
                {
                  label: "Yes",
                  value: "true",
                },
                {
                  label: "No",
                  value: "false",
                },
              ],
              condition: {
                when: "radio-IncomeSupport",
                is: "true",
              },
            },
            {
              component: componentTypes.TEXT_AREA,
              label: "List Benefits",
              name: "list-benefits",
              description:
                "If you answered yes to any of the above 3 questions, please list the benefits you and/or your partner are receiving and the name each claim is in.",
            },
          ],
        },
        {
          title: "Employment Circumstances",
          name: "step-5",
          nextStep: {
            when: "employment",
            stepMapper: {
              selfEmployed: "step-6",
              employed: "step-7",
            },
          },
          fields: [
            {
              component: componentTypes.RADIO,
              label: "Are you available and capable of work?",
              name: "radio-work",
              options: [
                {
                  label: "Yes",
                  value: "true",
                },
                {
                  label: "No",
                  value: "false",
                },
              ],
              isRequired: true,
              validate: [
                {
                  type: validatorTypes.REQUIRED,
                },
              ],
            },
            {
              component: componentTypes.RADIO,
              label:
                "Have you worked and earned a minimum of £200 per week, on average, in 13 of the last 26 weeks?",
              name: "radio-earning",
              options: [
                {
                  label: "Yes",
                  value: "true",
                },
                {
                  label: "No",
                  value: "false",
                },
              ],
              isRequired: true,
              validate: [
                {
                  type: validatorTypes.REQUIRED,
                },
              ],
            },
            {
              component: "select",
              name: "employment",
              label: "Employment Status prior to 2nd March 2020",
              options: [
                {
                  value: "null",
                  label: "Please Select",
                },
                {
                  value: "employed",
                  label: "Employed",
                },
                {
                  value: "selfEmployed",
                  label: "Self Employed",
                },
              ],
            },
          ],
        },
        {
          title: "Self-Employment",
          name: "step-6",
          nextStep: "step-7",
          fields: [
            {
              component: componentTypes.TEXT_AREA,
              label: "selfEmployementNature",
              name: "Nature of Self Employment",
              helperText: "a breif description of your business operation",
              isRequired: true,
              validate: [
                {
                  type: validatorTypes.REQUIRED,
                },
              ],
            },
            {
              component: componentTypes.RADIO,
              label:
                "Have you actually paid Class 2 National Insurance Contributions for at least 13 out of the past 26 weeks?",
              name: "radioSeNi",
              options: [
                {
                  label: "Yes",
                  value: "true",
                },
                {
                  label: "No",
                  value: "false",
                },
              ],
              isRequired: true,
              validate: [
                {
                  type: validatorTypes.REQUIRED,
                },
              ],
            },
            {
              name: "regBusinessName",
              label: "If applicable, provide your Registered Business Name",
              component: "text-field",
            },
            {
              component: componentTypes.RADIO,
              label:
                "Did you actually register to be self-employed with The Treasury before 2 March 2020?",
              name: "radio-regbeforeDate",
              options: [
                {
                  label: "Yes",
                  value: "true",
                },
                {
                  label: "No",
                  value: "false",
                },
              ],
              isRequired: true,
              validate: [
                {
                  type: validatorTypes.REQUIRED,
                },
              ],
            },
            {
              component: componentTypes.RADIO,
              label:
                "Have you applied for the £3000 Business Support Grant from the Department for Enterprise’s Business Support Scheme?",
              name: "radio-grant",
              options: [
                {
                  label: "Yes",
                  value: "true",
                },
                {
                  label: "No",
                  value: "false",
                },
              ],
              isRequired: true,
              validate: [
                {
                  type: validatorTypes.REQUIRED,
                  message: "you must confirm Yes or No before preceeding",
                },
              ],
            },
            {
              name: "dateLastWorked",
              label: "Date Last Worked",
              component: componentTypes.DATE_PICKER,
              isRequired: true,
              validate: [
                {
                  type: validatorTypes.REQUIRED,
                },
              ],
            },
          ],
        },
        {
          title: "Employment History",
          name: "step-7",
          fields: [
            {
              component: "field-array",
              name: "employmentHistory",
              minItems: 1,
              maxItems: 3,
              label: "Employment History",
              initialValue: [null],
              fields: [
                {
                  name: "empName",
                  label: "Employer Name",
                  description:
                    "(if self-employed, please provide name of business (if applicable) or write ‘self’)",
                  component: "text-field",
                  isRequired: true,
                  validate: [
                    {
                      type: validatorTypes.REQUIRED,
                    },
                  ],
                },
                {
                  name: "pay",
                  label: "Pay",
                  component: "text-field",
                  type: "number",
                  isRequired: true,
                  validate: [
                    {
                      type: validatorTypes.REQUIRED,
                    },
                  ],
                },
                {
                  component: "select",
                  name: "per",
                  label: "Per",
                  isRequired: true,
                  validate: [
                    {
                      type: validatorTypes.REQUIRED,
                    },
                  ],
                  options: [
                    {
                      value: "null",
                      label: "Please Select",
                    },
                    {
                      value: "hour",
                      label: "Hour",
                    },
                    {
                      value: "day",
                      label: "Day",
                    },
                    {
                      value: "week",
                      label: "Week",
                    },
                    {
                      value: "month",
                      label: "Month",
                    },
                    {
                      value: "annum",
                      label: "Annum",
                    },
                  ],
                },
                {
                  name: "furtherPay",
                  label: "Will you receive any further pay?",
                  component: componentTypes.RADIO,
                  options: [
                    {
                      label: "Yes",
                      value: "true",
                    },
                    {
                      label: "No",
                      value: "false",
                    },
                  ],
                },
                {
                  name: "amount",
                  label: "How much will you receive?",
                  component: "text-field",
                  type: "number",
                },
                {
                  name: "periodFrom",
                  label: "Payment Period From",
                  component: componentTypes.DATE_PICKER,
                },
                {
                  name: "periodTo",
                  label: "Payment Period To",
                  component: componentTypes.DATE_PICKER,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default wizardSchema;
