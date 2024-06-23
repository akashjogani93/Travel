import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from '../../services/authService';
import './css/style.css';
const Header = () => {
  let navigate = useNavigate();
  useEffect(() => {
    const handleToggle = () => {
      const sidebar = document.querySelector("#sidebar");
      sidebar.classList.toggle("expand");
      updateSidebarVisibility();
    };

    const updateSidebarVisibility = () => {
      const sidebar = document.querySelector("#sidebar");
      const sidebarHam = document.querySelector("#sidebarham");
      const toggleBtn = document.querySelector(".toggle-btn");

      if (sidebar.classList.contains("expand")) {
        sidebarHam.style.display = "none";
        toggleBtn.style.display = "block";
      } else {
        sidebarHam.style.display = "block";
        toggleBtn.style.display = "none";
      }
    };

    const hamBurger = document.querySelector(".toggle-btn");
    hamBurger.addEventListener("click", handleToggle);
    const sidebarHamButton = document.querySelector("#sidebarham button");
    sidebarHamButton.addEventListener("click", () => {
      const sidebar = document.querySelector("#sidebar");
      sidebar.classList.add("expand");
      updateSidebarVisibility();
    });

    // Set initial visibility of buttons based on sidebar's class
    updateSidebarVisibility();
    const handleResize = () => {
      const sidebar = document.querySelector("#sidebar");
      if (window.innerWidth < 600) {
        sidebar.classList.remove("expand");
        updateSidebarVisibility(); // Update visibility after removing the class
      }
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    return () => {
      hamBurger.removeEventListener("click", handleToggle);
      sidebarHamButton.removeEventListener("click", () => {
        const sidebar = document.querySelector("#sidebar");
        sidebar.classList.add("expand");
        updateSidebarVisibility();
      });
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div id="sidebarham">
        <button className="" type="button" style={{backgroundColor:'#fff',border:0,marginTop:8}} id="">
          <i className="lni lni-menu tog"></i>
        </button>
      </div>
      <aside id="sidebar" className="expand">
        <div className="d-flex" style={{borderBottomWidth:1,borderBottomColor:'#fff'}}>
            <button className="toggle-btn" type="button">
                <i className="lni lni-menu" style={{marginTop:7}}></i>
            </button>
            <div className="sidebar-logo">
                <Link to={"/home"}>Travel Booking</Link>
            </div>
        </div>
        <ul className="sidebar-nav pt-0">
            <li className="sidebar-item pt-0">
                <Link to={"/home"} className="sidebar-link" id="home">
                    <i className="fa-brands fa-dashcube"></i>
                    <span>Dashboard</span>
                </Link>
            </li>
          <li className="sidebar-item">
            <a
              href="/"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#auth1"
              aria-expanded="false"
              aria-controls="auth1"
            >
            <i className="fa-solid fa-person"></i>
              <span>Customers</span>
            </a>
            <ul
              id="auth1"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <Link to={"/custreg"} className="sidebar-link">
                  <i className="fa-regular fa-circle crcls"></i>
                  <span>Customer Registration</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to={"/custList"} className="sidebar-link">
                  <i className="fa-regular fa-circle crcls"></i>
                  <span>Customer List</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a
              href="/"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#auth2"
              aria-expanded="false"
              aria-controls="auth2"
            >
             <i className="fa-solid fa-user-tie"></i>
              <span>Vendors</span>
            </a>
            <ul
              id="auth2"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <Link to={"/venreg"} className="sidebar-link">
                  <i className="fa-regular fa-circle crcls"></i>
                  <span>Vendor Registration</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to={"/venlist"} className="sidebar-link">
                  <i className="fa-regular fa-circle crcls"></i>
                  <span>Vendor List</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a
              href="/"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#auth3"
              aria-expanded="false"
              aria-controls="auth3"
            >
              <i className="fab fa-magento"></i>
              <span>Agents</span>
            </a>
            <ul
              id="auth3"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <Link to={"/agentreg"} className="sidebar-link">
                  <i className="fa-regular fa-circle crcls"></i>
                  <span>Agent Registration</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to={"/agelist"} className="sidebar-link">
                  <i className="fa-regular fa-circle crcls"></i>
                  <span>Agents List</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a
              href="/"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#auth12"
              aria-expanded="false"
              aria-controls="auth3"
            >
              <i className="fa-solid fa-diagram-project"></i>
              <span>Projects</span>
            </a>
            <ul
              id="auth12"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <Link to={"/project"} className="sidebar-link">
                  <i className="fa-regular fa-circle crcls"></i>
                  <span>Project Registration</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to={"/projectList"} className="sidebar-link ">
                  <i className="fa-regular fa-circle crcls"></i>
                  <span>Project List</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to={"/projectoverall"} className="sidebar-link">
                  <i className="fa-regular fa-circle crcls"></i>
                  <span>Project Details</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to={"/plotAsign"} className="sidebar-link">
                  <i className="fa-regular fa-circle crcls"></i>
                  <span>Plot Assign</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to={"/projectplotList"} className="sidebar-link">
                  <i className="fa-regular fa-circle crcls"></i>
                  <span>Plot Details</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a
              href="/"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#auth56"
              aria-expanded="false"
              aria-controls="auth3"
            >
              <i className="fa-solid fa-credit-card"></i>
              <span>Land Owner</span>
            </a>
            <ul
              id="auth56"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <Link to={"/landowner"} className="sidebar-link">
                  <i className="fa-regular fa-circle crcls"></i>
                  <span>Land Owner</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to={"/ownerPayment"} className="sidebar-link">
                  <i className="fa-regular fa-circle crcls"></i>
                  <span>Payment</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a
              href="/"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#auth14"
              aria-expanded="false"
              aria-controls="auth3"
            >
             <i className="fa-brands fa-atlassian"></i>
              <span>Sale Plot</span>
            </a>
            <ul
              id="auth14"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <Link to={"/saleplot"} className="sidebar-link">
                  <i className="fa-regular fa-circle crcls"></i>
                  <span>Sale Plot</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a
              href="/"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#auth18"
              aria-expanded="false"
              aria-controls="auth3"
            >
              <i className="fa-solid fa-credit-card"></i>
              <span>Payments</span>
            </a>
            <ul
              id="auth18"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <Link to={"/advancePayment"} className="sidebar-link">
                  <i className="fa-regular fa-circle crcls"></i>
                  <span>Advance Payment</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to={"/paidPayment"} className="sidebar-link">
                  <i className="fa-regular fa-circle crcls"></i>
                  <span>Paid Payment</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a
              href="/"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#auth6"
              aria-expanded="false"
              aria-controls="auth6"
            >
              <i className="fa-solid fa-arrow-up-short-wide"></i>
              <span>Expenses</span>
            </a>
            <ul
              id="auth6"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <Link to={"/addexpenses"} className="sidebar-link">
                  <i className="fa-regular fa-circle crcls"></i>
                  <span>Add Expenses</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to={"/balancesheet"} className="sidebar-link">
                  <i className="fa-regular fa-circle crcls"></i>
                  <span>Upload Statement</span>
                </Link>
              </li>

              <li className="sidebar-item">
                <Link to={"/balancesheetData"} className="sidebar-link">
                 
                  <span>View Expenses</span>
                </Link>
              </li>
             
            </ul>
          </li>
          
          <li className="sidebar-item">
            <a
              href="/"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#auth19"
              aria-expanded="false"
              aria-controls="auth19"
            >
             <i className="fa-solid fa-money-check-dollar"></i>
              <span>Cheques</span>
            </a>
            <ul
              id="auth19"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <Link to={"/CheckRecords"} className="sidebar-link">
                 
                  <span>Cheque Record</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <Link to={"/changePass"} className="sidebar-link">
              <i class="fa-solid fa-key"></i>
              <span>Change Password</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to={"/logout"} className="sidebar-link">
              <i className="fa-solid fa-power-off"></i>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Header;
