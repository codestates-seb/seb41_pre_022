import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function SideMenu({path}) {
    // const location = useLocation();
    // const [path, setPath] = useState();
    // useEffect(() => {
    //     setPath(location.pathname);
    // }, [location])

    //라우트 정보 name은 menu에 표시될 이름, path는 실제 route path
    const sideMenus = [
        {name : 'HOME', path: '/'},
        {name : 'Profile', path: '/mypage'},
        {name : 'Question', path: '/question'},
    ]

  return (
    <SideMenuContainer>
        {sideMenus.map((menu,idx) => 
            <SideMenuLink key={idx} nowPath={path === menu.path}>
            <Link to={menu.path}>{menu.name}</Link>
        </SideMenuLink>
        )}
    </SideMenuContainer>
  )
}

const SideMenuContainer = styled.div`
    min-height: 100vh;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
`

const SideMenuLink = styled.li`
    width: 60%;
    padding: 10px;
    text-align: start;
    font-size: 1.3rem;
    text-decoration: none;
    list-style: none;
    ${(props) => 
        props.nowPath ? `
        border-left : 5px solid orange
        ` : ''
    }
    
`
export default SideMenu