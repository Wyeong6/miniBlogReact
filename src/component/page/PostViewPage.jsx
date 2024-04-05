import React, {useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
// import data from '../../data.json';
import PostWritePage from "./PostWritePage";
import axios from "axios";


const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p`PostContainer
    font-size: 28px;
    font-weight: 500;
`;

const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

function PostViewPage() {
    const navigate = useNavigate();
    const {postId} = useParams();
    
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState("");

    useEffect(()=>{
        axios.get(`/blog/get/${postId}`)
        .then(response => setPost(response.data))
        .catch(error => console.error(error));
    },[])
    
    const eventDelete = () => {
        if(window.confirm("삭제하시겠습니까?")){
            alert("네~");
        }
    }

    const deleteSubmit = () => {
        axios.delete(`/blog/delete/${postId}`)
            .then(()=> {
                eventDelete();
                alert("삭제 완료");
                navigate("/")
            })
            .catch((err) => console.error(err))
    }



    return (
        <Wrapper>
            <Container>
                <Button title="뒤로가기"
                    onClick={() => {
                        navigate("/")
                    }}
                />
                <Button title="수정"
                    onClick={() => {
                        navigate(`/post-edit/${postId}`)
                    }}
                />
                <Button title="삭제"
                    onClick={deleteSubmit}
                />
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <ContentText>{post.content}</ContentText>
                    <CommentLabel>댓글</CommentLabel>
                    {/* <CommentList comments={post.blogReplyList}/>  */}

                    <TextInput height={40} value={comment}
                        onChange={(event) => {
                            setComment(event.target.value);
                        }}
                    />
                    <Button title="댓글 작성하기"
                        onClick={()=>{
                            // 현재 미구현으로 메인 페이지로 감!!
                            navigate("/");
                        }}
                    />
                </PostContainer>   
            </Container>
        </Wrapper>
    )


}

export default PostViewPage;
