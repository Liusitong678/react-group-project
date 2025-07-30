/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./JSX/App.jsx":
/*!*********************!*\
  !*** ./JSX/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style.css */ "./styles/style.css");
/* harmony import */ var _Page_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Page.jsx */ "./JSX/Page.jsx");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");






var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Page_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null));
react_dom__WEBPACK_IMPORTED_MODULE_1__.render(element, document.getElementById('contents'));

/***/ }),

/***/ "./JSX/EmployeeCreate.jsx":
/*!********************************!*\
  !*** ./JSX/EmployeeCreate.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var EmployeeCreate = /*#__PURE__*/function (_React$Component) {
  function EmployeeCreate(props) {
    var _d$currentStatus;
    var _this;
    _classCallCheck(this, EmployeeCreate);
    _this = _callSuper(this, EmployeeCreate, [props]);
    // input validation
    _defineProperty(_this, "validate", function () {
      var isEdit = _this.props.isEdit;
      var _this$state = _this.state,
        firstName = _this$state.firstName,
        lastName = _this$state.lastName,
        dateOfBirth = _this$state.dateOfBirth,
        dateOfJoining = _this$state.dateOfJoining;
      var errors = {};
      var nameRegex = /^[A-Za-z\s]+$/;
      var today = new Date().toISOString().split('T')[0];
      if (!isEdit) {
        // First Name validation
        if (!firstName.trim()) {
          errors.firstName = 'First name is required.';
        } else if (firstName.trim().length < 2) {
          errors.firstName = 'First name must be at least 2 characters.';
        } else if (!nameRegex.test(firstName.trim())) {
          errors.firstName = 'First name can only contain letters and spaces.';
        }

        // Last Name validation
        if (!lastName.trim()) {
          errors.lastName = 'Last name is required.';
        } else if (lastName.trim().length < 2) {
          errors.lastName = 'Last name must be at least 2 characters.';
        } else if (!nameRegex.test(lastName.trim())) {
          errors.lastName = 'Last name can only contain letters and spaces.';
        }

        // Date of Birth validation
        if (!dateOfBirth) {
          errors.dateOfBirth = 'Date of birth is required.';
        } else {
          var birthDate = new Date(dateOfBirth);
          var birthYear = birthDate.getFullYear();
          var currentYear = new Date().getFullYear();
          var age = currentYear - birthYear;
          if (birthDate > new Date()) {
            errors.dateOfBirth = 'Date of birth cannot be in the future.';
          } else if (age < 20 || age > 70) {
            errors.dateOfBirth = 'Employee age must be between 20 and 70.';
          }
        }

        // Date of Joining validation
        if (!dateOfJoining) {
          errors.dateOfJoining = 'Date of joining is required.';
        } else if (dateOfJoining > today) {
          errors.dateOfJoining = 'Date of joining cannot be in the future.';
        } else if (dateOfBirth && dateOfJoining < dateOfBirth) {
          errors.dateOfJoining = 'Joining date must be after date of birth.';
        }
      }
      _this.setState({
        errors: errors
      });
      return errors;
    });
    var d = props.initialData || {};
    _this.state = {
      firstName: d.firstName || '',
      lastName: d.lastName || '',
      dateOfBirth: d.dateOfBirth ? d.dateOfBirth.slice(0, 10) : '',
      dateOfJoining: d.dateOfJoining ? d.dateOfJoining.slice(0, 10) : '',
      title: d.title || 'Employee',
      department: d.department || 'IT',
      employeeType: d.employeeType || 'FullTime',
      currentStatus: (_d$currentStatus = d.currentStatus) !== null && _d$currentStatus !== void 0 ? _d$currentStatus : 1,
      errors: {},
      touched: {}
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }
  _inherits(EmployeeCreate, _React$Component);
  return _createClass(EmployeeCreate, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(e) {
      var name = e.target.name;
      this.setState(function (prev) {
        return {
          touched: _objectSpread(_objectSpread({}, prev.touched), {}, _defineProperty({}, name, true))
        };
      }, this.validate);
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var _this$props = this.props,
        isEdit = _this$props.isEdit,
        onSubmit = _this$props.onSubmit;
      var errors = this.validate();
      if (!isEdit && Object.keys(errors).length > 0) {
        this.setState({
          touched: {
            firstName: true,
            lastName: true,
            dateOfBirth: true,
            dateOfJoining: true
          }
        });
        return;
      }
      // edit mode
      if (isEdit) {
        var _this$state2 = this.state,
          title = _this$state2.title,
          department = _this$state2.department,
          currentStatus = _this$state2.currentStatus;
        onSubmit({
          title: title,
          department: department,
          currentStatus: parseInt(currentStatus, 10)
        });
      } else {
        // add mode
        var _this$state3 = this.state,
          firstName = _this$state3.firstName,
          lastName = _this$state3.lastName,
          dateOfBirth = _this$state3.dateOfBirth,
          dateOfJoining = _this$state3.dateOfJoining,
          _title = _this$state3.title,
          _department = _this$state3.department,
          employeeType = _this$state3.employeeType;
        onSubmit({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          dateOfBirth: dateOfBirth,
          dateOfJoining: dateOfJoining,
          title: _title,
          department: _department,
          employeeType: employeeType
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        _this$props2$isEdit = _this$props2.isEdit,
        isEdit = _this$props2$isEdit === void 0 ? false : _this$props2$isEdit,
        onCancel = _this$props2.onCancel;
      var _this$state4 = this.state,
        firstName = _this$state4.firstName,
        lastName = _this$state4.lastName,
        dateOfBirth = _this$state4.dateOfBirth,
        dateOfJoining = _this$state4.dateOfJoining,
        title = _this$state4.title,
        department = _this$state4.department,
        employeeType = _this$state4.employeeType,
        currentStatus = _this$state4.currentStatus,
        errors = _this$state4.errors,
        touched = _this$state4.touched;
      var invalid = function invalid(name) {
        return touched[name] && !!errors[name];
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
        show: true,
        onHide: onCancel,
        size: "lg",
        centered: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Header, {
        closeButton: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Title, null, isEdit ? 'Edit Employee' : 'Add New Employee')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Group, {
        className: "mb-3",
        controlId: "firstName"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Label, null, "First Name", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: {
          color: 'red'
        }
      }, " *")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Control, {
        type: "text",
        name: "firstName",
        value: firstName,
        onChange: this.handleChange,
        onBlur: this.handleBlur,
        disabled: isEdit,
        isInvalid: invalid('firstName')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Control.Feedback, {
        type: "invalid"
      }, errors.firstName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Group, {
        className: "mb-3",
        controlId: "lastName"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Label, null, "Last Name", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: {
          color: 'red'
        }
      }, " *")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Control, {
        type: "text",
        name: "lastName",
        value: lastName,
        onChange: this.handleChange,
        onBlur: this.handleBlur,
        disabled: isEdit,
        isInvalid: invalid('lastName')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Control.Feedback, {
        type: "invalid"
      }, errors.lastName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Group, {
        className: "mb-3",
        controlId: "dateOfBirth"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Label, null, "Date of Birth", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: {
          color: 'red'
        }
      }, " *")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Control, {
        type: "date",
        name: "dateOfBirth",
        value: dateOfBirth,
        onChange: this.handleChange,
        onBlur: this.handleBlur,
        disabled: isEdit,
        isInvalid: invalid('dateOfBirth')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Control.Feedback, {
        type: "invalid"
      }, errors.dateOfBirth)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Group, {
        className: "mb-3",
        controlId: "dateOfJoining"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Label, null, "Date of Joining", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: {
          color: 'red'
        }
      }, " *")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Control, {
        type: "date",
        name: "dateOfJoining",
        value: dateOfJoining,
        onChange: this.handleChange,
        onBlur: this.handleBlur,
        disabled: isEdit,
        isInvalid: invalid('dateOfJoining')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Control.Feedback, {
        type: "invalid"
      }, errors.dateOfJoining)), !isEdit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Group, {
        className: "mb-3",
        controlId: "employeeType"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Label, null, "Employee Type", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: {
          color: 'red'
        }
      }, " *")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Select, {
        name: "employeeType",
        value: employeeType,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "FullTime"
      }, "FullTime"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "PartTime"
      }, "PartTime"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Contract"
      }, "Contract"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Seasonal"
      }, "Seasonal"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Group, {
        className: "mb-3",
        controlId: "title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Label, null, "Title", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: {
          color: 'red'
        }
      }, " *")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Select, {
        name: "title",
        value: title,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Employee"
      }, "Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Manager"
      }, "Manager"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Director"
      }, "Director"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "VP"
      }, "VP"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Group, {
        className: "mb-3",
        controlId: "department"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Label, null, "Department", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: {
          color: 'red'
        }
      }, " *")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Select, {
        name: "department",
        value: department,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "IT"
      }, "IT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Marketing"
      }, "Marketing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "HR"
      }, "HR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Engineering"
      }, "Engineering"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Finance"
      }, "Finance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Operations"
      }, "Operations"))), isEdit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Group, {
        className: "mb-2",
        controlId: "currentStatus"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Label, null, "Status", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: {
          color: 'red'
        }
      }, " *")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Select, {
        name: "currentStatus",
        value: currentStatus,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: 1
      }, "Active"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: 0
      }, "Inactive")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "secondary",
        onClick: this.props.onCancel
      }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "primary",
        type: "submit"
      }, this.props.isEdit ? 'Save' : 'Confirm'))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeCreate);

