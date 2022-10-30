import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import Layout from "components/Layout";
import Events from "components/organisms/Events";

const IndexPage = () => {
  return (
    <Layout>
      <Events />
    </Layout>
  );
};

export default IndexPage;
