$.getJSON(
  "https://tourism.opendatahub.bz.it/v1/EventShort?pagenumber=1&sortorder=ASC&optimizedates=false&removenullvalues=false",
  function (data) {
    var itemList = data.Items;

    var items = {
      id: itemList.Id,
      room: itemList.AnchorVenueRoomMapping,
      company: itemList.CompanyName,
      eDesc: itemList.EventDescription,
      startDt: itemList.StartDate,
      endDt: itemList.EndDate,
    };

    var source = document.getElementById("events-template").innerHTML;
    var template = Handlebars.compile(source);
  }
);
