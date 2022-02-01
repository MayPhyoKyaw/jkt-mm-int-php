$(function () {
  $(".calendar").datepicker({
    dateFormat: "dd/mm/yy",
    firstDay: 1,
  });

  $(document).on("click", ".date-picker .input", function (e) {
    var me = $(this),
      parent = me.parents(".date-picker");
    parent.toggleClass("open");
  });

  $(".calendar").on("change", function () {
    var me = $(this),
      selected = me.val(),
      parent = me.parents(".date-picker");
    parent.find(".result").children("span").html(selected);
    document.getElementById("appointment_date").value = selected;
  });
});

var apIdEdit = document.getElementById("appointment_IdEdit");
var apCreatedAt = document.getElementById("appointment_CreatedAt");
var apUpdatedAt = document.getElementById("appointment_UpdatedAt");
var apName = document.getElementById("appointment_name");
var apEmail = document.getElementById("appointment_email");
var apPhone = document.getElementById("appointment_phone");
var apType = document.getElementById("appointment_type");
var apDate = document.getElementById("appointment_date");
var apTime = document.getElementById("appointment_time");
var apDuration = document.getElementById("appointment_duration");
var apAbout = document.getElementById("appointment_about");

function setCurrentConsultantEdit(row) {
  var tr = row.closest("tr");
  var tds = tr.children;
  var rowArr = [];
  let approved = "";
  for (var i = 0; i < tds.length; i++) {
    rowArr.push(tds[i].textContent);
  }
  console.log(rowArr);

  apIdEdit.value = parseInt(rowArr[0]);
  apName.value = rowArr[1];
  apEmail.value = rowArr[2];
  apPhone.value = rowArr[3];
  // apType.value =rowArr[4];
  $("input[name=appointment_type][value=" + rowArr[4] + "]").attr('checked', 'checked');

  var date = new Date(rowArr[5]);

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  month = (month < 10 ? "0" : "") + month;
  day = (day < 10 ? "0" : "") + day;
  apDate.value = month + "-" + day + "-" + year;
  console.log(year + "-" + month + "-" + day);

  // apDate.value = rowArr[5];
  // apTime.value = rowArr[6];
  $("input[name=appointment_time][value=" + rowArr[6] + "]").attr('checked', 'checked');
  apDuration.value = rowArr[7];
  apAbout.textContent = rowArr[8];

}
function setCurrentConsultantDel(idx) {
  console.log(idx);
}
