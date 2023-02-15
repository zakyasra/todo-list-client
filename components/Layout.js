import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import moment from "moment";

const Layout = ({ children, id }) => {
  return (
    <div className="container w-100">
      <div className="d-flex align-items-center">
        <div
          className="fw-black fs-24"
          style={{
            background:
              "linear-gradient(270.16deg, #CC00FF -2.84%, #5756FF 33.42%, #07FDFD 99.91%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            textFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
          Halo, Zaky
        </div>
        <div
          className="ms-auto d-flex align-items-center gap-3"
          style={{ cursor: "pointer" }}
        >
          <div className="fw-400 fs-20 text-neutral-100">Keluar</div>
          <FaChevronRight />
        </div>
      </div>
      <div className="mx-auto my-5 w-50 text-center">{children}</div>
    </div>
  );
};

export default Layout;
