var WizardDemo = function () {
    $("#m_wizard");
    var i, e, n = $("#m_form");
    return {
        init: function () {
            var r;
            $("#m_wizard"), n = $("#driver-form"), (e = new mWizard("m_wizard", {
                startStep: 1
            })).on("beforeNext", function (e) {
                if (!0 !== i.form()) return !1
            }), e.on("change", function (e) {
                mApp.scrollTop()
            }), i = n.validate({
                ignore: ":hidden",
                rules: {
                    BrokerRegion: {
                        required: !0
                    },
                    BrokerType: {
                        required: !0,
                        email: !0
                    },
                    Name: {
                        required: !0,
                        phoneUS: !0
                    },
                    CompanyName: {
                        required: !0
                    },
                    StreetName: {
                        required: !0
                    },
                    Unit: {
                        required: !0
                    },
                    City: {
                        required: !0
                    },
                    Country: {
                        required: !0
                    },
                    Province: {
                        required: !0,
                        url: !0
                    },
                    PostalCode: {
                        required: !0,
                        minlength: 4
                    },
                    Email: {
                        required: !0,
                        minlength: 6
                    },
                    account_group: {
                        required: !0
                    },
                    "account_communication[]": {
                        required: !0
                    },
                    billing_card_name: {
                        required: !0
                    },
                    billing_card_number: {
                        required: !0,
                        creditcard: !0
                    },
                    billing_card_exp_month: {
                        required: !0
                    },
                    billing_card_exp_year: {
                        required: !0
                    },
                    billing_card_cvv: {
                        required: !0,
                        minlength: 2,
                        maxlength: 3
                    },
                    billing_address_1: {
                        required: !0
                    },
                    billing_address_2: {},
                    billing_city: {
                        required: !0
                    },
                    billing_state: {
                        required: !0
                    },
                    billing_zip: {
                        required: !0,
                        number: !0
                    },
                    billing_delivery: {
                        required: !0
                    },
                    accept: {
                        required: !0
                    }
                },
                messages: {
                    "account_communication[]": {
                        required: "You must select at least one communication option"
                    },
                    accept: {
                        required: "You must accept the Terms and Conditions agreement!"
                    }
                },
                invalidHandler: function (e, r) {
                    mApp.scrollTop(), swal({
                        title: "",
                        text: "There are some errors in your submission. Please correct them.",
                        type: "error",
                        confirmButtonClass: "btn btn-secondary m-btn m-btn--wide"
                    })
                },
                submitHandler: function (e) {}
            }), (r = n.find('[data-wizard-action="submit"]')).on("click", function (e) {
                e.preventDefault(), i.form() && (mApp.progress(r), n.ajaxSubmit({
                    success: function () {
                        mApp.unprogress(r), swal({
                            title: "",
                            text: "The application has been successfully submitted!",
                            type: "success",
                            confirmButtonClass: "btn btn-secondary m-btn m-btn--wide"
                        })
                    }
                }))
            })
        }
    }
}();
jQuery(document).ready(function () {
    WizardDemo.init()
});