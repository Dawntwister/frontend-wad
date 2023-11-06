// Vue instance
const app = Vue.createApp({

    // Data Properties
    data() {
        return {

        }
    },

    methods: {

        

    }
    
})

app.component('cart-product-card', {

    props: [ "name","weight","price","image" ],

    // Receive the 'logic' (method)
    emits: [],

    template: `
    <div class="row  align-items-center">
        <div class="col p-2">
            <img v-bind:src='image' class="img-thumbnail" alt="">
        </div>
        <div class="col p-2">
            <h5>{{name}}</h5>
                <h5>{{weight}}</h5>
                <br class='d-none'>
                <button class="btn btn-outline-danger m-1" style='border-color:lightgrey;'>Remove</button>
                <button class="btn btn-outline-success m-1" style='border-color:lightgrey'>Save for Later</button>
        </div>
        <div class="col p-2">
            {{price}}
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>  
        </div>
        <hr>
    </div>
    `

})



// Link this Vue instance with <div id="main">
app.mount("#app")




