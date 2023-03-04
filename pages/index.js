import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  deleterProject,
  getProject,
  postProject,
  putProject,
  putSelesai
} from "../client/ProjectClient";
import { message } from "antd";

const initialFormData = {
  nama: ""
};

const index = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [dataset, setDataset] = useState([]);
  const [editData, setEditData] = useState(null);

  const _getProject = async () => {
    const { data, error } = await getProject();
    if (data) {
      setDataset(data);
    }
  };

  const handleSubmit = async () => {
    const { data, error } = editData
      ? await putProject(editData?.id, formData)
      : await postProject(formData);
    if (data) {
      setFormData({ ...formData, nama: "" });
      setEditData(null);
      message.success(data?.message);
      _getProject();
    } else {
      message.error(error?.message);
    }
  };

  const handleSelesai = async (d) => {
    const { data, error } = await putSelesai(d?.id, {
      selesai: d?.selesai == 1 ? 0 : 1
    });
    if (data) {
      setFormData({ ...formData, nama: "" });
      setEditData(null);
      message.success(data?.message);
      _getProject();
    } else {
      message.error(error?.message);
    }
  };

  const handleDelete = async (id) => {
    const { data, error } = await deleterProject(id);
    if (data) {
      message?.success(data?.message);
      _getProject();
    } else {
      message.error(error?.message);
    }
  };

  useEffect(() => {
    if (editData != null) {
      setFormData({
        ...formData,
        nama: editData?.nama
      });
    } else {
      setFormData(initialFormData);
    }
  }, [editData]);

  useEffect(() => {
    _getProject();
  }, []);

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
          onChange={(e) => setFormData({ ...formData, nama: e?.target?.value })}
          value={formData?.nama}
        />
        <button
          className="btn-md btn-primary-main"
          type="button"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>

      {editData && (
        <button
          className="btn-sm btn-primary-main mt-3 d-flex flex-start"
          type="button"
          onClick={() => setEditData(null)}
        >
          Cancel Edit
        </button>
      )}

      <div className="row text-start fw-black text-primary-main mt-4">
        <div className="col-md-6">
          <div className="px-3 py-2" style={{ border: "1px solid #d9d9d9" }}>
            Todo Done: {dataset?.todoDone}
          </div>
        </div>
        <div className="col-md-6">
          <div className="px-3 py-2" style={{ border: "1px solid #d9d9d9" }}>
            Todo On Progress: {dataset?.todoProgres}
          </div>
        </div>
      </div>

      {dataset?.data?.map((d, idx) => {
        return (
          <div
            className="d-flex mt-3 bg-white p-2"
            style={{
              borderRadius: "8px",
              boxShadow: "rgba(99, 99, 99, 0.1) 0px 2px 1px 0px"
            }}
          >
            <div
              className={`fw-400 fs-16 text-neutral-70 ${
                d?.selesai == 1 ? "text-decoration-line-through" : ""
              }`}
            >
              {d?.nama}
            </div>
            <div className="ms-auto gap-2 d-flex align-items-center">
              <img
                src="trash.svg"
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
                className="img-fit-contain"
                onClick={() => handleDelete(d?.id)}
              />
              <img
                src="pencil.png"
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
                className="img-fit-contain"
                onClick={() => setEditData(d)}
              />
              <img
                src="check.svg"
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
                className="img-fit-contain"
                onClick={() => handleSelesai(d)}
              />
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default index;