/***/ }),

/***/ "./JSX/EmployeeDetail.jsx":
/*!********************************!*\
  !*** ./JSX/EmployeeDetail.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmployeeDetail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



function EmployeeDetail() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)(),
    id = _useParams.id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    emp = _useState2[0],
    setEmp = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var query = "\n      query ($id: ID!) {\n        employee(id: $id) {\n          firstName lastName age dateOfJoining\n          title department employeeType currentStatus\n        }\n      }";
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: query,
        variables: {
          id: id
        }
      })
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      console.log('detail response', data);
      setEmp(data.data.employee);
    });
  }, [id]);
  if (!emp) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "d-flex justify-content-center align-items-center",
      style: {
        minHeight: '200px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
      animation: "border",
      role: "status",
      variant: "primary"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "ms-2"
    }, "Loading..."));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "my-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Header, {
    as: "h4"
  }, emp.firstName, " ", emp.lastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    striped: true,
    bordered: true,
    hover: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, Object.entries({
    Age: emp.age,
    'Date of Joining': new Date(emp.dateOfJoining).toLocaleDateString(),
    Title: emp.title,
    Department: emp.department,
    Type: emp.employeeType,
    Status: emp.currentStatus === 1 ? 'Active' : 'Inactive'
  }).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      k = _ref2[0],
      v = _ref2[1];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: k
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        width: '40%'
      }
    }, k), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, v));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "secondary",
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link,
    to: "/employees"
  }, "\u2190 Back to Employee List"))));
}

/***/ }),

