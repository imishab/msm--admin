import Link from "next/link";
import { useFetchAdminQuery } from "../../redux/api/adminApi";

export default function Dashboard() {
  const { data: admin, isLoading, error } = useFetchAdminQuery("");
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching admin data.</p>;
  return (
    <>
      <div className="content-page">
        <div className="content">
          {/* Start Content*/}
          <div className="container-xxl">
            <div className="py-3 d-flex align-items-sm-center flex-sm-row flex-column">
              <div className="flex-grow-1">
                <h4 className="fs-18 fw-semibold m-0">
                  {admin?.name}! Dashboard
                </h4>
              </div>
            </div>
            {/* start row */}
            <div className="row">
              <div className="col-md-12 col-xl-12">
                <div className="row g-3">
                  <div className="col-md-6 col-xl-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <div className="fs-14 mb-1">Manage Zone</div>
                        </div>
                        <Link
                          className="btn btn-dark mt-2 btn-sm"
                          href="/admin/zones/all-zones"
                        >
                          All Zones
                        </Link>{" "}
                        <Link
                          className="btn btn-dark mt-2 btn-sm"
                          href="/admin/zones/add-zone"
                        >
                          + Add New Zone
                        </Link>
                        <div id="website-visitors" className="apex-charts" />
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-md-6 col-xl-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <div className="fs-14 mb-1">Manage Zone</div>
                        </div>
                        <Link
                          className="btn btn-dark mt-2 btn-sm"
                          href="/admin/zones/all-zones"
                        >
                          All Zones
                        </Link>{" "}
                        <Link
                          className="btn btn-dark mt-2 btn-sm"
                          href="/admin/zones/add-zone"
                        >
                          + Add New Zone
                        </Link>
                        <div id="website-visitors" className="apex-charts" />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>{" "}
              {/* end sales */}
            </div>
            {/* end row */}
            {/* Start Monthly Sales */}

            {/* End Monthly Sales */}
            {/* <div className="row">
              <div className="col-md-6 col-xl-6">
                <div className="card">
                  <div className="card-header">
                    <div className="d-flex align-items-center">
                      <div className="border border-dark rounded-2 me-2 widget-icons-sections">
                        <i
                          data-feather="minus-square"
                          className="widgets-icons"
                        />
                      </div>
                      <h5 className="card-title mb-0">
                        Audiences By Time Of Day
                      </h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="audiences-daily" className="apex-charts mt-n3" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-6">
                <div className="card overflow-hidden">
                  <div className="card-header">
                    <div className="d-flex align-items-center">
                      <div className="border border-dark rounded-2 me-2 widget-icons-sections">
                        <i data-feather="table" className="widgets-icons" />
                      </div>
                      <h5 className="card-title mb-0">Most Visited Pages</h5>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-traffic mb-0">
                        <tbody></tbody>
                        <thead>
                          <tr>
                            <th>Page name</th>
                            <th>Visitors</th>
                            <th>Unique</th>
                            <th colSpan={2}>Bounce rate</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              /home
                              <a
                                href="#"
                                className="ms-1"
                                aria-label="Open website"
                              >
                                <i
                                  data-feather="link"
                                  className="ms-1 text-primary"
                                  style={{ height: 15, width: 15 }}
                                />
                              </a>
                            </td>
                            <td>5,896</td>
                            <td>3,654</td>
                            <td>82.54%</td>
                            <td className="w-25">
                              <div
                                id="sparkline-bounce-1"
                                className="apex-charts"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              /about.html
                              <a
                                href="#"
                                className="ms-1"
                                aria-label="Open website"
                              >
                                <i
                                  data-feather="link"
                                  className="ms-1 text-primary"
                                  style={{ height: 15, width: 15 }}
                                />
                              </a>
                            </td>
                            <td>3,898</td>
                            <td>3,450</td>
                            <td>76.29%</td>
                            <td className="w-25">
                              <div
                                id="sparkline-bounce-2"
                                className="apex-charts"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              /index.html
                              <a
                                href="#"
                                className="ms-1"
                                aria-label="Open website"
                              >
                                <i
                                  data-feather="link"
                                  className="ms-1 text-primary"
                                  style={{ height: 15, width: 15 }}
                                />
                              </a>
                            </td>
                            <td>3,057</td>
                            <td>2,589</td>
                            <td>72.68%</td>
                            <td className="w-25">
                              <div
                                id="sparkline-bounce-3"
                                className="apex-charts"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              /invoice.html
                              <a
                                href="#"
                                className="ms-1"
                                aria-label="Open website"
                              >
                                <i
                                  data-feather="link"
                                  className="ms-1 text-primary"
                                  style={{ height: 15, width: 15 }}
                                />
                              </a>
                            </td>
                            <td>867</td>
                            <td>795</td>
                            <td>44.78%</td>
                            <td className="w-25">
                              <div
                                id="sparkline-bounce-4"
                                className="apex-charts"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              /docs/
                              <a
                                href="#"
                                className="ms-1"
                                aria-label="Open website"
                              >
                                <i
                                  data-feather="link"
                                  className="ms-1 text-primary"
                                  style={{ height: 15, width: 15 }}
                                />
                              </a>
                            </td>
                            <td>958</td>
                            <td>801</td>
                            <td>41.15%</td>
                            <td className="w-25">
                              <div
                                id="sparkline-bounce-5"
                                className="apex-charts"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              /service.html
                              <a
                                href="#"
                                className="ms-1"
                                aria-label="Open website"
                              >
                                <i
                                  data-feather="link"
                                  className="ms-1 text-primary"
                                  style={{ height: 15, width: 15 }}
                                />
                              </a>
                            </td>
                            <td>658</td>
                            <td>589</td>
                            <td>32.65%</td>
                            <td className="w-25">
                              <div
                                id="sparkline-bounce-6"
                                className="apex-charts"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              /analytical.html
                              <a
                                href="#"
                                className="ms-1"
                                aria-label="Open website"
                              >
                                <i
                                  data-feather="link"
                                  className="ms-1 text-primary"
                                  style={{ height: 15, width: 15 }}
                                />
                              </a>
                            </td>
                            <td>457</td>
                            <td>859</td>
                            <td>32.65%</td>
                            <td className="w-25">
                              <div
                                id="sparkline-bounce-7"
                                className="apex-charts"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>{" "}
          {/* container-fluid */}
        </div>{" "}
        {/* content */}
      </div>
    </>
  );
}
