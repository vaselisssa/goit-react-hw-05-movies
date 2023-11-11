import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';
import Loader from 'components/Loader';

const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header>
          <nav>
            <Link to="/" onClick={e => e.currentTarget.blur()}>
              Home
            </Link>

            <Link to="/movies" onClick={e => e.currentTarget.blur()}>
              Movies
            </Link>
          </nav>
        </Header>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
