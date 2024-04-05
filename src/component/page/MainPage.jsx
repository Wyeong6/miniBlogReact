import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
//  import data from '../../data.json';
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
    };
`;


function MainPage() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get("/blog/list")
        .then(response => {
            console.log(response.data);
            setData(response.data)})
        .catch(error=> console.error(error))
    },[])

    return (
        <Wrapper>
            <Container>
                <Button title="글 작성하기" onClick={()=>{
                    navigate("/post-write");
                }}/>
                <PostList posts={data} onClickItem={(item)=>{
                    navigate(`/post/${item.idx}`);
                }}/>
            </Container>
        </Wrapper>
    )

}

export default MainPage;