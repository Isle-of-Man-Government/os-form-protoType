import React from "react";
import useFormApi from "@data-driven-forms/react-form-renderer/dist/cjs/use-form-api";
import FormSpy from "@data-driven-forms/react-form-renderer/dist/cjs/form-spy";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const MeraTemplate = ({ formFields }) => {
  const { handleSubmit, onReset, onCancel, getState } = useFormApi();
  const { submitting, pristine } = getState();
  return (
    <form onSubmit={handleSubmit}>
      <Grid container>{formFields}</Grid>
      <Grid container justify="flex-end" spacing={4}>
        <Grid item>
          <FormSpy>
            {() => (
              <>
                <Button
                  disabled={pristine}
                  style={{ marginRight: 8 }}
                  onClick={onReset}
                  variant="text"
                >
                  Reset
                </Button>
                <Button
                  variant="text"
                  onClick={onCancel}
                  style={{ marginRight: 8 }}
                >
                  Cancel
                </Button>
                <Button
                  disabled={submitting}
                  type="submit"
                  color="primary"
                  variant="contained"
                >
                  Submit
                </Button>
              </>
            )}
          </FormSpy>
        </Grid>
      </Grid>
    </form>
  );
};

export default MeraTemplate;
