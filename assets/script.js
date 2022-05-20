$.getJSON(
  "https://tourism.opendatahub.bz.it/v1/EventShort?pagenumber=1&sortorder=ASC&optimizedates=false&removenullvalues=false",
  function (data) {
    console.log(data);
  }
);
