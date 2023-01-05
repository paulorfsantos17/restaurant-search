import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";

import { setRestaurant, setRestaurants } from "../../redux/modules/restaurants";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Marker = (props) => {
  return (
    <>
      <div className="pin"></div>
      <div className="pulse"></div>
    </>
  );
};

export default function SimpleMap({ query, placeId }) {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurants);

  const [center, setCenter] = useState();
  const [map, setMap] = useState();
  const [googleApi, setGoogleAPi] = useState();

  const posError = () => {
    if (navigator.permissions) {
      navigator.permissions.query({ name: "geolocation" }).then((res) => {
        if (res.state === "denied") {
          alert("Permita o site usar sua localicação pelo browser.");
        }
      });
    }
    esle("Não foi possivel usar sua localição!");
  };

  const showPosition = (position) => {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;

    setCenter({ lat, lng });
  };

  const getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, posError);
    } else {
      aler("Não foi possivel encontrar sua localização");
    }
  };

  const searchNearby = (map, maps) => {
    dispatch(setRestaurants([]))
    setGoogleAPi(maps);
    const google = maps;
    setMap(map);

    const service = new google.places.PlacesService(map);

    const request = {
      location: center,
      radius: "20000",
      type: ["restaurant"],
    };

    service.nearbySearch(request, (restaurants, status) => {
      if (status === google.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(restaurants));
      }
    });
  };

  function searchByQuery() {

    const google = googleApi;

    const service = new google.places.PlacesService(map);

    dispatch(setRestaurants([]))

    const request = {
      map,
      location: center,
      radius: "20000",
      type: ["restaurant"],
      query,
    };

    service.textSearch(request, (results, status) => {
      if (status === google.places.PlacesServiceStatus.OK) {
        console.log(results);
        dispatch(setRestaurants(results));
      }
    });
  }

  function getRestaurantById(placeId) {
    dispatch(setRestaurant(null))
    const service = new googleApi.places.PlacesService(map);

    const request = {
      placeId,
      fields: [
        "name",
        "opening_hours",
        "formatted_address",
        "formatted_phone_number",
      ],
    };

    service.getDetails(request, (restaurant, status) => {
      if (status === googleApi.places.PlacesServiceStatus.OK) {

        dispatch(setRestaurant(restaurant));
      }
    });
  }

  useEffect(() => {
  
    if (placeId) {
      getRestaurantById(placeId);
    }
  }, [placeId]);

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    if (query) {
      searchByQuery();
    }
  }, [query]);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      {center ? (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_API_KEY,
            language: "pt-br",
            region: "br",
            libraries: ["places"],
          }}
          defaultCenter={center}
          defaultZoom={11}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => searchNearby(map, maps)}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="Libere seu navegador para usar sua localização!"
          />

          {restaurants.map((restaurant) => {
            return (
              <Marker
                key={restaurant.place_id}
                lat={restaurant.geometry.location.lat()}
                lng={restaurant.geometry.location.lng()}
              />
            );
          })}
        </GoogleMapReact>
      ) : (
        "De permissão para o seu navegador, usar a sua localidade para utilizar está aplicação! "
      )}
    </div>
  );
}
