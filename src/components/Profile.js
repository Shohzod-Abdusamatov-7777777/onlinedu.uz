import axios from "axios";
import React, { useEffect, useState } from "react";
import { getToken, getUser } from "../Utils/Common";
import Layout from "./Layout";
import Loading from "./Loading";

const Profile = (props) => {
    const [load, setLoad] = useState(null);
    const [getUserError, setGetUserError] = useState(null);
    const [user, setUser] = useState({});

    const { history } = props;
    var token = getToken();
    useEffect(() => {
        !token && history.push("/");

        token = token && token.replace(/"/g, "");
        setLoad(true);
        setGetUserError(null);
        axios
            .get(`https://api.onlinedu.uz/api/v1/profil/get?token=${token}`)
            .then((res) => (setUser(res.data.data), setLoad(false)))
            .catch((err) => (setGetUserError("Qaytadan urinib ko'ring"), setLoad(false), console.log(err.massage)));
    }, []);

    return (
        <Layout>
            {load ? (
                <div className="display-3 top-80 ">
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-center" style={{ height: "300px" }}>
                            <Loading />
                        </div>
                    </div>
                </div>
            ) : (
                user.name && (
                    <div className="display-3 top-80 text-center text-green">
                        <div className="container">
                            <div className="bg-light w-100 b-r-2 my-4">
                                <h1>{user.name}</h1>
                                <img src={`https://api.onlinedu.uz/storage/${user.avatar}`} alt={user.name} />
                                <h2>ID {user.id}</h2>
                            </div>
                        </div>
                    </div>
                )
            )}
            {getUserError && (
                <div className="display-3 top-80 text-center text-green">
                    <h1> {getUserError}</h1>
                </div>
            )}
        </Layout>
    );
};

export default Profile;
