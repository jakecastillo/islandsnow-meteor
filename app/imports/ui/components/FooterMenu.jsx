import React from 'react';
import { Grid, List, Input, Label, Container } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer">
          <Container>
            <Grid>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <List>
                    <List.Item>About us</List.Item>
                    <List.Item>Store locations</List.Item>
                    <List.Item>Employment</List.Item>
                    <List.Item>Videos</List.Item>
                    <List.Item>Shipping & Returns</List.Item>
                    <List.Item>Terms & Conditions</List.Item>
                    <List.Item>Privacy Policy</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <List>
                    <List.Item>Men</List.Item>
                    <List.Item>Women</List.Item>
                    <List.Item>Kids</List.Item>
                    <List.Item>Brands</List.Item>
                    <List.Item>Sale</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <List>
                    <List.Item>Join our mailing list for updates</List.Item>
                    <List.Item>Sign up to receive our email updates!</List.Item>
                    <Input item label="Join!" labelPosition="right" placeholder="Enter email address"/>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    )
  }
}