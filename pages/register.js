import React, { useEffect, useState } from "react";
import Link from "next/link";
import { register } from "../client/UserClient";
import { message } from "antd";
import { useRouter } from "next/router";

const initialFormData = {
  nama: "",
  email: "",
  password: ""
};

const Index = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);

  const handlesubmit = async () => {
    if (!formData.nama || !formData.email || !formData.password) {
      message.error("Data wajib diisi");
      return;
    }
    const { data, error } = await register(formData);
    if (data) {
      message.success(data.message);

      router.push("/login");
    } else {
      message.error(error.message);
    }
  };
  // console.log(formData);
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
          Register
        </p>

        <div className="mt-4">
          <input
            className="form-control"
            placeholder="Masukkan email"
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value
              })
            }
            value={formData?.email}
          />
          <input
            className="form-control mt-3"
            placeholder="Masukkan password"
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value
              })
            }
            value={formData?.password}
          />
          <input
            className="form-control mt-3"
            placeholder="Masukkan nama"
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
            onChange={(e) =>
              setFormData({
                ...formData,
                nama: e.target.value
              })
            }
            value={formData?.nama}
          />
          <button
            type="button"
            htmlType="button"
            className="btn btn-primary-main w-100 mt-4"
            onClick={handlesubmit}
          >
            Buat Akun
          </button>
          <p className="mt-4 fs-16 fw-400">
            Sudah punya akun?{" "}
            <Link href="/login">
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
                Masuk
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
