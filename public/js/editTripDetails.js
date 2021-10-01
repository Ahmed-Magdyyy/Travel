function editTrip(id) {
  let title = document.getElementById('TripTitleEditable').innerText;
  let desc = document.getElementById('TripDescEditable').innerText;
  let inclusion = document.getElementById('TripInclusionEditable').innerText;
  let Exclusions = document.getElementById('ExclusionsEditable').innerText;

  let type = document.getElementById('TripTypeEditable').innerText;
  let duration = document.getElementById('TripDurationEditable').innerText;
  let price = document.getElementById('TripPriceEditable').innerText;
  let departure = document.getElementById('TripDepartureEditable').innerText;

  document.getElementById('_id').value = id;

  document.getElementById('TripTitleInput').value = title;
  document.getElementById('TripTypeInput').value = type;
  document.getElementById('TripDescInput').value = desc;
  document.getElementById('TripPriceInput').value = price;
  document.getElementById('TripInclusionInput').value = inclusion;
  document.getElementById('TripDurationInput').value = duration;
  document.getElementById('TripDepartureInput').value = departure;
  document.getElementById('ExclusionsInput').value = Exclusions;
}
