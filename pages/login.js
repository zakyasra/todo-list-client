import React, { useEffect, useState } from "react";
import Link from "next/link";
import { login } from "../client/UserClient";
import { message } from "antd";
import { useRouter } from "next/router";

const initialFormData = {
  email: "",
  password: ""
};

const index = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async () => {
    if (!formData.email || !formData.password) {
      message.error("Data wajib diisi");
      return;
    }
    const { data, error } = await login(formData);
    if (data) {
      message.success("Berhasil Masuk");
      localStorage.setItem("token", data?.token);
      router.push("/");
    } else {
      message.error(error?.message);
    }
  };

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
            onChange={(e) =>
              setFormData({ ...formData, email: e?.target?.value })
            }
          />
          <input
            className="form-control mt-3"
            placeholder="Masukkan password"
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
            onChange={(e) =>
              setFormData({ ...formData, password: e?.target?.value })
            }
          />
          <button
            type="button"
            className="btn btn-primary-main w-100 mt-4"
            onClick={handleSubmit}
          >
            Login
          </button>
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
