import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const index = () => {
  return (
    <Layout>
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
        My To Do List
      </p>

      <div className="d-flex align-items-center justify-content-center mt-4">
        <input
          className="form-controls w-100"
          placeholder="Masukkan Todo List"
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        />
        <button className="btn-md btn-primary-main">Save</button>
      </div>

      <div className="row text-start fw-black text-primary-main mt-4">
        <div className="col-md-6">
          <div className="px-3 py-2" style={{ border: "1px solid #d9d9d9" }}>
            Todo Done: 50
          </div>
        </div>
        <div className="col-md-6">
          <div className="px-3 py-2" style={{ border: "1px solid #d9d9d9" }}>
            Todo On Progress: 50
          </div>
        </div>
      </div>

      {[0, 1].map((d) => {
        return (
          <div
            className="d-flex mt-3 bg-white p-2"
            style={{
              borderRadius: "8px",
              boxShadow: "rgba(99, 99, 99, 0.1) 0px 2px 1px 0px"
            }}
          >
            <div className="fw-400 fs-16 text-neutral-70">tes</div>
            <div className="ms-auto gap-2 d-flex align-items-center">
              <img
                src="trash.svg"
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
                className="img-fit-contain"
              />
              <img
                src="pencil.png"
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
                className="img-fit-contain"
              />
              <img
                src="check.svg"
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
                className="img-fit-contain"
              />
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default index;