/***/ "./JSX/EmployeeDirectory.jsx":
/*!***********************************!*\
  !*** ./JSX/EmployeeDirectory.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _EmployeeTable_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeTable.jsx */ "./JSX/EmployeeTable.jsx");
/* harmony import */ var _EmployeeCreate_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmployeeCreate.jsx */ "./JSX/EmployeeCreate.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }





//extracts the type query parameter from the current URL when using HashRouter
function getTypeFromURL() {
  var hash = window.location.hash || ''; // '#/employees?type=FullTime'       
  var idx = hash.indexOf('?');
  if (idx === -1) return 'All';
  var params = new URLSearchParams(hash.slice(idx + 1));
  return params.get('type') || 'All';
}
var EmployeeDirectory = /*#__PURE__*/function (_React$Component) {
  function EmployeeDirectory() {
    var _this;
    _classCallCheck(this, EmployeeDirectory);
    _this = _callSuper(this, EmployeeDirectory);
    var initFilter = getTypeFromURL();
    _this.state = {
      employee: [],
      showModal: false,
      // Add
      showEditModal: false,
      // Edit
      editingEmp: null,
      // being edited
      currentPage: 1,
      pageSize: 10,
      filterType: initFilter
    };
    // add
    _this.createEmployee = _this.createEmployee.bind(_this);
    _this.openModal = _this.openModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    // edit
    _this.openEditModal = _this.openEditModal.bind(_this);
    _this.closeEditModal = _this.closeEditModal.bind(_this);
    _this.handleEditSubmit = _this.handleEditSubmit.bind(_this);
    //delete
    _this.handleDelete = _this.handleDelete.bind(_this);
    _this.changePage = _this.changePage.bind(_this);
    _this.handleFilterChange = _this.handleFilterChange.bind(_this);
    return _this;
  }
  _inherits(EmployeeDirectory, _React$Component);
  return _createClass(EmployeeDirectory, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.loadData();
      // Monitor browser forward/backward (hash changes)
      window.addEventListener('hashchange', function () {
        var urlType = getTypeFromURL();
        if (urlType !== _this2.state.filterType) {
          _this2.setState({
            filterType: urlType,
            currentPage: 1
          });
        }
      });
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _result$data;
        var query, response, result, sorted;
        return _regeneratorRuntime().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              query = "\n      query {\n        employeeList {\n          _id\n          firstName lastName dateOfBirth dateOfJoining age\n          title department employeeType currentStatus\n        }\n      }\n    ";
              _context.next = 1;
              return fetch('/graphql', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: query
                })
              });
            case 1:
              response = _context.sent;
              _context.next = 2;
              return response.json();
            case 2:
              result = _context.sent;
              //sort
              sorted = ((_result$data = result.data) === null || _result$data === void 0 || (_result$data = _result$data.employeeList) === null || _result$data === void 0 || (_result$data = _result$data.slice()) === null || _result$data === void 0 ? void 0 : _result$data.sort(function (a, b) {
                return a._id.localeCompare(b._id);
              })) || [];
              this.setState({
                employee: sorted
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function loadData() {
        return _loadData.apply(this, arguments);
      }
      return loadData;
    }() //add part
  }, {
    key: "createEmployee",
    value: function () {
      var _createEmployee = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
        var mutation, variables;
        return _regeneratorRuntime().wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              mutation = "\n      mutation addEmployee($employee: EmployeeInput!) {\n        employeeAdd(employee: $employee) { _id }\n      }\n    ";
              variables = {
                employee: {
                  firstName: e.firstName,
                  lastName: e.lastName,
                  dateOfBirth: e.dateOfBirth,
                  dateOfJoining: e.dateOfJoining,
                  title: e.title,
                  department: e.department,
                  employeeType: e.employeeType
                }
              };
              _context2.next = 1;
              return fetch('/graphql', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: mutation,
                  variables: variables
                })
              });
            case 1:
              this.closeModal();
              this.loadData();
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createEmployee(_x) {
        return _createEmployee.apply(this, arguments);
      }
      return createEmployee;
    }()
  }, {
    key: "openModal",
    value: function openModal() {
      this.setState({
        showModal: true
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        showModal: false
      });
    }

    //edit part
  }, {
    key: "handleEditSubmit",
    value: function () {
      var _handleEditSubmit = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(changes) {
        var mutation, variables;
        return _regeneratorRuntime().wrap(function (_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              mutation = "\n      mutation ($id: ID!, $changes: EmployeeUpdateInput!) {\n        employeeUpdate(id: $id, changes: $changes) { _id }\n      }\n    ";
              variables = {
                id: this.state.editingEmp._id,
                changes: changes
              };
              _context3.next = 1;
              return fetch('/graphql', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: mutation,
                  variables: variables
                })
              });
            case 1:
              this.closeEditModal();
              this.loadData();
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function handleEditSubmit(_x2) {
        return _handleEditSubmit.apply(this, arguments);
      }
      return handleEditSubmit;
    }()
  }, {
    key: "openEditModal",
    value: function openEditModal(emp) {
      this.setState({
        showEditModal: true,
        editingEmp: emp
      });
    }
  }, {
    key: "closeEditModal",
    value: function closeEditModal() {
      this.setState({
        showEditModal: false,
        editingEmp: null
      });
    }

    //delete
  }, {
    key: "handleDelete",
    value: function () {
      var _handleDelete = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
        var query, res, result, emp, mutation;
        return _regeneratorRuntime().wrap(function (_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              query = "\n      query ($id: ID!) {\n        employee(id: $id) {\n          currentStatus\n          firstName\n          lastName\n        }\n      }\n    ";
              _context4.next = 1;
              return fetch('/graphql', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: query,
                  variables: {
                    id: id
                  }
                })
              });
            case 1:
              res = _context4.sent;
              _context4.next = 2;
              return res.json();
            case 2:
              result = _context4.sent;
              emp = result.data.employee; // Determine whether the status is active
              if (!(emp.currentStatus === 1)) {
                _context4.next = 3;
                break;
              }
              alert("CAN'T DELETE EMPLOYEE - STATUS ACTIVE");
              return _context4.abrupt("return");
            case 3:
              if (window.confirm("Delete employee ".concat(emp.firstName, " ").concat(emp.lastName, "?"))) {
                _context4.next = 4;
                break;
              }
              return _context4.abrupt("return");
            case 4:
              mutation = "\n      mutation ($id: ID!) {\n        employeeDelete(id: $id)\n      }\n    ";
              _context4.next = 5;
              return fetch('/graphql', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: mutation,
                  variables: {
                    id: id
                  }
                })
              });
            case 5:
              this.loadData();
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function handleDelete(_x3) {
        return _handleDelete.apply(this, arguments);
      }
      return handleDelete;
    }() //filter
  }, {
    key: "handleFilterChange",
    value: function handleFilterChange(e) {
      var val = e.target.value;
      this.setState({
        filterType: val,
        currentPage: 1
      });
      if (val === 'All') {
        window.location.hash = '#/employees'; // Clear query string
      } else {
        window.location.hash = "#/employees?type=".concat(val);
      }
    }

    //paging
  }, {
    key: "changePage",
    value: function changePage(newPage) {
      this.setState({
        currentPage: newPage
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$state = this.state,
        employee = _this$state.employee,
        pageSize = _this$state.pageSize,
        currentPage = _this$state.currentPage,
        showModal = _this$state.showModal,
        showEditModal = _this$state.showEditModal,
        editingEmp = _this$state.editingEmp,
        filterType = _this$state.filterType;
      var filtered = filterType === 'All' ? employee : employee.filter(function (e) {
        return e.employeeType.toLowerCase() === filterType.toLowerCase();
      });
      var totalPages = Math.ceil(filtered.length / pageSize) || 1;
      var offset = (currentPage - 1) * pageSize;
      var pageSlice = filtered.slice(offset, offset + pageSize);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "container mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Outlet, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        onClick: this.openModal,
        className: "btn btn-success"
      }, "+ Add")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-md-6 text-end"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        htmlFor: "filterType",
        className: "form-label me-2"
      }, "Filter by Type:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
        id: "filterType",
        value: filterType,
        onChange: this.handleFilterChange,
        className: "form-select d-inline-block w-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "All"
      }, "All"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "FullTime"
      }, "FullTime"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "PartTime"
      }, "PartTime"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Contract"
      }, "Contract"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Seasonal"
      }, "Seasonal")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EmployeeTable_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        employeeInfo: pageSlice,
        startIndex: offset,
        onEdit: this.openEditModal,
        onDelete: this.handleDelete
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "d-flex justify-content-center align-items-center my-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        className: "btn btn-outline-primary me-2",
        disabled: currentPage === 1,
        onClick: function onClick() {
          return _this3.changePage(currentPage - 1);
        }
      }, "\u2039 Prev"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Page ", currentPage, " / ", totalPages), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        className: "btn btn-outline-primary ms-2",
        disabled: currentPage === totalPages,
        onClick: function onClick() {
          return _this3.changePage(currentPage + 1);
        }
      }, "Next \u203A")), showModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EmployeeCreate_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onSubmit: this.createEmployee,
        onCancel: this.closeModal
      }), showEditModal && editingEmp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EmployeeCreate_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        isEdit: true,
        initialData: editingEmp,
        onSubmit: this.handleEditSubmit,
        onCancel: this.closeEditModal
      }));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeDirectory);

