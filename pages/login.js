import React, { useEffect, useState } from "react";
import Link from "next/link";

const index = () => {
  return (
    <div className="container w-100">
      <div className="mx-auto my-5 w-50 text-center">
        <p
          className="text-uppercase fw-black fs-48"
          style={{
            background:
              "linear-gradient(270.16deg, #CC00FF -2.84%, #5756FF 33.42%, #07FDFD 99.91%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            textFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
          Login
        </p>

        <div className="mt-4">
          <input
            className="form-control"
            placeholder="Masukkan email"
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          />
          <input
            className="form-control mt-3"
            placeholder="Masukkan password"
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          />
          <button className="btn btn-primary-main w-100 mt-4">Login</button>
          <p className="mt-4 fs-16 fw-400">
            Belum punya akun?{" "}
            <Link href="/register">
              <a
                style={{
                  background:
                    "linear-gradient(270.16deg, #CC00FF -2.84%, #5756FF 33.42%, #07FDFD 99.91%)",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                  textFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Buat
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
