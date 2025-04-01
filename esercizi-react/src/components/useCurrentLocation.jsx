import { useState, useCallback } from "react";

export default function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [errors, setErrors] = useState(null);
  const [loadings, setLoadings] = useState(false);

  const getLocation = useCallback(() => {
    setLoadings(true);
    setErrors(null);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLoadings(false);
          setLocation(position.coords);
        },
        (err) => {
          setLoadings(false);
          setErrors(err.message);
        }
      );
    } else {
      setLoadings(false);
      setErrors("Geolocation not supported from browser");
    }
  }, []);

  return { location, errors, loadings, getLocation };
}
