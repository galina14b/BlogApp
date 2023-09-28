import axious from 'axios';

async function getAll(limit, page) {
    const response = await axious.get('https://jsonplaceholder.typicode.com/posts/', {
        params: {
            _limit: limit,
            _page: page
        }
    });
    return response
}

async function getPostById(id) {
    const response = await axious.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response
}

async function getCommentsByPostId(id) {
    const response = await axious.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return response
}

export { getAll, getPostById, getCommentsByPostId };