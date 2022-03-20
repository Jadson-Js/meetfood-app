<template>
    <section class="l-login d-flex flex-column justify-content-center align-items-center">
        <form class="login__form">
            <h1 class="text-center">Login</h1>

            <div class="login__data">
                <label for="inputName">Name</label>
                <input type="text" name="name" id="inputName" value="admin">
            </div>

            <div class="login__data">
                <label for="inputPassword">Password</label>
                <input type="password" name="password" id="inputPassword" value="123">
            </div>


            <div class="text-center">
                <button @click.prevent="changeLogin($event.target.form)"
                    class="login__button btn btn-success">Login</button>
            </div>
        </form>
    </section>
</template>

<script>
    import useFormData from './composables/useFormData.vue'
    import useChangeLogin from './composables/useChangeLogin.vue'

    export default {
        setup() {
            function changeLogin(form) {
                let formData = new FormData(form)

                const {
                    data
                } = useFormData(formData)

                useChangeLogin(data)
            }

            return {
                changeLogin
            }
        }
    }
</script>

<style scoped>
    .l-login {
        height: 100vh;
        background: url('../../../assets/bg-space.jpg') no-repeat center left;
        background-size: cover;
        overflow: none;
    }

    .login__form {
        background: #fff;
        width: 15em;
        height: 20em;
        border: 1px solid rgb(53, 73, 94);
        border-radius: 5px;
        padding: 2em 0;
        color: rgb(53, 73, 94);
    }

    .login__data {
        width: 90%;
        margin: 0 auto;
    }

    .login__data:first-of-type {
        margin-bottom: 1em;
    }

    .login__data:nth-of-type(2) {
        margin-bottom: 2.5em;
    }

    .login__button {
        width: 80%;
        margin: 0 auto;
    }
</style>