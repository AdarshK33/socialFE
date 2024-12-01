import React, { useState, useEffect } from "react";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOption } from "../../utils/session";
import Friend from "../../src/components/friend";

function index() {
  return (
    <>
      <Friend />
    </>
  );
}

export default index;

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    try {
      const user = req?.session?.user || null;
      if (!user) {
        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }
     

      return {
        props: {
          user: req?.session?.user || null,
        },
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  sessionOption
);
