<template>
    <div v-if="post">
        <h4>{{ post.title }}</h4>
        <p>
            {{ post.content }}
        </p>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { testPosts } from '../microblog/testPosts.js'

export default {
    beforeRouteEnter(to, from, next) {
    //     if (this.props.auth) {
    //     } else {
    //         next('/posts')
    //     }
    },

    computed: {
        post() {
            return testPosts.find(
                x => x.id === parseInt(this.$route.params.id)
            )
        }
    },

    setup() {
        const route = useRoute()

        const post = computed(() => {
            return testPosts.find(
                x => x.id === parseInt(route.params.id)
            )
        })

        return {
            post
        }
    }
}
</script>
