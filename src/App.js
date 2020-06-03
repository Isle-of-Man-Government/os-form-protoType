import React from "react";
import styled from "styled-components";
import { Container, Card, CardContent, Grid } from "@material-ui/core";
import FormRenderer from "@data-driven-forms/react-form-renderer/dist/cjs/form-renderer";
import MuiFormTemplate from "@data-driven-forms/mui-component-mapper/dist/cjs/form-template";
import wizardSchema, { osComponentMapper } from "./wizardSchema";
import Layout, {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarContent,
  getContent,
  getFooter,
} from "@mui-treasury/layout";

import {
  HeaderMockUp,
  NavHeaderMockUp,
  NavContentMockUp,
  FooterMockUp,
} from "@mui-treasury/mockup/layout";

import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);

const SidebarContent = getSidebarContent(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);
const helper = Layout();

helper.configureHeader((builder) => {
  builder.registerConfig("xs", { position: "sticky" });
});

helper.configureEdgeSidebar((builder) => {
  builder
    .create("sidebarId", { anchor: "left" })
    .registerTemporaryConfig("xs", {
      anchor: "left",
      width: "auto",
    })
    .registerPermanentConfig("md", {
      width: 256, // px, (%, rem, em is compatible)
      collapsible: true,
      collapsedWidth: 64,
    });
});

const FormTemplate = (props) => {
  return <MuiFormTemplate {...props} showFormControls={false} Title="Balls" />;
};

const App = () => {
  return (
    <Root scheme={helper}>
      <CssBaseline />
      <Header>
        <Toolbar>
          <HeaderMockUp />
        </Toolbar>
      </Header>
      <DrawerSidebar sidebarId={"sidebarId"}>
        <SidebarContent>
          <NavHeaderMockUp collapsed />
          <NavContentMockUp />
        </SidebarContent>
      </DrawerSidebar>
      <Content>
        <Container maxWidth="sm">
          <Grid container alignItems="flex-start">
            <Grid item>
              <Card>
                <CardContent>
                  <FormRenderer
                    componentMapper={osComponentMapper}
                    FormTemplate={FormTemplate}
                    schema={wizardSchema}
                    onSubmit={console.log("80085")}
                    onCancel={() => console.log("Cancel action")}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Content>
      <Footer>
        <FooterMockUp />
      </Footer>
    </Root>
  );
};

export default App;