/***/ }),

/***/ "./JSX/EmployeeRow.jsx":
/*!*****************************!*\
  !*** ./JSX/EmployeeRow.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");


var EmployeeRow = function EmployeeRow(_ref) {
  var employee = _ref.employee,
    onEdit = _ref.onEdit,
    onDelete = _ref.onDelete;
  var index = employee.index,
    _id = employee._id,
    firstName = employee.firstName,
    lastName = employee.lastName,
    age = employee.age,
    dateOfJoining = employee.dateOfJoining,
    title = employee.title,
    department = employee.department,
    employeeType = employee.employeeType,
    currentStatus = employee.currentStatus;
  var statusMap = {
    0: 'Inactive',
    1: 'Active'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/employees/".concat(_id),
    className: "text-decoration-none text-primary"
  }, firstName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, lastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, age !== null && age !== void 0 ? age : '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, new Date(dateOfJoining).toLocaleDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, department), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, employeeType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "badge ".concat(currentStatus === 1 ? 'bg-success' : 'bg-secondary')
  }, statusMap[currentStatus])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "btn btn-sm btn-outline-primary",
    onClick: function onClick() {
      return onEdit && onEdit(employee);
    }
  }, "Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "btn btn-sm btn-outline-danger",
    onClick: function onClick() {
      return onDelete && onDelete(_id);
    }
  }, "Delete"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeRow);

/***/ }),

