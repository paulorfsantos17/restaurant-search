import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { useDispatch } from "react-redux";

import { setRestaurant, setRestaurants } from "../../redux/modules/restaurants";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap({ query }) {
  const dispatch = useDispatch();

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

  const searchNearby = (mapApi) => {
    let markers= []
    setGoogleAPi(mapApi);
    console.log(mapApi)

    const google = mapApi.maps;
    const map = mapApi.map;

    setMap(map);

    const service = new google.places.PlacesService(map);

    const request = {
      location: center,
      radius: "20000",
      type: ["restaurant"],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
        results.forEach((place) =>  {
          markers.push(new google.Marker({
            position: {
              lat: place.geometry.location.lat,
              lng: place.geometry.location.lng,
            }
          }))
        })
      }
    });
  };

  function searchByQuery() {
    
    const google = googleApi.maps;

    const service = new google.places.PlacesService(map);

    const request = {
      map,
      location: center,
      radius: "20000",
      type: ["restaurant"],
      query,
    };
    console.log(service);
    service.textSearch(request, (results, status) => {
      if (status === google.places.PlacesServiceStatus.OK) {
        console.log(results);
        dispatch(setRestaurant(results));
      }
    });
  }

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
          defaultZoom={15}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={(map) => searchNearby(map)}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="Libere seu navegador para usar sua localização!"
          />
        </GoogleMapReact>
      ) : (
        "De permissão para o seu navegador, usar a sua localidade para utilizar está aplicação! "
      )}
    </div>
  );
}
