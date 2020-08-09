<template>
<div class="col-lg-6 rounded px-5 py-5 shadow bg-white text-left">
    <form id="signup-form" v-on:submit.prevent="submit">
        <div class="row">
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Name<span class="text-danger">*</span></label>
                <input id="name" type="text" v-model.trim="$v.name.$model" :class="{'is-invalid': validationStatus($v.name)}" class="form-control form-control-lg">
                <div v-if="!$v.name.required" class="invalid-feedback">Field required.</div>
                <div v-if="!$v.name.maxLength" class="invalid-feedback">Max character length is 50.</div>
            </div>
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Type <span class="text-danger">*</span></label>
                <select  v-model.trim="$v.type.$model" class="form-control form-control-lg">
                    <option value="Car">Car</option>
                    <option value="Van">Van</option>
                    <option value="Truck">Truck</option>
                    <option value="Container">Container</option>
                    <option value="Trailer">Trailer</option>
                    <option value="Dupmer">Dupmer</option>
                </select>
            </div>
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Model</label>
                <ejs-autocomplete v-model.trim="$v.car_model.$model" id="font-s" :dataSource='dataitem' :fields='field' class="form-control form-control-lg"></ejs-autocomplete>
            </div>
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Licence plate number <span class="text-danger">*</span></label>
                <input type="text" v-model.trim="$v.licence.$model" :class="{'is-invalid': validationStatus($v.licence)}"  class="form-control form-control-lg">
                <div v-if="!$v.licence.required" class="invalid-feedback">Field required.</div>
                <div v-if="!$v.licence.plateCheck" class="invalid-feedback">Invalid plate number.</div>
            </div>
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Last registration date <span class="text-danger">*</span></label>
                <input type="date" id="last_reg" v-model.trim="$v.last_reg.$model" :class="{'is-invalid': validationStatus($v.last_reg)}" class="form-control form-control-lg">
                <div v-if="!$v.licence.required" class="invalid-feedback">Field required.</div>
                <div v-if="!$v.licence.testDate" class="invalid-feedback">Last registration date cannot be after than today.</div>
            </div>
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Date of registration submission <span class="text-danger">*</span></label>
                <input type="date" v-model.trim="date_reg" :class="{'is-invalid': validationStatus($v.date_reg)}" class="form-control form-control-lg">
                <div v-if="!$v.licence.required" class="invalid-feedback">Field required.</div>
                <div v-if="!$v.licence.testDate" class="invalid-feedback">Date of registration submission cannot be before late registration date. </div>
            </div>
            <div class="col-12 form-group text-center">
                <button class="btn btn-vue btn-lg col-4">Submit</button>
            </div>
        </div>
    </form>
</div>
</template>
<script>
import Vue from 'vue';
import {required, maxLength} from 'vuelidate/lib/validators'
import {AutoCompletePlugin} from '@syncfusion/ej2-vue-dropdowns'
Vue.use(AutoCompletePlugin)
export default {
    name: 'Form',
    data: function() {
        return {
            dataitem: [
                {Name: "Audi"},
                {Name: "BMW"},
                {Name: "Citroen"},
                {Name: "Honda"},
                {Name: "Mercedes"},
                {Name: "Nissan"},
                {Name: "Opel"},
                {Name: "Suzuki"},
                {Name: "Toyota"},
                {Name: "Volkswagen"},
            ],
            field: {value: "Name"},
            car_model: this.$route.params.id == null ? '' : this.$parent.vehicles[this.$route.params.id].model,
            name: this.$route.params.id == null ? '' : this.$parent.vehicles[this.$route.params.id].vehicleName,
            type: this.$route.params.id == null ? '' : this.$parent.vehicles[this.$route.params.id].vehicleType,
            licence: this.$route.params.id == null ? '' : this.$parent.vehicles[this.$route.params.id].plateNumber,
            last_reg: '',
            date_reg: ''
        }
    },
    validations: {
        name: {required, maxLength: maxLength(50)},
        type: {},
        car_model: {},
        licence: {required, plateCheck:(plate) => {
            return /^[A-Za-z]{2}-\d{4}-[A-Za-z]{2}$/.test(plate)
        }},
        last_reg: {required, testDate:(date) => {
            if(date < new Date().toISOString().substring(0,10))
                return true;
            else
                return false;
        }},
        date_reg: {required, testDate:(date) => {
            if(date > document.getElementById("last_reg").value)
                return true;
            else
                return false;
        }}
    },
    methods: {

        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },

        submit: function() {
            this.$v.$touch();
            if(this.$v.$pendding || this.$v.$error) return;
  
            alert(document.getElementById("name").value+ " successfully saved"); 
        }
    }
}
</script>
<style>
.btn-vue{
    background: #53B985;
    color: #ffffff;
    font-weight: bold;
}
@import url(https://cdn.syncfusion.com/ej2/material.css);
#font-s {
    font-size: 20px;
}
</style>