/***/ "./JSX/EmployeeTable.jsx":
/*!*******************************!*\
  !*** ./JSX/EmployeeTable.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _EmployeeRow_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeRow.jsx */ "./JSX/EmployeeRow.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var EmployeeTable = function EmployeeTable(_ref) {
  var employeeInfo = _ref.employeeInfo,
    _ref$startIndex = _ref.startIndex,
    startIndex = _ref$startIndex === void 0 ? 0 : _ref$startIndex,
    onEdit = _ref.onEdit,
    onDelete = _ref.onDelete;
  var rows = employeeInfo.map(function (item, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EmployeeRow_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      employee: _objectSpread(_objectSpread({}, item), {}, {
        index: startIndex + idx
      }),
      key: item._id || item.firstName + item.lastName + (startIndex + idx),
      onEdit: onEdit,
      onDelete: onDelete
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    className: "table table-bordered table-hover align-middle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", {
    className: "table-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "No."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "First"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Last"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Age"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Dept"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, rows));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeTable);

/***/ }),

/***/ "./JSX/Home.jsx":
/*!**********************!*\
  !*** ./JSX/Home.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _images_home_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/home.jpg */ "./images/home.jpg");


function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-fluid py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card shadow-lg border-0",
    style: {
      maxWidth: '950px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _images_home_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
    className: "card-img-top img-fluid",
    alt: "Home Banner",
    style: {
      maxHeight: '450px',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "card-title text-primary"
  }, "Employee Management System"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "card-text mt-3",
    style: {
      fontSize: '1.2rem'
    }
  }, "Easily manage your employees' information, roles, and status with our intuitive system."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#/employees",
    className: "btn btn-primary mt-3 px-4 py-2"
  }, "View Employees")))));
}

/***/ }),

/***/ "./JSX/NotFound.jsx":
/*!**************************!*\
  !*** ./JSX/NotFound.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _images_datanull_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/datanull.png */ "./images/datanull.png");



function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      textAlign: 'center',
      paddingTop: 40
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _images_datanull_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "404 Not Found",
    style: {
      maxWidth: 320,
      width: '80%'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    style: {
      color: '#343a40',
      marginTop: 24
    }
  }, "Oops! This page doesn\u2019t exist\u2026"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    style: {
      marginTop: 16
    }
  }, "Back to Home")));
}

/***/ }),

/***/ "./JSX/Page.jsx":
/*!**********************!*\
  !*** ./JSX/Page.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _Home_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.jsx */ "./JSX/Home.jsx");
/* harmony import */ var _EmployeeDirectory_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmployeeDirectory.jsx */ "./JSX/EmployeeDirectory.jsx");
/* harmony import */ var _EmployeeDetail_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EmployeeDetail.jsx */ "./JSX/EmployeeDetail.jsx");
/* harmony import */ var _UpcomingRetirement_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UpcomingRetirement.jsx */ "./JSX/UpcomingRetirement.jsx");
/* harmony import */ var _NotFound_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NotFound.jsx */ "./JSX/NotFound.jsx");







function Page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    style: {
      margin: 0
    }
  }, "Employee Management System")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("aside", {
    className: "sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: "nav flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    end: true,
    to: "/home",
    className: "nav-link"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    end: true,
    to: "/employees",
    className: "nav-link"
  }, "Employees"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    end: true,
    to: "/upcoming",
    className: "nav-link"
  }, "Upcoming Retirement"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Navigate, {
      to: "/home",
      replace: true
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/home",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Home_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/employees",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EmployeeDirectory_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/employees/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EmployeeDetail_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/upcoming",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_UpcomingRetirement_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NotFound_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  })))));
}

/***/ }),

/***/ "./JSX/UpcomingRetirement.jsx":
/*!************************************!*\
  !*** ./JSX/UpcomingRetirement.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




// Retirement age threshold
var RETIREMENT_AGE = 65;
// How far in advance to check for upcoming retirements
var UPCOMING_MONTHS = 6;
var UpcomingRetirement = function UpcomingRetirement() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    employees = _useState2[0],
    setEmployees = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetchEmployees = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _result$data;
        var query, response, result, today, filtered;
        return _regeneratorRuntime().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              query = "query {\n        employeeList {\n          _id\n          firstName\n          lastName\n          dateOfBirth\n          age\n          dateOfJoining\n          title\n          department\n          employeeType\n          currentStatus\n        }\n      }";
              _context.next = 1;
              return fetch('/graphql', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: query
                })
              });
            case 1:
              response = _context.sent;
              _context.next = 2;
              return response.json();
            case 2:
              result = _context.sent;
              if (result !== null && result !== void 0 && (_result$data = result.data) !== null && _result$data !== void 0 && _result$data.employeeList) {
                today = new Date(); // Filter employees who are retiring within the next 6 months
                filtered = result.data.employeeList.filter(function (emp) {
                  if (!emp.dateOfBirth) return false;
                  var dob = new Date(emp.dateOfBirth);
                  var retirementDate = new Date(dob);
                  retirementDate.setFullYear(retirementDate.getFullYear() + RETIREMENT_AGE);
                  var sixMonthsLater = new Date(today);
                  sixMonthsLater.setMonth(sixMonthsLater.getMonth() + UPCOMING_MONTHS);
                  // Include only if retirement date falls within the upcoming 6 months
                  return retirementDate >= today && retirementDate <= sixMonthsLater;
                });
                setEmployees(filtered);
              }
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function fetchEmployees() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchEmployees();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "mb-4"
  }, "Upcoming Retirement (Next 6 Months)"), employees.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "No upcoming retirements.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    striped: true,
    bordered: true,
    hover: true,
    responsive: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", {
    className: "table-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "No."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "First"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Last"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Age"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Date of Birth"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Date of Joining"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Dept"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Status"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, employees.map(function (emp, idx) {
    var _emp$age;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: emp._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, idx + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: "/employees/".concat(emp._id),
      className: "text-decoration-none"
    }, emp.firstName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, emp.lastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, (_emp$age = emp.age) !== null && _emp$age !== void 0 ? _emp$age : '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, emp.dateOfBirth ? new Date(emp.dateOfBirth).toLocaleDateString() : '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, new Date(emp.dateOfJoining).toLocaleDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, emp.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, emp.department), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, emp.employeeType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "badge ".concat(emp.currentStatus === 1 ? 'bg-success' : 'bg-secondary')
    }, emp.currentStatus === 1 ? 'Active' : 'Inactive')));
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpcomingRetirement);

/***/ }),

