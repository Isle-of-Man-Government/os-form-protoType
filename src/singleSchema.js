import componentTypes from "@data-driven-forms/react-form-renderer/dist/cjs/component-types";
import validatorTypes from "@data-driven-forms/react-form-renderer/dist/cjs/validator-types";
import TextField from "@data-driven-forms/mui-component-mapper/dist/cjs/text-field";
import Radio from "@data-driven-forms/mui-component-mapper/dist/cjs/radio";
import { componentMapper } from "@data-driven-forms/mui-component-mapper";
import MUIDatePicker from "./DatePicker";

export const osComponentMapper = {
  ...componentMapper,
  [componentTypes.TEXT_FIELD]: {
    component: TextField,
    variant: "outlined",
    style: { marginBottom: 1 + "rem" },
  },
  [componentTypes.DATE_PICKER]: {
    component: MUIDatePicker,
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

const singleSchema = {
  fields: [
    {
      name: "MERA-claim",
      label: "What date do you want to claim MERA from? ",
      component: componentTypes.DATE_PICKER,
      helperText: "you cannot claim before ddfh",
    },
    {
      name: "Full Name",
      label: "Full Name",
      component: "text-field",
      isRequired: true,
      validate: [
        {
          type: validatorTypes.REQUIRED,
        },
      ],
      helperText: "your full name",
    },
    {
      name: "dob",
      label: "Date of Birth",
      component: componentTypes.DATE_PICKER,
    },
    {
      name: "NINumber",
      label: "National Insurance Number",
      component: "text-field",
      isRequired: true,
      validate: [
        {
          type: validatorTypes.REQUIRED,
        },
      ],
      placeholder: "AB-123456-C",
      helperText: "your NI number in the format AB-123456-C",
    },
    {
      name: "Telephone",
      label: "Telephone",
      component: "text-field",
      isRequired: true,
      type: "number",
      validate: [
        {
          type: validatorTypes.REQUIRED,
        },
      ],
    },
    {
      name: "email",
      label: "email",
      component: "text-field",
      isRequired: true,
      type: "email",
      validate: [
        {
          type: validatorTypes.REQUIRED,
        },
      ],
      helperText: "your email address",
    },
    {
      component: componentTypes.RADIO,
      label: "Isle of Man Resident",
      name: "radio",
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
  ],
};

export default singleSchema;
