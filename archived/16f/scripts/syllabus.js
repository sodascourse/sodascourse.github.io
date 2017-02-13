// Week selection
"use strict";
$(function() {
    var dateOfNextThursday = getDateOfNextThursday();
    var $rowOfThisWeek = $("tr[data-date='" + dateOfNextThursday + "']")
    $rowOfThisWeek.addClass("table-success");
});

function getDateOfNextThursday() {
    var date = new Date();
    date.setDate(date.getDate() + 4 - date.getDay());  // "4" is for Thursday
    return (date.getMonth() + 1) + "/" + date.getDate();
}