/***/ "./images/datanull.png":
/*!*****************************!*\
  !*** ./images/datanull.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "img/datanull.png");

/***/ }),

/***/ "./images/home.jpg":
/*!*************************!*\
  !*** ./images/home.jpg ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "img/home.jpg");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/style.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/style.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f7f7f7;
    margin: 0;
    padding: 0;
}

.layout { 
    display: flex; 
    flex-direction: column; 
    min-height: 100vh; 
}

.header { 
    background:#007bff; 
    color:#fff; 
    padding:18px 0; 
    text-align:center; 
}

.content-area { 
    display:flex; 
    flex:1; 
}

.container {
    max-width: 1200px;
    margin: 30px auto;
    background: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.container h2 {
    margin: 0;
    color: #555;
}

h1 {
    font-size: 28px;
    margin-bottom: 25px;
    text-align: center;
}
  
/*  Table */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
}

th, td {
    padding: 14px 10px;
    text-align: center;
    border: 1px solid #dcdcdc; 
    color: #333;
  }
  

th {
    background-color: #007bff;
    color: white;
    font-weight: 600;
}

tr:hover {
    background-color: #f1f3f5;
}

/* Button & Input */
input[type="text"],
input[type="number"],
input[type="date"],
select {
    padding: 10px;
    margin: 6px 0;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 6px;
    outline: none;
    font-size: 14px;
    box-sizing: border-box;
}

input[type="submit"],
button {
    padding: 10px 20px;
    background-color: #007bff;
    border: none;
    color: white;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s ease;
    margin-top: 10px;
}

button.cancel {
    background-color: #dc3545;
    margin-left: 10px;
}

input[type="submit"]:hover {
    background-color: #0056b3;
}

button.cancel:hover {
    background-color: #c82333;
}

/* Modal (Form Popup) */

