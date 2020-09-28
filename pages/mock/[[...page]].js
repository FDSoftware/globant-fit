import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import LoadSVG from "../../components/LoadSVG";
import Loading from "../../components/Loading";

const BASE_URL = "http://localhost:3000/api/";

export default function Home() {
  const router = useRouter();
  const page = router.query?.page ?? ["Home"];

  const handleClick = (event) => {
    const tar = event.target;
    if (tar.id) {
      const _url = tar.id.slice(0, -2);
      if (_url === "Back") {
        router.back();
      } else {
        router.push(`./${_url}`);
      }
    } else {
      console.log(tar);
    }
  };

  return (
    <div>
      <Head>
        <title>Globant-FIT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoadSVG
        url={`${BASE_URL}get_svg/${page.join("/")}`}
        LoadingComponent={Loading}
        handleClick={handleClick}
        handleError={() => console.log("oh no, the economy")}
      />
    </div>
  );
}
