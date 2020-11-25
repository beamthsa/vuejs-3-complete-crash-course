<template>
    <h4>Posts</h4>
    <router-link 
        v-for="post in testPosts"
        :to="`/posts/${post.id}`"
        :key="post.id"
    >
        {{ post.title }}
    </router-link>
    <router-view />
</template>

<script>
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { testPosts } from '../microblog/testPosts.js'

export default {

    // watch: {
    //     '$route': {
    //         handler: (val, oldVal) => {
    //             console.log(val)
    //             // this.fetchData(val.params.id)
    //         },
    //         immediate: true
    //     }
    // },
    setup() {
        const route = useRoute()
        // watchEffect(() => {
        //     fetchData(route.params.id)
        // })

        return {
            testPosts
        }
    }
}
</script>
