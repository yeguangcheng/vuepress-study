<template>
    <div class="page">
        <div class="content">
            <Content />
        </div>
        <PageMeta />

        <PageNav />
    </div>
</template>

<script setup>
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'
</script>

<style lang="scss" scope>
.page {
    .content {
        max-width: 1000px;
        padding: 0 30px;
        margin: 0 auto;
        .language-html,
        .language-typescript,
        .language-javascript {
            code {
                background-color: #282c34;
                padding: 0;
            }
        }
        h2 {
            border-bottom: none;
        }
        .table {
            display: table;
            width: 500px;
            text-align: center;
            font-size: 14px;
        }
    }
}
</style>
