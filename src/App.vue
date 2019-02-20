<style lang="scss">
  @import 'scss/common.scss';
</style>

<template>
  <div id="app">
    <section class="contacts_section">
      <div class="container">
        <h1>Contacts</h1>
        <div class="row">
          <div class="row_item row_item_1">
            <h2><span>GMS</span> Headquarters</h2>
            <div class="contact_info row">
              <div class="row_item address_column">
                <a class="address_link" href="https://www.google.com/" target="_blank" alt="adress_link">
                  <p>Global Message Services Ukraine LLC</p>
                  <p>Bundesstrasse 5 | 3rd Floor</p>
                  <p>6300 Zug</p>
                  <p>Switzerland</p>
                </a>
                <a href="tel:41415446200" class="phone_link" alt="phone number">+41 41 544 62 00</a>
              </div>
              <div class="row_item">
                <div class="contact_item">
                  <p>Email</p>
                  <a>info@gms-worldwide.com</a>
                </div>
                <div class="contact_item">
                  <p>Send message</p>
                  <a href="tel:41415446200" alt="viber number">Viber us</a>
                </div>
                <div class="contact_item">
                  <p>Send form</p>
                  <a href="tel:41415446200" alt="contact number">Contact us</a>
                </div>
              </div>
            </div>
          </div>
          <div class="row_item row_item_2">
            <h2>Technical support <span>24/7</span></h2>
            <p>GMS understands that it can be hard to follow all new technologies. We regularly provide for all
              our clients educational trainings to make your operator`s business earn more and better though our best practices.</p>
            <a href="tel:41415446200" class="phone_link" alt="phone number">+41 41 544 62 06</a>
          </div>
        </div>
      </div>
    </section>
    <MapSection></MapSection>
    <section class="form_section">
      <div class="container">
        <div class="row">
          <div class="row_item form-wr">
            <Form></Form>
          </div>
          <div class="row-item desciption_block">
            <p>Please tell us more about your request and give us info about your company and country</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MapSection from "./components/mapSection.vue";
import Form from "./components/Form.vue";

export default {
  name: "app",
  components: {
    MapSection,
    Form
  }
};
</script>


