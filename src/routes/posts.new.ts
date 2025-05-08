import {createFileRoute} from '@tanstack/react-router'
import CreatePosts from '../pages/CreatePosts.tsx'

export const Route = createFileRoute('/posts/new')({
	component: CreatePosts,
})

