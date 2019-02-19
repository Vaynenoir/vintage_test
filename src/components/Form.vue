<template>
    <div>
        <h2>Contact Us</h2>
        <form action="">
            <div class="input-wr" :class="[{active: name.length > 0, error_field: validName !==null && !validName}]" >
                <label for="Name">Name</label>
                <input type="text" name="Name" v-model="name">
                <div class="error" v-if="validName !==null && !validName">
                    {{validationErrors.name}}
                </div>
            </div>
            <div class="input-wr" :class="[{active: phone.length > 0, error_field:  validPhone !== null && !validPhone}]">
                <label for="Phone">Phone</label>
                <input type="text" name="Phone"  v-model="phone">
                <div class="error" v-if="validPhone !== null && !validPhone">
                    {{validationErrors.phone}}
                </div>
            </div>
            <div class="input-wr" :class="[{active: email.length > 0}, {error_field: validEmail !== null && !validEmail}]">
                <label for="Email">Email</label>
                <input type="email" name="Email" v-model="email">
                <div class="error" v-if="validEmail !== null && !validEmail">
                    {{validationErrors.email}}
                </div>
            </div>
            <div class="input-wr checkbox-wr">
                <input type="checkbox" name="checkbox" v-model="userAgree">
                <label class="checkbox-label" for="checkbox">I agree the processing of personal data</label>
            </div>
            <button type="submit" @click.stop.prevent="submit">Get in touch</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Form",
        data () {
            return {
                focused: false,
                name: "",
                validName: null,
                phone: "",
                validPhone: null,
                email : "",
                validEmail : null,
                submitted : false,
                userAgree: false,
                validationErrors: {
                    email: 'email is not correct',
                    phone: 'phone is not correct',
                    name: 'name field should contain more than 1 symbol',
                }
            }
        },
        methods: {
            validateForm : function(){
                if(this.validateFields()){
                    this.valid = true;
                }
            },
            validateFields () {
                this.validEmail = !!this.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                this.validName = this.name.length > 0;
                this.validPhone = !!this.phone.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/i);
                return this.validEmail && this.validName && this.validPhone && this.userAgree;
            },
            submit : function(){
                this.validateForm();
                if(this.valid){
                    let self = this;

                    axios.post('http://httpbin.org/post', {
                        name: self.name,
                        email: self.email,
                        phone: self.phone,
                        isAgree: self.userAgree
                    }).then(function (response) {
                        this.submitted = true;
                    }).catch(function (error) {
                        console.log(error);
                    })

                }
            }
        }
    }
</script>

<style scoped>

</style>