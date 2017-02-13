// Week selection
"use strict";
$(function() {
    $("tr[data-date='" + getDateOfNextWeekday(3) + "']").addClass("table-success");
});

function getDateOfNextWeekday(weekday) {
    var date = new Date();
    date.setDate(date.getDate() + weekday - date.getDay());
    return (date.getMonth() + 1) + "/" + date.getDate();
}
