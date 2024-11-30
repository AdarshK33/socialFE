import React, { useState, useEffect } from "react";
import ProfileDashBoard from "../../src/components/dashboard";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOption } from "../../utils/session";

function index() {
  return (
    <>
      <ProfileDashBoard />
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
