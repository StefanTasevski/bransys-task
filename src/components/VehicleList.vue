<template>
    <div class="col-12 rounded shadow bg-white text-left">
        <table class="table table-striped table-borderless table-responsive-md">
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Plate Number</th>
            <th scope="col">Model</th>
            <th scope="col"></th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="vehicle in vehicles" v-bind:key="vehicle">
            <td>{{ vehicle.vehicleName }}</td>
            <td>{{ vehicle.vehicleType }}</td>
            <td>{{ vehicle.plateNumber }}</td>
            <td>{{ vehicle.model }}</td>
            <form id="update-form" v-on:submit.prevent="submit">
                
            </form>
            <td>
                <button v-on:click="updateElement(vehicle)" class="btn btn-vue">Update</button>
            </td>
            <td>
                <button v-on:click="removeElement(vehicle)" class="btn btn-vue">Delete</button>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
</template>
<script>
import router from '../router'
      
export default {
    name: 'Vehicle List',
    data () {
        return {
            vehicles: this.$parent.vehicles
        }
    },
    methods: {
        removeElement: function (index) {
            if(confirm("Do you really want to delete?")){
            this.vehicles.splice(this.vehicles.indexOf(index),1);
            }
        },
        updateElement: function (index) {
            const id = this.vehicles.indexOf(index);
            router.push({ path: `/${id}` })
        }
    }
}
</script>

<style>

</style>