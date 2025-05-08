import { posts } from './ArrayPosts.ts';

export function getAllEntities() {
    return posts;
}

export function getEntityById(id: number) {
    return posts.find(post => post.id === id);
}

export function createEntity(data: { name: string; description: string; likes: number; dislikes: number; author: number }) {
    const newPost = {
        id: posts.length + 1,
        ...data,
    };
    posts.push(newPost);
    return newPost;
}

export function updateEntity(id: number, data: Partial<{ name: string; description: string; likes: number; dislikes: number; author: number }>) {
    const post = posts.find(post => post.id === id);
    if (!post) return null;

    Object.assign(post, data);
    return post;
}

export function deleteEntity(id: number) {
    const index = posts.findIndex(post => post.id === id);
    if (index === -1) return false;

    posts.splice(index, 1);
    return true;
}

