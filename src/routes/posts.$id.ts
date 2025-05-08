import {createFileRoute} from '@tanstack/react-router'
import PostsId from "../pages/PostId.tsx";

export const Route = createFileRoute('/posts/$id')({
	component: PostsId,
})

