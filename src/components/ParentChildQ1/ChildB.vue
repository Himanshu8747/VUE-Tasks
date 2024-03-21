<template>
    <div class="childB-container">
        <h3>Child Component B</h3>
        <button @click="sendMessageToParent">Send Message to Parent</button>
    </div>
</template>

<script>
export default {
    methods: {
        sendMessageToParent() {
            this.$emit('messageToParent', 'Hello from Child B!');
        }
    }
};
</script>

<style>
.childB-container {
    width:40%;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
}

.childB-container h3 {
    margin-top: 0;
}

.childB-container button {
    position: relative;
    bottom: -28%;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.childB-container button:hover {
    background-color: #0056b3;
}
</style>