import { useState } from 'react';
import './App.css';
import axios from "axios";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";

//Page import
import MainPage from './component/page/MainPage';
import PostViewPage from './component/page/PostViewPage';
import PostWritePage from './component/page/PostWritePage';
import PostModifyPage from './component/page/PostModifyPage';

const MainTitletext = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;


function App() {
  /* 
    react-router-dom - 라우팅(routing)을 위한 라이브러리
    Route - 노선, 경로라는 뜻
    웹사이트에서 라우팅 - 사용자가 원하는 경로로 보내는것
  
  */

  return (
    <BrowserRouter>
      <MainTitletext>나의 미니 블로그</MainTitletext>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
        <Route path="post-edit/:postId" element={<PostModifyPage />} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;

