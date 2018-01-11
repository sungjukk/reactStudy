import axios from 'axios';

export function getPost(postId) {
    return axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
}

// ${}는 문자열 내부에 변수를 넣을 때 사용
// 문자열을 감싸는 따옴표가 숫자 1키 왼쪽에있는 키 `
export function getComments(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
}