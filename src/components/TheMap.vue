<template lang="">
    <!-- Map list begin  -->
        <div class="objects__content" :class="{'objects__content--active': active}">
           <GMapMap
             :center="center"
              :zoom="12"
              :options="options"
              style="width: 100vw; min-height: 500px"
            >
            <GMapMarker
            v-for="(marker, index) in objectsList" :key="index"
            :clickable="true"
            :position="coordinatesToObj(marker.acf.coordinates)"
            :icon="'./marker.png'"
            @click="openInfoWindow(marker.id)"
            >
              <GMapInfoWindow
              :closeclick="true"
              @closeclick="openInfoWindow(null)"
              :opened="openedMarkerID === marker.id"
              >
                <InfoContent
                :title="marker.title.rendered"
                :about="marker.acf.about"
                :price="marker.acf.price"
                :image="marker.featured_media"
                @openPopMap="$emit('openPopMap')"
                />
              </GMapInfoWindow>
            </GMapMarker>
          </GMapMap>
        </div>
        <!-- Map list end  -->
</template>
<script>
import { ref, watch, onMounted } from "vue";
import InfoContent from "./InfoContent.vue";
export default {
  components: { InfoContent },
  props: {
    active: Boolean,
    objectsList: Array,
  },
  emits: ['openPopMap'],
  setup(props) {
    const center = { lat: 55.74983742987991, lng: 37.622986214388256 };
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
    const coordinatesToObj = (str) => {
      const arr = str.split(",");
      return {
        lat: Number(arr[0]),
        lng: Number(arr[1]),
      };
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
      coordinatesToObj,
    };
  },
};
</script>
<style lang="sass">
</style>