import React, { useState } from 'react'
import TopMember from '../../../Template/TopMember'
import SidebarMember from '../../../Template/SidebarMember'
import FootMember from '../../../Template/FootMember'
import { Button, Card, Checkbox, Form, Input, Modal, Select } from 'antd'
import { showModalUndangan, handleOkUndangan, handleCancelUndangan, showModalWaBlast, handleOkWaBlast, handleCancelWaBlast, showModalCompany, handleOkCompany, handleCancelCompany } from './Shopping'
import { onFinishInvitation, onFinishFailedInvitation } from './Shopping'
import '../Shopping/Shopping.css'
import { Option } from 'antd/es/mentions'

const Shopping = () => {

    const [isModalOpenUndangan, setIsModalOpenUndangan] = useState(false);
    const [isModalOpenWaBlast, setIsModalOpenWaBlast] = useState(false);
    const [isModalOpenCompany, setIsModalOpenCompany] = useState(false);

    const items = ['a', 'b', 'c'];
    const [selectedItems, setSelectedItems] = useState([]);

    const handleChange = (selected) => {
        setSelectedItems(selected);
    };

    const handleSelectAll = () => {
        setSelectedItems([...items]);
    };

    const handleClearAll = () => {
        setSelectedItems([]);
    };

    return (
        <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
            {/* ============================================================== */}
            {/* Topbar header - style you can find in pages.scss */}
            {/* ============================================================== */}
            <TopMember></TopMember>
            {/* ============================================================== */}
            {/* End Topbar header */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Left Sidebar - style you can find in sidebar.scss  */}
            {/* ============================================================== */}
            <SidebarMember></SidebarMember>
            {/* ============================================================== */}
            {/* End Left Sidebar - style you can find in sidebar.scss  */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Page wrapper  */}
            {/* ============================================================== */}
            <div className="page-wrapper">
                {/* ============================================================== */}
                {/* Bread crumb and right sidebar toggle */}
                {/* ============================================================== */}

                {/* <div className="page-breadcrumb">
        <div className="row">
          <div className="col-7 align-self-center">
            <h3 className="page-title text-truncate text-dark font-weight-medium mb-1">Good Morning Jason!</h3>
            <div className="d-flex align-items-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 p-0">
                  <li className="breadcrumb-item"><a href="index.html">Dashboard</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="col-5 align-self-center">
            <div className="customize-input float-end">
              <select className="custom-select custom-select-set form-control bg-white border-0 custom-shadow custom-radius">
                <option selected>Aug 23</option>
                <option value={1}>July 23</option>
                <option value={2}>Jun 23</option>
              </select>
            </div>
          </div>
        </div>
      </div> */}

                {/* ============================================================== */}
                {/* End Bread crumb and right sidebar toggle */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* Container fluid  */}
                {/* ============================================================== */}
                <div className="container-fluid">
                    {/* *************************************************************** */}
                    {/* Start First Cards */}
                    {/* *************************************************************** */}
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="card border-end">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <div className="d-inline-flex align-items-center">
                                                <h2 className="text-dark mb-1 font-weight-medium">236</h2>
                                                <span className="badge bg-success font-12 text-white font-weight-medium rounded-pill ms-2 d-lg-block d-md-none">Aktif</span>
                                            </div>
                                            <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">Total Invitation
                                            </h6>
                                        </div>
                                        {/* <div className="ms-auto mt-md-3 mt-lg-0">
                    <span className="opacity-7 text-muted"><i data-feather="user-plus" /></span>
                  </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="card border-end">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <div className="d-inline-flex align-items-center">
                                                <h2 className="text-dark mb-1 font-weight-medium">236</h2>
                                                <span className="badge bg-success font-12 text-white font-weight-medium rounded-pill ms-2 d-lg-block d-md-none">Aktif</span>
                                            </div>
                                            <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">Wa Blast
                                            </h6>
                                        </div>
                                        {/* <div className="ms-auto mt-md-3 mt-lg-0">
                    <span className="opacity-7 text-muted"><i data-feather="user-plus" /></span>
                  </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="card border-end">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <div className="d-inline-flex align-items-center">
                                                <h2 className="text-dark mb-1 font-weight-medium">236</h2>
                                                <span className="badge bg-success font-12 text-white font-weight-medium rounded-pill ms-2 d-lg-block d-md-none">Aktif</span>
                                            </div>
                                            <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">Company Profile
                                            </h6>
                                        </div>
                                        {/* <div className="ms-auto mt-md-3 mt-lg-0">
                    <span className="opacity-7 text-muted"><i data-feather="user-plus" /></span>
                  </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* *************************************************************** */}
                    {/* End First Cards */}
                    {/* *************************************************************** */}
                    {/* *************************************************************** */}
                    {/* Start Sales Charts Section */}
                    {/* *************************************************************** */}
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title" >Invitation</h4>
                                    {/* <div id="campaign-v2" className="mt-2" style={{height: 283, width: '100%'}} /> */}
                                    <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Card style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)' }}>
                                            <img src="../assets/img/about/about.png" style={{ height: '283px', width: '100%' }} alt="undangan" />
                                        </Card>


                                        <Button type="primary" className='btn-add-cart' style={{ marginTop: '20px' }} onClick={() => showModalUndangan(setIsModalOpenUndangan)}>
                                            Add To Cart
                                        </Button>
                                    </div>
                                    <Modal okText="Add To Cart" title="Invitation" open={isModalOpenUndangan} onOk={() => handleOkUndangan(setIsModalOpenUndangan)} onCancel={() => handleCancelUndangan(setIsModalOpenUndangan)}>
                                        <Form
                                            name='add-invitation'
                                            labelAlign="left"
                                            labelCol={{
                                                span: 8,
                                            }}
                                            wrapperCol={{
                                                span: 12,
                                            }}
                                            onFinish={onFinishInvitation}
                                            onFinishFailed={onFinishFailedInvitation}
                                            autoComplete="off"
                                        >

                                            <Form.Item
                                                label="Type of Invitation"
                                                name='jenisUndangan'
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Silakan pilih jenis undangan!"
                                                    }

                                                ]}
                                            >
                                                <Select
                                                    placeholder="Please select the type of invitation!"

                                                    allowClear

                                                    options={[
                                                        {
                                                            value: 'Wedding Invitation',
                                                            label: 'Wedding Invitation',
                                                        },
                                                        {
                                                            value: 'Birthday Invitations',
                                                            label: 'Birthday Invitations'
                                                        },
                                                        {
                                                            value: 'Circumcision Invitation',
                                                            label: 'Circumcision Invitation'

                                                        },
                                                        {
                                                            value: 'Company Invitation',
                                                            label: 'Company Invitation'
                                                        },
                                                        {
                                                            value: 'Organizational Invitation',
                                                            label: 'Organizational Invitation'
                                                        }
                                                    ]}
                                                />

                                            </Form.Item>
                                            <Form.Item
                                                label="Invitation Package"
                                                name='paketUndangan'
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Silakan pilih paket undangan!"
                                                    }

                                                ]}
                                            >

                                                <Select
                                                    placeholder="Please select an invitation package!"

                                                    allowClear

                                                    options={[
                                                        {
                                                            value: 'Bronze Package',
                                                            label: 'Bronze Package',
                                                        },
                                                        {
                                                            value: 'Silver Package',
                                                            label: 'Silver Package'
                                                        },
                                                        {
                                                            value: 'Gold Package',
                                                            label: 'Gold Package'

                                                        },
                                                        {
                                                            value: 'Amethyst Package',
                                                            label: 'Amethyst Package'
                                                        },

                                                    ]}
                                                />

                                            </Form.Item>

                                            <Form.Item
                                                name="subdomain"
                                                label="Subdomain"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Silakan masukan subdomain undangan!'
                                                    }
                                                ]}
                                            >
                                                <Input
                                                    addonAfter=".kondangin.org"
                                                    placeholder='sonyarama'
                                                >
                                                </Input>

                                            </Form.Item>

                                            <Form.Item
                                                name="addOns"
                                                label="Add On (Optional)"
                                            >
                                                <Select
                                                    mode="tags"
                                                    style={{ width: '100%' }}
                                                    placeholder="Select items"
                                                    onChange={handleChange}
                                                    value={selectedItems}
                                                >
                                                    {items.map((item) => (
                                                        <Option key={item} value={item}>
                                                            {item}
                                                        </Option>
                                                    ))}
                                                    {/* Menampilkan Checkbox untuk "Pilih Semua" */}

                                                </Select>


                                            </Form.Item>

                                        </Form>
                                    </Modal>

                                    {/* <ul className="list-style-none mb-0">
                  <li>
                    <i className="fas fa-circle text-primary font-10 me-2" />
                    <span className="text-muted">Direct Sales</span>
                    <span className="text-dark float-end font-weight-medium">$2346</span>
                  </li>
                  <li className="mt-3">
                    <i className="fas fa-circle text-danger font-10 me-2" />
                    <span className="text-muted">Referral Sales</span>
                    <span className="text-dark float-end font-weight-medium">$2108</span>
                  </li>
                  <li className="mt-3">
                    <i className="fas fa-circle text-cyan font-10 me-2" />
                    <span className="text-muted">Affiliate Sales</span>
                    <span className="text-dark float-end font-weight-medium">$1204</span>
                  </li>
                </ul> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">WA Blast</h4>
                                    {/* <div className="net-income mt-4 position-relative" style={{height: 294}} /> */}

                                    <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Card style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)' }}>
                                            <img src="../assets/img/blast.png" style={{ height: '283px', width: '90%' }} alt="undangan" />
                                        </Card>
                                        <Button type="primary" className='btn-add-cart' style={{ marginTop: '20px' }} onClick={() => showModalWaBlast(setIsModalOpenWaBlast)}>
                                            Add To Cart
                                        </Button>
                                    </div>
                                    <Modal okText="Add To Cart" title="WA Blast" open={isModalOpenWaBlast} onOk={() => handleOkWaBlast(setIsModalOpenWaBlast)} onCancel={() => handleCancelWaBlast(setIsModalOpenWaBlast)}>
                                        <Form
                                            name='add-wablast'
                                            labelAlign="left"
                                            labelCol={{
                                                span: 8,
                                            }}
                                            wrapperCol={{
                                                span: 12,
                                            }}
                                            onFinish
                                            onFinishFailed
                                        >
                                            <Form.Item

                                                label="Wa Blast Package"
                                                name='paketWablast'
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Silakan pilih paket Wa Blast!"
                                                    }

                                                ]}

                                            >

                                                <Select
                                                    placeholder="Please select the subscription duration!"

                                                    allowClear

                                                    options={[
                                                        {
                                                            value: '1',
                                                            label: '1 Month',
                                                        },
                                                        {
                                                            value: '2',
                                                            label: '2 Month'
                                                        },
                                                        {
                                                            value: '3',
                                                            label: '3 Month'

                                                        },
                                                        {
                                                            value: '6',
                                                            label: '6 Month'
                                                        },
                                                        {
                                                            value: '12',
                                                            label: '12 Month'
                                                        }
                                                    ]}
                                                />

                                            </Form.Item>


                                        </Form>
                                    </Modal>

                                    {/* <ul className="list-inline text-center mt-5 mb-2">
                  <li className="list-inline-item text-muted fst-italic">Sales for this month</li>
                </ul> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Company Profile</h4>
                                    {/* <div className style={{height: 180}}>
                  <div id="visitbylocate" style={{height: '100%'}} />
                </div> */}

                                    <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Card style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)' }}>
                                            <img src="../assets/img/kbg.png" style={{ height: '283px', width: '100%' }} alt="undangan" />
                                        </Card>
                                        <Button type="primary" className='btn-add-cart' style={{ marginTop: '20px' }} onClick={() => showModalCompany(setIsModalOpenCompany)}>
                                            Add To Cart
                                        </Button>
                                    </div>

                                    <Modal okText="Add To Cart" title="Company Profile" open={isModalOpenCompany} onOk={() => handleOkCompany(setIsModalOpenCompany)} onCancel={() => handleCancelCompany(setIsModalOpenCompany)}>
                                        <Form
                                            name='add-company'
                                            labelAlign="left"
                                            labelCol={{
                                                span: 10,
                                            }}
                                            wrapperCol={{
                                                span: 12,
                                            }}
                                            onFinish
                                            onFinishFailed
                                        >
                                            <Form.Item

                                                label="Company Profil Package"
                                                name='paketCompany'
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Silakan pilih paket Company Profil!"
                                                    }

                                                ]}

                                            >

                                                <Select
                                                    placeholder="Please select the subscription duration!"

                                                    allowClear

                                                    options={[
                                                        {
                                                            value: '1',
                                                            label: '1 Month',
                                                        },
                                                        {
                                                            value: '2',
                                                            label: '2 Month'
                                                        },
                                                        {
                                                            value: '3',
                                                            label: '3 Month'

                                                        },
                                                        {
                                                            value: '6',
                                                            label: '6 Month'
                                                        },
                                                        {
                                                            value: '12',
                                                            label: '12 Month'
                                                        }
                                                    ]}
                                                />

                                            </Form.Item>


                                        </Form>
                                    </Modal>


                                </div>
                            </div>
                        </div>
                    </div>
                    {/* *************************************************************** */}
                    {/* End Sales Charts Section */}
                    {/* *************************************************************** */}
                    {/* *************************************************************** */}
                    {/* Start Location and Earnings Charts Section */}
                    {/* *************************************************************** */}

                    {/* <div className="row">
          <div className="col-md-6 col-lg-8">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-start">
                  <h4 className="card-title mb-0">Earning Statistics</h4>
                  <div className="ms-auto">
                    <div className="dropdown sub-dropdown">
                      <button className="btn btn-link text-muted dropdown-toggle" type="button" id="dd1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i data-feather="more-vertical" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dd1">
                        <a className="dropdown-item" href="#">Insert</a>
                        <a className="dropdown-item" href="#">Update</a>
                        <a className="dropdown-item" href="#">Delete</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pl-4 mb-5">
                  <div className="stats ct-charts position-relative" style={{height: 315}} />
                </div>
                <ul className="list-inline text-center mt-4 mb-0">
                  <li className="list-inline-item text-muted fst-italic">Earnings for this month</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Recent Activity</h4>
                <div className="mt-4 activity">
                  <div className="d-flex align-items-start border-left-line pb-3">
                    <div>
                      <a href="javascript:void(0)" className="btn btn-info btn-circle mb-2 btn-item">
                        <i data-feather="shopping-cart" />
                      </a>
                    </div>
                    <div className="ms-3 mt-2">
                      <h5 className="text-dark font-weight-medium mb-2">New Product Sold!</h5>
                      <p className="font-14 mb-2 text-muted">John Musa just purchased <br /> Cannon 5M
                        Camera.
                      </p>
                      <span className="font-weight-light font-14 text-muted">10 Minutes Ago</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-start border-left-line pb-3">
                    <div>
                      <a href="javascript:void(0)" className="btn btn-danger btn-circle mb-2 btn-item">
                        <i data-feather="message-square" />
                      </a>
                    </div>
                    <div className="ms-3 mt-2">
                      <h5 className="text-dark font-weight-medium mb-2">New Support Ticket</h5>
                      <p className="font-14 mb-2 text-muted">Richardson just create support <br />
                        ticket</p>
                      <span className="font-weight-light font-14 text-muted">25 Minutes Ago</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-start border-left-line">
                    <div>
                      <a href="javascript:void(0)" className="btn btn-cyan btn-circle mb-2 btn-item">
                        <i data-feather="bell" />
                      </a>
                    </div>
                    <div className="ms-3 mt-2">
                      <h5 className="text-dark font-weight-medium mb-2">Notification Pending Order!
                      </h5>
                      <p className="font-14 mb-2 text-muted">One Pending order from Ryne <br /> Doe</p>
                      <span className="font-weight-light font-14 mb-1 d-block text-muted">2 Hours
                        Ago</span>
                      <a href="javascript:void(0)" className="font-14 border-bottom pb-1 border-info">Load More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}


                    {/* *************************************************************** */}
                    {/* End Location and Earnings Charts Section */}
                    {/* *************************************************************** */}
                    {/* *************************************************************** */}
                    {/* Start Top Leader Table */}
                    {/* *************************************************************** */}

                    {/* <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <h4 className="card-title">Top Leaders</h4>
                  <div className="ms-auto">
                    <div className="dropdown sub-dropdown">
                      <button className="btn btn-link text-muted dropdown-toggle" type="button" id="dd1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i data-feather="more-vertical" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dd1">
                        <a className="dropdown-item" href="#">Insert</a>
                        <a className="dropdown-item" href="#">Update</a>
                        <a className="dropdown-item" href="#">Delete</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table no-wrap v-middle mb-0">
                    <thead>
                      <tr className="border-0">
                        <th className="border-0 font-14 font-weight-medium text-muted">Team Lead
                        </th>
                        <th className="border-0 font-14 font-weight-medium text-muted px-2">Project
                        </th>
                        <th className="border-0 font-14 font-weight-medium text-muted">Team</th>
                        <th className="border-0 font-14 font-weight-medium text-muted text-center">
                          Status
                        </th>
                        <th className="border-0 font-14 font-weight-medium text-muted text-center">
                          Weeks
                        </th>
                        <th className="border-0 font-14 font-weight-medium text-muted">Budget</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-top-0 px-2 py-4">
                          <div className="d-flex no-block align-items-center">
                            <div className="me-3"><img src="../assets/images/users/widget-table-pic1.jpg" alt="user" className="rounded-circle" width={45} height={45} /></div>
                            <div className>
                              <h5 className="text-dark mb-0 font-16 font-weight-medium">Hanna
                                Gover</h5>
                              <span className="text-muted font-14">hgover@gmail.com</span>
                            </div>
                          </div>
                        </td>
                        <td className="border-top-0 text-muted px-2 py-4 font-14">Elite Admin</td>
                        <td className="border-top-0 px-2 py-4">
                          <div className="popover-icon">
                            <a className="btn btn-primary rounded-circle btn-circle font-12" href="javascript:void(0)">DS</a>
                            <a className="btn btn-danger rounded-circle btn-circle font-12 popover-item" href="javascript:void(0)">SS</a>
                            <a className="btn btn-cyan rounded-circle btn-circle font-12 popover-item" href="javascript:void(0)">RP</a>
                            <a className="btn btn-success text-white rounded-circle btn-circle font-20" href="javascript:void(0)">+</a>
                          </div>
                        </td>
                        <td className="border-top-0 text-center px-2 py-4"><i className="fa fa-circle text-primary font-12" data-bs-toggle="tooltip" data-placement="top" title="In Testing" /></td>
                        <td className="border-top-0 text-center font-weight-medium text-muted px-2 py-4">
                          35
                        </td>
                        <td className="font-weight-medium text-dark border-top-0 px-2 py-4">$96K
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-4">
                          <div className="d-flex no-block align-items-center">
                            <div className="me-3"><img src="../assets/images/users/widget-table-pic2.jpg" alt="user" className="rounded-circle" width={45} height={45} /></div>
                            <div className>
                              <h5 className="text-dark mb-0 font-16 font-weight-medium">Daniel
                                Kristeen
                              </h5>
                              <span className="text-muted font-14">Kristeen@gmail.com</span>
                            </div>
                          </div>
                        </td>
                        <td className="text-muted px-2 py-4 font-14">Real Homes WP Theme</td>
                        <td className="px-2 py-4">
                          <div className="popover-icon">
                            <a className="btn btn-primary rounded-circle btn-circle font-12" href="javascript:void(0)">DS</a>
                            <a className="btn btn-danger rounded-circle btn-circle font-12 popover-item" href="javascript:void(0)">SS</a>
                            <a className="btn btn-success text-white rounded-circle btn-circle font-20" href="javascript:void(0)">+</a>
                          </div>
                        </td>
                        <td className="text-center px-2 py-4"><i className="fa fa-circle text-success font-12" data-bs-toggle="tooltip" data-placement="top" title="Done" />
                        </td>
                        <td className="text-center text-muted font-weight-medium px-2 py-4">32</td>
                        <td className="font-weight-medium text-dark px-2 py-4">$85K</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-4">
                          <div className="d-flex no-block align-items-center">
                            <div className="me-3"><img src="../assets/images/users/widget-table-pic3.jpg" alt="user" className="rounded-circle" width={45} height={45} /></div>
                            <div className>
                              <h5 className="text-dark mb-0 font-16 font-weight-medium">Julian
                                Josephs
                              </h5>
                              <span className="text-muted font-14">Josephs@gmail.com</span>
                            </div>
                          </div>
                        </td>
                        <td className="text-muted px-2 py-4 font-14">MedicalPro WP Theme</td>
                        <td className="px-2 py-4">
                          <div className="popover-icon">
                            <a className="btn btn-primary rounded-circle btn-circle font-12" href="javascript:void(0)">DS</a>
                            <a className="btn btn-danger rounded-circle btn-circle font-12 popover-item" href="javascript:void(0)">SS</a>
                            <a className="btn btn-cyan rounded-circle btn-circle font-12 popover-item" href="javascript:void(0)">RP</a>
                            <a className="btn btn-success text-white rounded-circle btn-circle font-20" href="javascript:void(0)">+</a>
                          </div>
                        </td>
                        <td className="text-center px-2 py-4"><i className="fa fa-circle text-primary font-12" data-bs-toggle="tooltip" data-placement="top" title="Done" />
                        </td>
                        <td className="text-center text-muted font-weight-medium px-2 py-4">29</td>
                        <td className="font-weight-medium text-dark px-2 py-4">$81K</td>
                      </tr>
                      <tr>
                        <td className="border-bottom-0 px-2 py-4">
                          <div className="d-flex no-block align-items-center">
                            <div className="me-3"><img src="../assets/images/users/widget-table-pic4.jpg" alt="user" className="rounded-circle" width={45} height={45} /></div>
                            <div className>
                              <h5 className="text-dark mb-0 font-16 font-weight-medium">Jan
                                Petrovic
                              </h5>
                              <span className="text-muted font-14">hgover@gmail.com</span>
                            </div>
                          </div>
                        </td>
                        <td className="border-bottom-0 text-muted px-2 py-4 font-14">Hosting Press
                          HTML</td>
                        <td className="border-bottom-0 px-2 py-4">
                          <div className="popover-icon">
                            <a className="btn btn-primary rounded-circle btn-circle font-12" href="javascript:void(0)">DS</a>
                            <a className="btn btn-success text-white font-20 rounded-circle btn-circle" href="javascript:void(0)">+</a>
                          </div>
                        </td>
                        <td className="border-bottom-0 text-center px-2 py-4"><i className="fa fa-circle text-danger font-12" data-bs-toggle="tooltip" data-placement="top" title="In Progress" /></td>
                        <td className="border-bottom-0 text-center text-muted font-weight-medium px-2 py-4">
                          23</td>
                        <td className="border-bottom-0 font-weight-medium text-dark px-2 py-4">$80K
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> */}


                    {/* *************************************************************** */}
                    {/* End Top Leader Table */}
                    {/* *************************************************************** */}
                </div>
                {/* ============================================================== */}
                {/* End Container fluid  */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* footer */}
                {/* ============================================================== */}
                <FootMember></FootMember>
                {/* ============================================================== */}
                {/* End footer */}
                {/* ============================================================== */}
            </div>
            {/* ============================================================== */}
            {/* End Page wrapper  */}
            {/* ============================================================== */}
        </div>
    )
}

export default Shopping