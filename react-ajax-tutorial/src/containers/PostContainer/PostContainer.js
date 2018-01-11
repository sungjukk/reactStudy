import React, { Component } from 'react';
import { PostWrapper, Navigator, Post, Warning } from '../../components';
import * as service from '../../service/post';

class PostContainer extends Component {
    constructor(props) {
        super();

        this.state = {
            postId : 1,
            fenching : false,   //ajax 처리 완료 여부
            post : {
                title : null,
                body : null
            },
            comments : [],
            warningVisibility : false
        };
    }

    componentDidMount() {
        this.fetchPostInfo(1);
    }

    showWarning = () => {
        this.setState({
            warningVisibility : true
        })

        setTimeout(
            () => {
                this.setState({
                    warningVisibility : false
                });
            }, 1500
        );
    }

    // await = 비동기 작업을 마치 동기 작업 하듯 코드를 작성할 수 있다.
    // await를 사용하기 위해서는 함수를 선언 할 때 async 키워드가 있어야 한다.
    fetchPostInfo = async (postId) => {
        this.setState({
            fetching : true
        })
        try {
            /*const post = await service.getPost(postId);
            console.log(post);
            const comment = await service.getComments(postId);
            console.log(comment);*/
            const info = await Promise.all([
                service.getPost(postId),
                service.getComments(postId)
            ]);

            const {title, body} = info[0].data;

            const comments = info[1].data;

            this.setState({
                postId,
                post: {
                    title,
                    body
                },
                comments,
                fetching : false
            })
        } catch (e) {
            this.setState({
                fetching : false
            });
            this.showWarning();
            console.log('error!!', e);
        }
    }


    handleNavigateClick = (type) => {
        const postId = this.state.postId;

        if (type === 'NEXT') {
            this.fetchPostInfo(postId + 1);
        } else {
            this.fetchPostInfo(postId - 1);
        }
    }


    render() {
        const {postId, fetching, post, comments, warningVisibility} = this.state;
        return (
          <PostWrapper>
              <Navigator
                postId={postId}
                disabled={fetching}
                onClick={this.handleNavigateClick}
              />
              <Post
                postId={postId}
                title={post.title}
                body={post.body}
                comments={comments}
              />
              <Warning visible={warningVisibility} message="That post does not exiet"/>
          </PostWrapper>
        );
    }
}

export default PostContainer;