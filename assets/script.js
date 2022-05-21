$.getJSON(
  "https://tourism.opendatahub.bz.it/v1/EventShort?pagenumber=1&sortorder=ASC&optimizedates=false&removenullvalues=false",
  function (data) {
    var itemList = data.Items;
    var content = document.getElementById("cards");
    debugger;
    for (var i = 0; i < itemList.length; i++) {
      var description = itemList[i].EventDescription;
      var correctedDes = description.toUpperCase();
      var card = `<div class="column">
                <div class="card" style="width: 18rem; height: auto">
                            <div class="card-body">
                                <h5 class="card-title">${correctedDes}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${itemList[i].CompanyName}</h6>
                                <p class="card-text">${itemList[i].AnchorVenueRoomMapping}</p>
                            </div>
                        </div>
                        </div>`;
      content.innerHTML += card;
    }
  }
);
