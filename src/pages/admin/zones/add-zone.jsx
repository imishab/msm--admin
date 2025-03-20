import { useAddZoneMutation } from "../../../redux/api/adminApi";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
export default function addProduct() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [zonename, setZonename] = useState("");
  const [note, setNote] = useState("");
  const [zoneId, setZoneId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error messages
  const [image, setImage] = useState(null);
  const [addZone, { isLoading, isSuccess }] = useAddZoneMutation();
  const router = useRouter();
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous errors

    if (!image) {
      setErrorMessage("Please upload an image.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("type", type);
      formData.append("zonename", zonename);
      formData.append("note", note);
      formData.append("zoneId", zoneId);
      formData.append("password", password);
      formData.append("image", image);

      await addZone(formData).unwrap();

      // Reset form fields
      setName("");
      setEmail("");
      setPhone("");
      setType("");
      setZonename("");
      setNote("");
      setZoneId("");
      setPassword("");
      setImage(null);

      // Redirect with success flag
      router.push("/admin/zones/all-zones");
    } catch (error) {
      setErrorMessage(error?.data?.message || "Failed to add zone.");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("The zone has been successfully added!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    const generateZoneId = () => {
      const prefix = "MSMZONE";
      const suffix = ("000" + (Math.floor(Math.random() * 1000) + 1)).slice(-3);
      return `${prefix}${suffix}`;
    };

    setZoneId(generateZoneId());
  }, []);

  return (
    <>
      <div className="content-page">
        <div className="content">
          {/* Start Content*/}
          <div className="container-xxl mt-4">
            <div className="container">
              <form role="form" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-lg-7">
                    <div className="card card-plain p-2">
                      <div className="card-header">
                        <div className="d-flex align-items-center">
                          <Link href="/admin/zones/all-zones">
                            {" "}
                            <ArrowLeft
                              size={18}
                              color="#000"
                              className="me-3 mb-0 mt-0"
                            />
                          </Link>
                          <h5 className="font-weight-bolder mt-2">
                            Add New Zone Head
                          </h5>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="form-group mb-1">
                          <label className="mb-1">Member Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder=""
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="row g-2">
                          <div className="col-lg-6">
                            <div className="form-group mb-1">
                              <label className="mb-1 mt-2">Member Type</label>
                              <select
                                className="form-control"
                                id="exampleFormControlSelect1"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                required
                              >
                                <option value="" selected disabled>
                                  Select Type
                                </option>
                                <option value="President">President</option>
                                <option value="Seceretory">Seceretory</option>
                                <option value="Trusurer">Trusurer</option>
                                <option value="Member">Member</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mb-1">
                              <label className="mb-1 mt-2">Zone</label>
                              <select
                                className="form-control"
                                id="exampleFormControlSelect1"
                                value={zonename}
                                onChange={(e) => setZonename(e.target.value)}
                                required
                              >
                                <option value="" selected disabled>
                                  Select Zone
                                </option>
                                <option value="Nadappuram">Nadappuram</option>
                                <option value="Vadakara">Vadakara</option>
                                <option value="Payyoli">Payyoli</option>
                                <option value="Koyilandy">Koyilandy</option>
                                <option value="Meppayur">Meppayur</option>

                                <option value="Perambra">Perambra</option>
                                <option value="Kuttiyadi">Kuttiyadi</option>
                                <option value="Balussery">Balussery</option>
                                <option value="Ponoor">Ponoor</option>
                                <option value="Other">Other</option>
                              </select>
                              {errorMessage && (
                                <p className="text-danger">{errorMessage}</p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="row g-2 mt-1">
                          <div className="col-lg-6">
                            <div className="form-group mb-1">
                              <label className="mb-1">Member Email</label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder=""
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mb-1">
                              <label className="mb-1">
                                Member Phone Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder=""
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group mb-1">
                          <label className="mb-1 mt-2">Note (optional)</label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            defaultValue={""}
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="card card-plain p-2 mb-2">
                      <div className="card-body">
                        <div className="form-group mb-1">
                          <label className="mb-1 mt-2">
                            Upload Image (optional)
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleFileChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card card-plain p-2 mt-0">
                      <div className="card-body">
                        <h6>Login Credentials</h6>
                        <hr />
                        <div className="row g-2 mt-1">
                          <div className="col-lg-12">
                            <div className="form-group mb-1">
                              <label className="mb-1">
                                Unit ID (auto generated)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                value={zoneId} // Bind the value to the state
                                placeholder=""
                                required
                                readOnly // If you want the user not to modify the ID, keep it read-only
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mb-1">
                              <label className="mb-1">Password</label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder=""
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-md btn-dark  mt-2 w-50 me-1 mb-0"
                  disabled={isLoading}
                >
                  {isLoading ? "Adding..." : "Add Zone Head"}
                </button>
                <Link
                  href="/admin/zones/all-zones"
                  className="btn btn-md btn-secondary  mt-2 mb-0"
                >
                  Cancel
                </Link>
              </form>
              {/* <ToastContainer /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
