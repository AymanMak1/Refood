<template>
        <!-- Contact Form -->
         <form id="contact-form">
                <div class="row">
                    <div class="col-6">
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user-alt"></i></span>
                                            </div>
                                                <input type="text" class="form-control" name="name" :placeholder="user" required="required">
                                            </div>
                            </div>

                            <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-envelope-open"></i></span>
                                            </div>
                                            <input type="email" class="form-control" name="email" placeholder="Email" required="required">
                                        </div>
                            </div>


                    </div>


                     <div class="col-6">
                            <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-envelope-open"></i></span>
                                            </div>
                                            <input type="file" class="form-control" name="logo" placeholder="Logo" required="required">
                                        </div>
                            </div>

                            <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-unlock-alt"></i></span>
                                            </div>
                                            <input type="tel" class="form-control" name="tel" placeholder="Phone Number" required="required">
                                        </div>
                                    </div>

                        </div>


                        <div v-if="user != 'Volunteer Name'" class="col-12">
                            <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-unlock-alt"></i></span>
                                            </div>
                                            <textarea class="form-control" id="Description" placeholder="Description"></textarea>
                                        </div>
                            </div>
                        </div>

                        <div v-if="user == 'Volunteer Name'" class="col-12">
                            <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-unlock-alt"></i></span>
                                            </div>
                                              <input type="date" id="birthday"  class="form-control" placeholder="Birthday" name="birthday" required>
                                        </div>
                            </div>
                        </div>

                        <div class="col-6">
                                <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-unlock-alt"></i></span>
                                            </div>
                                            <input type="password" class="form-control" name="password" placeholder="Password" required="required">
                                        </div>
                            </div>
                        </div>
                         <div class="col-6">
                                <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fas fa-unlock-alt"></i></span>
                                                </div>
                                                <input type="password" class="form-control" name="Cpassword" placeholder="Confirm Password" required="required">
                                            </div>
                                </div>
                        </div>  

                        <div class="col-12">
                            <button class="btn btn-bordered w-100 mt-3" type="submit">Sign Up</button>
                        </div>
                        <div class="col-12">
                            <span class="d-block pt-2 mt-4 border-top">Already have an account? <a href="#">Sign In</a></span>
                        </div>
                </div>
        </form>
</template>

<script>
export default {
    name:"SignUpForm",
    props:{
        user: String
    }
}
</script>

<style scoped>

</style>