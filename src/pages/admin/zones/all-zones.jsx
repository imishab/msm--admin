import React from "react";
import {
  useFetchZonesQuery,
  useDeleteZoneMutation,
} from "../../../redux/api/adminApi";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { Pencil, Trash2, Dot, ArrowLeft } from "lucide-react";

export default function allZones() {
  const { data: zones, isLoading, isError, refetch } = useFetchZonesQuery("");
  const [deleteZone, { isLoading: isDeleting }] = useDeleteZoneMutation();
  const router = useRouter();

  // Handle zone deletion
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this zone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
      customClass: {
        confirmButton: "btn btn-danger",
        cancelButton: "btn btn-secondary",
      },
    });

    if (result.isConfirmed) {
      try {
        await deleteZone(id).unwrap();
        toast.success("Zone deleted successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
        });

        refetch();
      } catch (error) {
        toast.error("Failed to delete zone. Please try again.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
        });
      }
    }
  };

  return (
    <div className="content-page">
      <div className="content">
        <div className="container-xxl mt-4">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <Link href="/admin/dashboard">
                      {" "}
                      <ArrowLeft
                        size={18}
                        color="#000"
                        className="me-3 mb-0 mt-0"
                      />
                    </Link>
                    <h5 className="font-weight-bolder mt-2">All Zone Heads</h5>
                  </div>
                  <Link
                    href="/admin/zones/add-zone"
                    className="btn btn-dark btn-sm"
                  >
                    + Add New Zone Head
                  </Link>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      id="scroll-vertical-datatable"
                      className="table table-bordered  nowrap w-100"
                    >
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Head Name</th>
                          <th>Head Type</th>
                          <th>Zone Name</th>
                          <th>Status</th>
                          <th>Credentials</th>
                          <th>Manage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {isLoading ? (
                          <tr>
                            <td colSpan={8} className="text-center">
                              <div className="loader-container d-flex ">
                                <div
                                  className="spinner-border spinner-border-sm text-dark me-2"
                                  role="status"
                                ></div>
                                <p className="mt-3">Please wait...</p>
                              </div>
                            </td>
                          </tr>
                        ) : zones?.length > 0 ? (
                          zones.map((zone, index) => (
                            <tr key={zone._id}>
                              <td>{index + 1}</td>
                              <td className="d-flex">
                                <img
                                  src={`https://backend.msmnorth.com${zone.image}`}
                                  alt={zone.name}
                                  className="me-2"
                                  style={{
                                    width: "70px",
                                    height: "70px",
                                    objectFit: "cover",
                                  }}
                                />
                                <span>
                                  <p className="mb-0">{zone.name}</p>
                                  <p className="mb-0">{zone.email}</p>
                                  <p className="mb-0">{zone.phone}</p>
                                </span>
                              </td>
                              <td>{zone.type}</td>
                              <td>{zone.zonename}</td>
                              <td>
                                <span className="d-flex align-items-center">
                                  <span
                                    className="badge  rounded-pill"
                                    style={{
                                      backgroundColor:
                                        zone.status === "active"
                                          ? "green"
                                          : "red",
                                    }}
                                  >
                                    {/* <span
                                      style={{
                                        height: "10px",
                                        width: "10px",
                                        backgroundColor:
                                          zone.status === "active"
                                            ? "lightgreen"
                                            : "lightred",
                                        borderRadius: "50%",
                                        display: "inline-block",
                                        marginRight: "8px",
                                      }}
                                    ></span> */}
                                    - {zone.status}
                                  </span>
                                </span>
                              </td>

                              <td>
                                <p className="mb-0">
                                  <b>ZoneID : </b> {zone.zoneId}
                                </p>{" "}
                                <p>
                                  <b>Password : </b> {zone.password}
                                </p>
                              </td>
                              <td>
                                {/* <button className="btn btn-dark btn-sm me-2">
                                  <Pencil size={14} />
                                </button> */}
                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() => handleDelete(zone._id)}
                                  disabled={isDeleting}
                                >
                                  {isDeleting ? (
                                    "Deleting..."
                                  ) : (
                                    <Trash2 size={14} />
                                  )}
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={8} className="text-center">
                              No zones found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
