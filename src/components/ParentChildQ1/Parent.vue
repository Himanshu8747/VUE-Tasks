<template>
    <div class="parent-container">
        <h2>Q1. Demonstration of Parent to Child and Child to Parent Communication </h2>
        <p>Message from Child A: {{ messageFromChildA }}</p>
        <p>Message from Child B: {{ messageFromChildB }}</p>
        <div class="childs-container">
            <ChildA :parentMessage="parentMessage" @messageToParent="handleMessageFromChildA" />
            <ChildB @messageToParent="handleMessageFromChildB" />
        </div>
    </div>
</template>

<script>
import ChildA from './ChildA.vue';
import ChildB from './ChildB.vue';

export default {
    data() {
        return {
            parentMessage: "Hello from parent!",
            messageFromChildA: "",
            messageFromChildB: ""
        };
    },
    components: {
        ChildA,
        ChildB
    },
    methods: {
        handleMessageFromChildA(message) {
            this.messageFromChildA = message;
        },
        handleMessageFromChildB(message) {
            this.messageFromChildB = message;
        }
    }
};
</script>

<style>
.parent-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 30px;
}
.childs-container{
    display: flex;
    justify-content: space-around;
    width:100%;
}
</style>