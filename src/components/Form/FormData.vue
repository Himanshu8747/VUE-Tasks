<template>
    <div class="component-2">
        <h1 class="login">Q3. Login Form</h1>
        <div v-if="!submitted">
            <form @submit.prevent="submitForm" class="form-container">
                <div v-for="(block, index) in blocks" :key="index" class="form-group">
                    <label class="form-label">{{ block.title }}</label>
                    <div v-if="block.type === 'text'">
                        <input type="text" v-model="formData[block.token]" :placeholder="block.placeholder"
                            :required="block.required" class="form-input">
                    </div>
                    <div v-else-if="block.type === 'checkbox'">
                        <input type="checkbox" v-model="formData[block.token]" class="form-checkbox">
                    </div>
                    <div v-else-if="block.type === 'date'">
                        <input type="date" v-model="formData[block.token]" :placeholder="block.placeholder"
                            :required="isRequired(block)" class="form-input">
                    </div>
                    <div v-else-if="block.type === 'select'">
                        <select v-model="formData[block.token]" :required="block.required" class="form-select">
                            <option v-for="option in block.options" :value="option.value" :key="option.value">{{
            option.label }}</option>
                        </select>
                    </div>
                </div>
                <button type="submit" class="form-submit">Submit</button>
            </form>
        </div>
        <div v-else>
            <p>Thank you, {{ formData.PERSON_NAME }}, for your submission!</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blocks: [
                {
                    token: "PERSON_NAME",
                    type: "text",
                    props: {},
                    title: "Enter your name",
                    required: true,
                    placeholder: "ABC XYZ"
                },
                {
                    token: "IS_PERSON_MINOR",
                    type: "checkbox",
                    props: {},
                    title: "Is the current person minor?",
                    default: false
                },
                {
                    token: "PERSON_DOB",
                    type: "date",
                    props: {},
                    title: "Enter your BOD",
                    placeholder: "01/01/2000",
                    required: true
                },
                {
                    token: "GENDER",
                    type: "select",
                    props: {},
                    title: "Select your gender",
                    required: true,
                    options: [
                        { value: "male", label: "Male" },
                        { value: "female", label: "Female" },
                        { value: "other", label: "Other" }
                    ]
                },
                {
                    token: "EMAIL",
                    type: "text",
                    props: {},
                    title: "Enter your email",
                    placeholder: "abc@example.com"
                }
            ],
            formData: {},
            submitted: false
        };
    },
    methods: {
        isRequired(block) {
            if (block.required) {
                return this.formData[block.required];
            }
            return true;
        },
        submitForm() {
            let isValid = true;
            this.blocks.forEach(block => {
                if (block.required && !this.formData[block.token]) {
                    isValid = false;
                    alert(`${block.title} is required.`);
                }
            });

            if (isValid) {
                this.submitted = true;
                console.log("Form submitted:", this.formData);
            }
        }
    }
};
</script>

<style>
.login{
    text-align: center;
}
.component-2{
    margin-top:5%;
}
.form-container {
    width: 56%;
    margin: 0 auto;
}
.form-select{
    width: 103%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 35px;
    margin-top: 5px;
}
.form-group {
    margin-bottom: 20px;
}

.form-label {
    display: block;
    font-weight: bold;
}

.form-input {
    margin-top:5px;
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.form-checkbox {
    margin-top:5px;
    margin-right: 10px;
}

.form-submit {
    margin: auto 35%;
    background-color: #007bff;
    color: #fff;
    border: none;
    width: 30%;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
}

.form-submit:hover {
    background-color: #0056b3;
}
</style>