import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import moment from "moment";
import { profile } from "../client/UserClient";
import { useRouter } from "next/router";
import { message } from "antd";

const Layout = ({ children, id }) => {
  const router = useRouter();
  const [data, setData] = useState({});

  const getProfile = async () => {
    const { data, error } = await profile();
    if (data) {
      setData(data);
    } else {
      message.error("Silahkan masuk kembali");
      router.push("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
    message.success("Anda Berhasil Keluar");
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="container w-100 pt-3">
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
          Halo, {data?.nama}
        </div>
        <button
          className="btn btn-primary-main ms-auto d-flex align-items-center gap-3"
          style={{ cursor: "pointer" }}
          onClick={handleLogout}
        >
          <div className="">Keluar</div>
          <FaChevronRight />
        </button>
      </div>
      <div className="mx-auto my-5 w-50 text-center">{children}</div>
    </div>
  );
};

export default Layout;
