<style lang="scss">
    #map .gm-style-cc, .gm-fullscreen-control {
        display: none;
    }

    .gm-svpc, .gm-style-mtc {
        display: none;
    }

    #map a img {
        display: none;
    }
    .gmnoprint > div{
        background-color: transparent!important;
        box-shadow: none!important;
    }
    .gmnoprint > div > div{
        background-color: transparent!important;
        box-shadow: none!important;
    }
    #map button[aria-label="Zoom in"] img{
        display: none;
    }
    #map button[aria-label="Zoom out"] img{
        display: none;
    }
</style>
<template>
    <section class="map_section">
        <div class="container">
            <div class="row">
            <div class="tabs-wr">
                <h2>Our Offices</h2>
                <div class="tabs">
                    <a class="tab" v-for="tab in offices" :key="tab.id" @click="currentTab = tab.id" :class="{active: currentTab === tab.id}">{{tab.city}}</a>
                </div>
                <h3>Global Message Services Ukraine LLC</h3>
                <div class="address_info">
                    <p>{{currentOfficeTab.address}}</p>
                    <p>{{currentOfficeTab.postIndex}}</p>
                    <p>{{currentOfficeTab.country}}</p>
                </div>
            </div>
            <div id='map' class="map-wr">
                <GmapMap :options="mapStyles"
                         :center="currentOfficeTab.coords"
                         :zoom="12"
                         map-type-id="terrain"
                         style="width: 100%; height: 100%;" ref="mapRef" >
                    <gmap-marker
                            :position="currentOfficeTab.coords"
                            :title="'marker ' + currentOfficeTab.id"
                            :icon="{ path: 'M0,5a5,5 0 1,0 10,0a5,5 0 1,0 -10,0', fillColor: '#3db565', fillOpacity: 1, strokeWeight: 0, scale: 4 }"
                            :id="'marker ' + currentOfficeTab.id">

                    </gmap-marker>
                </GmapMap>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
    import {gmapApi} from 'vue2-google-maps';
    import mapStyles from '../assets/mapStyles/googleMapStyle';

    let offices = [{
            city: 'Kyiv',
            id: 0
        },
        {
            city: 'New York',
            id: 1,
        },
        {
            city: 'Guangzhou ',
            id: 2,
        },
        {
            city: 'Barcelona ',
            id: 3,

        }];
    let officesData = [
        {
            city: 'Kyiv',
            address: 'Kyiv, Stepan Bandera, 33',
            postIndex: '02066',
            country: 'Ukraine',
            id: 0,
            coords: {
                lat: 50.4020865,
                lng: 30.61468031
            }
        },
        {
            city: 'New York',
            address: 'Street, John Doe, 33',
            postIndex: '02066',
            country: 'USA',
            id: 1,
            coords: {
                lat: 40.7143528,
                lng: -74.0059731
            }
        },
        {
            city: 'Guangzhou ',
            address: 'Stepan U, 33',
            postIndex: '02066',
            country: 'China',
            id: 2,
            coords: {
                lat: 23.1301964,
                lng: 113.2592945
            }
        },
        {
            city: 'Barcelona ',
            address: 'Barcelona, sdfgsdfg sdfgsdfg, 33',
            postIndex: '02066',
            country: 'Spain',
            id: 3,
            coords: {
                lat: 41.3828939,
                lng: 2.1774322
            }
        }
    ];

    export default {
        name: "mapSection",
        data() {
            return {
                currentTab: 0,
                offices: offices,
                officesData: officesData,
                mapStyles: {
                    styles: mapStyles,
                }
            }
        },
        computed: {
            google: gmapApi,
            currentOfficeTab () {
                let [tab] = this.officesData.filter((item, index) => {
                    return item.id === this.currentTab;
                })
                return tab;
            }
        },
        methods: {
            
        }
    }
</script>

