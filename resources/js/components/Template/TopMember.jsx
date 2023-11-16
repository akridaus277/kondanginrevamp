import React from 'react'

const TopMember = () => {
  return (
  
    <header className="topbar" data-navbarbg="skin6">
    <nav className="navbar top-navbar navbar-expand-lg">
      <div className="navbar-header" data-logobg="skin6">
        {/* This is for the sidebar toggle which is visible on mobile only */}
        <a className="nav-toggler waves-effect waves-light d-block d-lg-none" href="javascript:void(0)"><i className="ti-menu ti-close" /></a>

        {/* Logo */}
        {/* ============================================================== */}
        <div className="navbar-brand">
          {/* Logo icon */}
          <a href="index.html">
            <div className=''>
            <img src="../assets/img/kbg.png" style={{width:'100px', height:'auto', paddingTop:'20px', paddingBottom:'10px'}} alt className="img-fluid" />
            </div>
          </a>
        </div>
        {/* ============================================================== */}
        {/* End Logo */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Toggle which is visible on mobile only */}
        {/* ============================================================== */}
        <a className="topbartoggler d-block d-lg-none waves-effect waves-light" href="javascript:void(0)" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="ti-more" /></a>
      </div>
      {/* ============================================================== */}
      {/* End Logo */}
      {/* ============================================================== */}
      <div className="navbar-collapse collapse" id="navbarSupportedContent">
        {/* ============================================================== */}
        {/* toggle and nav items */}
        {/* ============================================================== */}
        <ul className="navbar-nav float-left me-auto ms-3 ps-1">
          {/* Notification */}
        
    
      
        </ul>
        {/* ============================================================== */}
        {/* Right side toggle and nav items */}
        {/* ============================================================== */}
        <ul className="navbar-nav float-end">
          {/* ============================================================== */}
          {/* Search */}
          {/* ============================================================== */}
         
          {/* ============================================================== */}
          {/* User profile and search */}
          {/* ============================================================== */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="../dashboard/src/assets/images/users/profile-pic.jpg" alt="user" className="rounded-circle" width={40} />
              <span className="ms-2 d-none d-lg-inline-block"><span>Hello,</span> <span className="text-dark">Jason Doe</span> <i data-feather="chevron-down" className="svg-icon" /></span>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-right user-dd animated flipInY">
              <a className="dropdown-item" href="javascript:void(0)"><i data-feather="user" className="svg-icon me-2 ms-1" />
                My Profile</a>
              <a className="dropdown-item" href="javascript:void(0)"><i data-feather="credit-card" className="svg-icon me-2 ms-1" />
                My Balance</a>
              <a className="dropdown-item" href="javascript:void(0)"><i data-feather="mail" className="svg-icon me-2 ms-1" />
                Inbox</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="javascript:void(0)"><i data-feather="settings" className="svg-icon me-2 ms-1" />
                Account Setting</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="javascript:void(0)"><i data-feather="power" className="svg-icon me-2 ms-1" />
                Logout</a>
              <div className="dropdown-divider" />
              <div className="pl-4 p-3"><a href="javascript:void(0)" className="btn btn-sm btn-info">View
                  Profile</a></div>
            </div>
          </li>
          {/* ============================================================== */}
          {/* User profile and search */}
          {/* ============================================================== */}
        </ul>
      </div>
    </nav>
  </header>

    
  )
}

export default TopMember