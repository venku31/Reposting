// Copyright (c) 2022, venkatesh and contributors
// For license information, please see license.txt

frappe.ui.form.on('Reposting Settings', {
	start_sle_gle_reporting: function (frm) {
        frappe.call({
            method: 'reposting.item_reposting.enqueue_reposting_sle_gle',
            callback: function (data) {
                console.log(data);
            }
        })
    },
});
