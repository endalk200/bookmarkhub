import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { trpc } from "../utils/trpc";
import { Fragment } from "react";
import { Header } from "components";

const Home: NextPage = () => {
    return (
        <Fragment>
            <Header />
        </Fragment>
    );
};

export default Home;
