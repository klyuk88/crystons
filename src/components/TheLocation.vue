<template lang="">
      <div class="location section">
        <div class="container">
          <div class="section-title">Мы на карте</div>
        </div>
        <div class="location__map">
           
          <div id="location-map">
             <GMapMap
                  :center="center"
                  :zoom="15"
                  :options="options"
                  style="width: 100vw; height: 700px"
              >
                <GMapMarker
                  :position="center"
                  :clickable="true"
                  :icon="'./marker-logo.svg'"
                  @click="openInfoWindow(1)"
                >
                  <GMapInfoWindow
                  :closeclick="true"
                  @closeclick="openInfoWindow(null)"
                  :opened="openedMarkerID === 1"
                  >
                  <div class="location-info">
                    Москва г, ул. Воздвиженка, д. 10<br>
                    <a href="tel:+74957955537">+7 (495) 795 55 37</a>
                  </div>
                  
                  </GMapInfoWindow>
                </GMapMarker>
              </GMapMap>
          </div>
        </div>
      </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup(props) {
    const center = { lat: 55.753301, lng: 37.606272 };
    const options = {
      styles: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5",
            },
          ],
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161",
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#f5f5f5",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#bdbdbd",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#dadada",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5",
            },
          ],
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#c9c9c9",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
        },
      ],
    };

    const openedMarkerID = ref(null);
    const openInfoWindow = (id) => {
      openedMarkerID.value = id;
    };

    return {
      center,
      options,
      openInfoWindow,
      openedMarkerID,
    };
  },
};
</script>
<style lang="css">
.location-info {
  padding: 15px;
  font-size: 16px;
  font-family: 'Gilroy';
  
}
</style>