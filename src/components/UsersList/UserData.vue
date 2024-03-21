<template>
    <div class="user-list">
        <h1 class="header">Q2. Fetch UsersList </h1>
        <div class="search-filter">
            <input type="text" v-model="searchQuery" placeholder="Search users..." class="search-input">
            <select v-model="selectedCompany" class="filter-select">
                <option value="">All Companies</option>
                <option v-for="company in companies" :key="company" :value="company">{{ company }}</option>
            </select>
        </div>
        <ul class="user-list-container">
            <li v-for="user in paginatedUsers" :key="user.id" class="user-item">{{ user.name }} - {{ user.company.name
                }}</li>
        </ul>
        <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1" class="page-button">Previous</button>
            <button @click="nextPage" :disabled="currentPage === totalPages" class="page-button">Next</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState('users', ['users']),
        paginatedUsers() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return this.filteredUsers.slice(startIndex, endIndex);
        },
        filteredUsers() {
            let filtered = this.users;
            if (this.searchQuery) {
                filtered = filtered.filter(user => user.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
            }
            if (this.selectedCompany) {
                filtered = filtered.filter(user => user.company.name === this.selectedCompany);
            }
            return filtered;
        },
        companies() {
            return [...new Set(this.users.map(user => user.company.name))];
        },
        totalPages() {
            return Math.ceil(this.filteredUsers.length / this.pageSize);
        },
    },
    data() {
        return {
            searchQuery: '',
            selectedCompany: '',
            currentPage: 1,
            pageSize: 5,
        };
    },
    created() {
        this.$store.dispatch('users/fetchUsers');
    },
    methods: {
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
    },
};
</script>

<style scoped>
.header{
    text-align: center;
}
.user-list {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.search-filter {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.search-input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
}

.filter-select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.user-list-container {
    list-style-type: none;
    padding: 0;
}

.user-item {
    background-color: #f9f9f9;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 4px;
}

.pagination {
    margin-top: 20px;
}

.page-button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
}

.page-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>