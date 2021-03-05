document.addEventListener("DOMContentLoaded", () => {
	getStartTransactionActionElement().addEventListener("click", startTransactionActionClick);
	getViewProductsActionElement().addEventListener("click", viewProductActionClick);
    getEmployeeDetailsActionElement().addEventListener("click", employeeDetailsActionClick);
    getProductSalesReportElement().addEventListener("click", productSalesReportClick);
    getCashierReportActionElement().addEventListener("click", cashierReportActionClick);
    getSignOutActionElement().addEventListener("click", signOutActionClick);
});

function startTransactionActionClick() {
    displayError("Functionality has not yet been implemented.");
}
function viewProductActionClick() {
    window.location.assign("/ProductListing");
}
function employeeDetailsActionClick() {
    window.location.assign("/employeeDetail");
}
function productSalesReportClick() {
    displayError("Functionality has not yet been implemented");
}
function cashierReportActionClick() {
    displayError("Functionality has not yet been implemented.");
}
function signOutActionClick() {
    window.location.assign("/");
}
//getters and setters
function getStartTransactionActionElement() {
    return document.getElementById("startTransaction");
}

function getViewProductsActionElement() {
    return document.getElementById("viewProducts");
}

function getEmployeeDetailsActionElement() {
    return document.getElementById("employeeDetails");
}

function getProductSalesReportElement() {
    return document.getElementById("productSalesReport");
}
function getCashierReportActionElement() {
    return document.getElementById("cashierReport");
}

function getSignOutActionElement() {
    return document.getElementById("signOutImage");
}