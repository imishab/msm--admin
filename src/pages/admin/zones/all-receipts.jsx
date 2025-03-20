import React from "react";
import {
  useFetchReceiptsQuery,
  useDeleteReceiptsMutation,
} from "../../../redux/api/adminApi";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { Pencil, Trash2, Dot, ArrowLeft } from "lucide-react";
import { formatDate } from "../../../utils/extraUtils";

export default function allReceipts() {
  const {
    data: receipts,
    isLoading,
    isError,
    refetch,
  } = useFetchReceiptsQuery("");
  console.log("rrrrrr", receipts);

  // const [deleteReceipts, { isLoading: isDeleting }] = useDeleteReceiptsMutation();
  const router = useRouter();

  // Handle receipts deletion
  // const handleDelete = async (id) => {
  //   const result = await Swal.fire({
  //     title: "Are you sure?",
  //     text: "You will not be able to recover this zone!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonText: "Yes, delete it!",
  //     cancelButtonText: "No, cancel!",
  //     reverseButtons: true,
  //     customClass: {
  //       confirmButton: "btn btn-danger",
  //       cancelButton: "btn btn-secondary",
  //     },
  //   });

  //   if (result.isConfirmed) {
  //     try {
  //       await deleteZone(id).unwrap();
  //       toast.success("Zone deleted successfully!", {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: true,
  //       });

  //       refetch();
  //     } catch (error) {
  //       toast.error("Failed to delete zone. Please try again.", {
  //         position: "top-center",
  //         autoClose: 5000,
  //         hideProgressBar: true,
  //       });
  //     }
  //   }
  // };

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
                    <h5 className="font-weight-bolder mt-2">All Receipts</h5>
                  </div>
                  {/* <Link
                    href="/admin/zones/add-zone"
                    className="btn btn-dark btn-sm"
                  >
                    + Add New Zone Head
                  </Link> */}
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
                          <th>Date</th>
                          <th>Zone Details</th>
                          <th>User Details</th>
                          <th>Amount</th>
                          <th>Payment Status</th>
                          <th>View</th>
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
                        ) : receipts?.length > 0 ? (
                          receipts.map((receipt, index) => (
                            <tr key={receipt._id}>
                              <td>{index + 1}</td>
                              <td>{formatDate(receipt.createdAt)}</td>
                              <td>
                                <b>Name :</b> {receipt.zonehead?.name || "N/A"}{" "}
                                <br />
                                <b>Zone :</b>{" "}
                                {receipt.zonehead?.zonename || "N/A"} <br />
                                <b>Number :</b>{" "}
                                {receipt.zonehead?.phone || "N/A"} <br />
                              </td>

                              <td>
                                <b>Name :</b> {receipt.name || "N/A"} <br />
                                <b>Number :</b> {receipt.phone || "N/A"} <br />
                              </td>
                              <td>{receipt.amount || "N/A"}/-</td>
                              <td>
                                <b>Type :</b> {receipt.payment || "N/A"} <br />
                                <b>Platform :</b> {receipt.paymenttype || "N/A"}{" "}
                                <br />
                              </td>

                              <td>
                                <a
                                  href={`https://zonehead.vercel.app/receipt/${receipt._id}`}
                                  className="btn btn-dark btn-sm"
                                >
                                  View Receipt
                                </a>
                              </td>

                              {/* <td>
                                <button className="btn btn-dark btn-sm me-2">
                                  <Pencil size={14} />
                                </button>
                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() => handleDelete(receipts._id)}
                                  disabled={isDeleting}
                                >
                                  {isDeleting ? (
                                    "Deleting..."
                                  ) : (
                                    <Trash2 size={14} />
                                  )}
                                </button>
                              </td> */}
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={8} className="text-center">
                              No receiptss found.
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
