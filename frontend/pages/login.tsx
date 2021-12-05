import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import Navbar from "../components/navbar";
import { axiosInstance } from "../components/axiosApi";
import axios from "axios";
type errors = {
  username?: string;
  password?: string;
};
const Login = () => {
  const router = useRouter();
  const prevUrl = router.query.prevUrl;

  const [jwt, setJwt] = useState<string | null>();
  const [cookie, setCookie] = useCookies(["user"]);
  useEffect(() => {
    if (localStorage) {
      const storedJWT = localStorage.getItem("JWT");
      console.log("LocalState: ", storedJWT);
      setJwt(storedJWT);
    }
  }, []);
  return (
    <div className="bg-lor bg-fixed overflow-auto bg-contain h-screen">
      <Navbar />
      <div className="flex flex-row items-center justify-center">
        <Box
          sx={{
            width: 1800,
            height: 900,
            backgroundColor: "black",
            opacity: [0.9, 0.9, 0.9],
          }}
          style={{
            boxShadow: `1px -20px 60px -20px purple inset, 0px 0px 5px -1px purple inset`,
          }}
        >
          <div className="flex flex-row items-center justify-center">
            <Formik
              initialValues={{ username: "", password: "" }}
              validate={(values) => {
                const errors: errors = {};
                if (!values.username) {
                  errors.username = "Required";
                } else if (!values.password) {
                  errors.password = "Required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                // axios.post("/api/users");
                axios
                  .post("api/token/obtain/", {
                    username: values.username,
                    password: values.password,
                  })
                  .then((res) => {
                    axiosInstance.defaults.headers.common["Authorization"] =
                      "JWT " + res.data.access;
                    localStorage.setItem("access_token", res.data.access);
                    localStorage.setItem("refresh_token", res.data.refresh);
                    if (prevUrl) {
                      router.push(`/${prevUrl}`);
                    } else {
                      router.push("/");
                    }
                  })
                  // .then((res) =>
                  //   console.log(localStorage.getItem("access_token"))
                  // );
                setTimeout(() => {
                  // alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="flex flex-col justify-center m-8">
                    <div>
                      <div className="flex flex-row text-white">
                        <p className="mr-4">Username&nbsp;: </p>
                        <Field
                          style={{ color: "black" }}
                          type="username"
                          name="username"
                        />
                        <ErrorMessage name="username">
                          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-row text-white mt-5">
                        <p className="mr-4">Password &nbsp;: </p>
                        <Field
                          style={{ color: "black" }}
                          type="password"
                          name="password"
                        />
                        <ErrorMessage name="password">
                          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                        </ErrorMessage>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Login;
