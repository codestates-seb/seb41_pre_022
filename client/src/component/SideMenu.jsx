import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SideMenu({ path, isLogin }) {
    //사이드 메뉴 추가를 원하시면 배열안에 담으면 됩니다.
    //라우트 정보 name은 menu에 표시될 이름, path는 실제 route path
    const sideMenus = isLogin
        ? [
              { name: "HOME", path: "" },
              { name: "Profile", path: "mypage" },
              { name: "Question", path: "question" },
          ]
        : [
              { name: "HOME", path: "" },
              { name: "Question", path: "question" },
          ];

    return (
        <SideMenuContainer>
            {sideMenus.map((menu, idx) => (
                <SideMenuLink key={idx} nowPath={path === `${menu.path}`}>
                    <Link to={`/${menu.path}`}>{menu.name}</Link>
                </SideMenuLink>
            ))}
        </SideMenuContainer>
    );
}

const SideMenuContainer = styled.div`
    min-height: 100vh;
    margin-top: 30px;
    padding-left: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
`;

const SideMenuLink = styled.li`
    width: 100%;
    padding: 10px;
    text-align: start;
    font-size: 1.3rem;
    text-decoration: none;
    list-style: none;
    ${(props) =>
        props.nowPath
            ? `
        border-left : 5px solid orange
        `
            : ""}
`;
export default SideMenu;
