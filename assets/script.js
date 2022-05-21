initApp();
let today = new Date();
today.setHours(0);
today.setMinutes(0);
today.setSeconds(0);

function initApp() {
  /* Initial filter for home page */
  displayHomeCards(
    "https://tourism.opendatahub.bz.it/v1/EventShort?pagenumber=1&sortorder=ASC&optimizedates=true&removenullvalues=true"
  );
  /* Filter "by date" */
  /*displayDateCards(
    "https://tourism.opendatahub.bz.it/v1/EventShort?pagenumber=1&sortorder=DESC&optimizedates=true&removenullvalues=true"
  );*/

  /* Filter by room */
  /*displayRoomCards(
    'https://tourism.api.opendatahub.bz.it/v1/EventShort/GetByRoomBooked?rawfilter=in(RoomBooked.[*].SpaceDesc,"NOI Seminar 1")'
  );*/
}

function displayHomeCards(url) {
  $.getJSON(url, function (data) {
    var itemList = data.Items;
    var content = document.getElementById("cards");

    for (var i = 0; i < itemList.length; i++) {
      var description = itemList[i].EventDescription;
      var correctedDes = description.toUpperCase();
      var date = new Date(itemList[i].StartDate);
      var correctedDate = new Date(date).toDateString();

      var card = `<div class="column">
                              <div class="card" style="width: 18rem; height: auto">
                            <div class="card-body">
                                <h5 class="card-title">${correctedDes}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${itemList[i].CompanyName}</h6>
                                <p class="card-text">${itemList[i].AnchorVenueRoomMapping}</p>
                                <p class="card-text">${correctedDate}</p>
                            </div>
                        </div>
                        </div>`;
      content.innerHTML += card;
    }
  });
}

function displayDateCards(url) {
  $.getJSON(url, function (data) {
    var itemList = data.Items;
    var content = document.getElementById("cards");

    for (var i = 0; i < itemList.length; i++) {
      var description = itemList[i].EventDescription;
      var correctedDes = description.toUpperCase();
      var date = itemList[i].StartDate;
      var correctedDate = new Date(date).toDateString();

      var card = `<div class="column">
                          <div class="card" style="width: 18rem; height: auto">
                        <div class="card-body">
                            <h5 class="card-title">${correctedDes}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${itemList[i].CompanyName}</h6>
                            <p class="card-text">${itemList[i].AnchorVenueRoomMapping}</p>
                            <p class="card-text">${correctedDate}</p>
                        </div>
                    </div>
                    </div>`;
      content.innerHTML += card;
    }
  });
}

function displayRoomCards(url) {
  $.getJSON(url, function (data) {
    var content = document.getElementById("cards");

    for (var i = 0; i < 10; i++) {
      var description = data[i].EventDescription;
      var correctedDes = description.toUpperCase();
      var date = itemList[i].StartDate;
      var correctedDate = new Date(date).toDateString();

      var card = `<div class="column">
                        <div class="card" style="width: 18rem; height: auto">
                        <div class="card-body">
                            <h5 class="card-title">${correctedDes}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${data[i].CompanyName}</h6>
                            <p class="card-text">${data[i].AnchorVenueRoomMapping}</p>
                            <p class="card-text">${correctedDate}</p>
                        </div>
                    </div>
                    </div>`;
      content.innerHTML += card;
    }
  });
}