.add_form {
    position: fixed;
    overflow-y: auto;
    padding-right: 10px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.form_content {
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    width: 500px;
    max-height: 89vh;      
    overflow-y: auto;        
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.form_content h2 {
    margin-top: 0;
    color: #333;
    text-align: center;
}

.form_content form {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.form-group {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.form-group label {
    min-width: 120px;
    margin-right: 10px;
    color: #333;
}

.form-group input,
.form-group select {
    flex: 1;
}

.form_button {
    display: flex;
    justify-content: center;
    gap: 10px;
}

label.required::after {
    content: ' *';
    color: red;
  }
  
/* Sidebar */
.sidebar {
  width: 200px;
  background:#d0e4f9;
  border-right:1px solid #e4e7eb;
  padding:24px 12px;
  box-shadow: 2px 0 6px rgba(0,0,0,.04);
}

.sidebar nav {
    display:flex; 
    flex-direction:column; 
    gap:12px; 
}

.sidebar a {
  color:#555;
  font-weight:600;
  text-decoration:none;
  padding:8px 12px;
  border-radius:6px;
  transition:background .25s ease, color .25s ease;
}

.sidebar a:hover { 
    background:#f1f3f5; 
}

.sidebar a.active { 
    background:#007bff; 
    color:#fff;
}

/* Main Area */
.main { 
    flex:1; 
    padding:24px; 
    background-color: #f7f7f7;

}

.main .container { 
    margin:0 auto; 
}

.home-img {
    max-width: 100%;
    height: auto;
    margin-top: 24px;
    border-radius: 12px;
}

/* Pagination  */
.pager-link {
    background: none;
    border: none;
    color: #007bff;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    padding: 4px 8px;
    margin: 0 8px;
    border-radius: 4px;
    transition: background 0.2s ease;
  }
  
  .pager-link:hover:not(:disabled) {
    background: rgba(0, 123, 255, 0.15);
  }
  
  .pager-link:disabled {
    color: #c0c0c0;
    cursor: default;
  }

  table td:last-child {
    white-space: nowrap;
  }
  table td:last-child .pager-link {
    padding: 4px 8px;
    font-size: 12px;
  }
  
.action-btn {
    display: inline-block;
    padding: 6px 12px;
    margin: 0 6px;
    font-size: 13px;
    font-weight: 500;
    color: #fff;  
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: opacity 0.2s ease;
    text-decoration: none;     
  }
  
  /* Edit button */
  .action-btn.edit   { background-color: #007bff; }
  .action-btn.edit:hover   { opacity: 0.85; }
  
  /* Delete button */
  .action-btn.delete { background-color: #dc3545; }
  .action-btn.delete:hover { opacity: 0.85; }

  .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }
  
  .filter-box {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .filter-box label {
    width: 170px;
  }
  
  .filter-box select {
    padding: 6px 10px;
    border: 1px solid #ced4da;
    border-radius: 6px;
    background: #fff;
    font-size: 14px;
  }

  /* detail */

  .detail-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 15px;
  }
  
  .detail-table tr:nth-child(odd)  { background:#f9fbff; }   
  .detail-table tr:nth-child(even) { background:#eef4ff; }
  
  .detail-table th,
  .detail-table td {
    padding: 14px 18px;
    border-bottom: 1px solid #d7e3ff;
  }
  
  .detail-table th {
    width: 40%;
    text-align: left;
    background:#e3ecfb;
    color:#555;
    font-weight: 500;
    letter-spacing: .3px;
  }
  
  .detail-table td {
    color:#212529;
    word-break: break-word;        /* 长字符串自动换行 */
  }
  
  .detail-table tr:last-child th,
  .detail-table tr:last-child td {
    border-bottom:none;            /* 去掉最后一条下边线 */
  }

  .back-button {
    margin-top: 20px;
    padding-top: 20px;
  }




  
  `, "",{"version":3,"sources":["webpack://./styles/style.css"],"names":[],"mappings":"AAAA;IACI,4DAA4D;IAC5D,yBAAyB;IACzB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,MAAM;AACV;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,wCAAwC;AAC5C;;AAEA;IACI,SAAS;IACT,WAAW;AACf;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA,WAAW;AACX;IACI,WAAW;IACX,yBAAyB;IACzB,gBAAgB;IAChB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,yCAAyC;AAC7C;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,yBAAyB;IACzB,WAAW;EACb;;;AAGF;IACI,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA,mBAAmB;AACnB;;;;IAII,aAAa;IACb,aAAa;IACb,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,sBAAsB;AAC1B;;AAEA;;IAEI,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA,uBAAuB;;AAEvB;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;AACf;;AAEA;;IAEI,OAAO;AACX;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,UAAU;EACZ;;AAEF,YAAY;AACZ;EACE,YAAY;EACZ,kBAAkB;EAClB,8BAA8B;EAC9B,iBAAiB;EACjB,qCAAqC;AACvC;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,QAAQ;AACZ;;AAEA;EACE,UAAU;EACV,eAAe;EACf,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;EACjB,gDAAgD;AAClD;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd;;AAEA,cAAc;AACd;IACI,MAAM;IACN,YAAY;IACZ,yBAAyB;;AAE7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA,gBAAgB;AAChB;IACI,gBAAgB;IAChB,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,gCAAgC;EAClC;;EAEA;IACE,mCAAmC;EACrC;;EAEA;IACE,cAAc;IACd,eAAe;EACjB;;EAEA;IACE,mBAAmB;EACrB;EACA;IACE,gBAAgB;IAChB,eAAe;EACjB;;AAEF;IACI,qBAAqB;IACrB,iBAAiB;IACjB,aAAa;IACb,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,6BAA6B;IAC7B,qBAAqB;EACvB;;EAEA,gBAAgB;EAChB,qBAAqB,yBAAyB,EAAE;EAChD,2BAA2B,aAAa,EAAE;;EAE1C,kBAAkB;EAClB,qBAAqB,yBAAyB,EAAE;EAChD,2BAA2B,aAAa,EAAE;;EAE1C;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,QAAQ;EACV;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,iBAAiB;IACjB,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;EACjB;;EAEA,WAAW;;EAEX;IACE,WAAW;IACX,yBAAyB;IACzB,eAAe;EACjB;;EAEA,mCAAmC,kBAAkB,EAAE;EACvD,mCAAmC,kBAAkB,EAAE;;EAEvD;;IAEE,kBAAkB;IAClB,gCAAgC;EAClC;;EAEA;IACE,UAAU;IACV,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;IACV,gBAAgB;IAChB,oBAAoB;EACtB;;EAEA;IACE,aAAa;IACb,sBAAsB,SAAS,aAAa;EAC9C;;EAEA;;IAEE,kBAAkB,aAAa,cAAc;EAC/C;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB","sourcesContent":["body {\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    background-color: #f7f7f7;\n    margin: 0;\n    padding: 0;\n}\n\n.layout { \n    display: flex; \n    flex-direction: column; \n    min-height: 100vh; \n}\n\n.header { \n    background:#007bff; \n    color:#fff; \n    padding:18px 0; \n    text-align:center; \n}\n\n.content-area { \n    display:flex; \n    flex:1; \n}\n\n.container {\n    max-width: 1200px;\n    margin: 30px auto;\n    background: #ffffff;\n    padding: 30px;\n    border-radius: 12px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n}\n\n.container h2 {\n    margin: 0;\n    color: #555;\n}\n\nh1 {\n    font-size: 28px;\n    margin-bottom: 25px;\n    text-align: center;\n}\n  \n/*  Table */\ntable {\n    width: 100%;\n    border-collapse: collapse;\n    margin-top: 20px;\n    background-color: #fff;\n    border-radius: 8px;\n    overflow: hidden;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);\n}\n\nth, td {\n    padding: 14px 10px;\n    text-align: center;\n    border: 1px solid #dcdcdc; \n    color: #333;\n  }\n  \n\nth {\n    background-color: #007bff;\n    color: white;\n    font-weight: 600;\n}\n\ntr:hover {\n    background-color: #f1f3f5;\n}\n\n/* Button & Input */\ninput[type=\"text\"],\ninput[type=\"number\"],\ninput[type=\"date\"],\nselect {\n    padding: 10px;\n    margin: 6px 0;\n    width: 100%;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    outline: none;\n    font-size: 14px;\n    box-sizing: border-box;\n}\n\ninput[type=\"submit\"],\nbutton {\n    padding: 10px 20px;\n    background-color: #007bff;\n    border: none;\n    color: white;\n    font-weight: bold;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: background 0.3s ease;\n    margin-top: 10px;\n}\n\nbutton.cancel {\n    background-color: #dc3545;\n    margin-left: 10px;\n}\n\ninput[type=\"submit\"]:hover {\n    background-color: #0056b3;\n}\n\nbutton.cancel:hover {\n    background-color: #c82333;\n}\n\n/* Modal (Form Popup) */\n\n.add_form {\n    position: fixed;\n    overflow-y: auto;\n    padding-right: 10px;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1000;\n}\n\n.form_content {\n    background-color: #fff;\n    padding: 30px;\n    border-radius: 8px;\n    width: 500px;\n    max-height: 89vh;      \n    overflow-y: auto;        \n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}\n\n.form_content h2 {\n    margin-top: 0;\n    color: #333;\n    text-align: center;\n}\n\n.form_content form {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.form-group {\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n}\n\n.form-group label {\n    min-width: 120px;\n    margin-right: 10px;\n    color: #333;\n}\n\n.form-group input,\n.form-group select {\n    flex: 1;\n}\n\n.form_button {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\nlabel.required::after {\n    content: ' *';\n    color: red;\n  }\n  \n/* Sidebar */\n.sidebar {\n  width: 200px;\n  background:#d0e4f9;\n  border-right:1px solid #e4e7eb;\n  padding:24px 12px;\n  box-shadow: 2px 0 6px rgba(0,0,0,.04);\n}\n\n.sidebar nav {\n    display:flex; \n    flex-direction:column; \n    gap:12px; \n}\n\n.sidebar a {\n  color:#555;\n  font-weight:600;\n  text-decoration:none;\n  padding:8px 12px;\n  border-radius:6px;\n  transition:background .25s ease, color .25s ease;\n}\n\n.sidebar a:hover { \n    background:#f1f3f5; \n}\n\n.sidebar a.active { \n    background:#007bff; \n    color:#fff;\n}\n\n/* Main Area */\n.main { \n    flex:1; \n    padding:24px; \n    background-color: #f7f7f7;\n\n}\n\n.main .container { \n    margin:0 auto; \n}\n\n.home-img {\n    max-width: 100%;\n    height: auto;\n    margin-top: 24px;\n    border-radius: 12px;\n}\n\n/* Pagination  */\n.pager-link {\n    background: none;\n    border: none;\n    color: #007bff;\n    font-weight: 600;\n    font-size: 16px;\n    cursor: pointer;\n    padding: 4px 8px;\n    margin: 0 8px;\n    border-radius: 4px;\n    transition: background 0.2s ease;\n  }\n  \n  .pager-link:hover:not(:disabled) {\n    background: rgba(0, 123, 255, 0.15);\n  }\n  \n  .pager-link:disabled {\n    color: #c0c0c0;\n    cursor: default;\n  }\n\n  table td:last-child {\n    white-space: nowrap;\n  }\n  table td:last-child .pager-link {\n    padding: 4px 8px;\n    font-size: 12px;\n  }\n  \n.action-btn {\n    display: inline-block;\n    padding: 6px 12px;\n    margin: 0 6px;\n    font-size: 13px;\n    font-weight: 500;\n    color: #fff;  \n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: opacity 0.2s ease;\n    text-decoration: none;     \n  }\n  \n  /* Edit button */\n  .action-btn.edit   { background-color: #007bff; }\n  .action-btn.edit:hover   { opacity: 0.85; }\n  \n  /* Delete button */\n  .action-btn.delete { background-color: #dc3545; }\n  .action-btn.delete:hover { opacity: 0.85; }\n\n  .toolbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n    margin-bottom: 16px;\n  }\n  \n  .filter-box {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  }\n  \n  .filter-box label {\n    width: 170px;\n  }\n  \n  .filter-box select {\n    padding: 6px 10px;\n    border: 1px solid #ced4da;\n    border-radius: 6px;\n    background: #fff;\n    font-size: 14px;\n  }\n\n  /* detail */\n\n  .detail-table {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 15px;\n  }\n  \n  .detail-table tr:nth-child(odd)  { background:#f9fbff; }   \n  .detail-table tr:nth-child(even) { background:#eef4ff; }\n  \n  .detail-table th,\n  .detail-table td {\n    padding: 14px 18px;\n    border-bottom: 1px solid #d7e3ff;\n  }\n  \n  .detail-table th {\n    width: 40%;\n    text-align: left;\n    background:#e3ecfb;\n    color:#555;\n    font-weight: 500;\n    letter-spacing: .3px;\n  }\n  \n  .detail-table td {\n    color:#212529;\n    word-break: break-word;        /* 长字符串自动换行 */\n  }\n  \n  .detail-table tr:last-child th,\n  .detail-table tr:last-child td {\n    border-bottom:none;            /* 去掉最后一条下边线 */\n  }\n\n  .back-button {\n    margin-top: 20px;\n    padding-top: 20px;\n  }\n\n\n\n\n  \n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e":
/*!*****************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414%27/%3e%3c/svg%3e":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708%27/%3e%3c/svg%3e":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708%27/%3e%3c/svg%3e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1%27/%3e%3c/svg%3e";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktracker"] = self["webpackChunktracker"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./JSX/App.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map