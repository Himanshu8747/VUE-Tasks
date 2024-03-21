<template>
    <div class="childA-container">
        <h3>Child Component A</h3>
        <p>Parent Message: {{ parentMessage }}</p>
        <button @click="sendMessageToParent">Send Message to Parent</button>
    </div>
</template>

<script>
export default {
    props: {
        parentMessage: String
    },
    methods: {
        sendMessageToParent() {
            this.$emit('messageToParent', 'Hello from Child A!');
        }
    }
};
</script>

<style>
.childA-container {
    width:40%;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
}

.childA-container h3 {
    margin-top: 0;
}

.childA-container button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.childA-container button:hover {
    background-color: #0056b3;
}
</style>