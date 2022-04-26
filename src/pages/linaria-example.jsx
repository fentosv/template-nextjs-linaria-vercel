import React from 'react'
import Head from 'next/head'

import { styled } from 'linaria/react'
import { css } from 'linaria'

import Layout from '../components/Layout';

const Circle = styled.div`
  margin: 40px;
  display: flex ;
  align-items: center ;
  justify-content: center ;

  height: 200px;
  width: 200px;
  border-radius: 50% ;
  background-color: seagreen;

  animation: move 1s alternate infinite;
  @keyframes move {
    from {
      transform: translateX(30px);
    }
    to {
        /* transform: rotate(360deg); */
        transform: translateX(-30px);
    }
  }

  &:hover{
      background-color: red ;
  }
`

const anotherClass = css`
  color: white;
`

export default function LinariaExample() {
  return (
    <Layout>
      <Head>
        <title>Linaria Examples</title>
        <meta name="description" content="Blablabla linaria examples"></meta>
      </Head>

      <h1 className='title'>Linaria Examples</h1>

      <Circle className={anotherClass}>Zero runtime CSS in JS</Circle>

    </Layout>
  );
}