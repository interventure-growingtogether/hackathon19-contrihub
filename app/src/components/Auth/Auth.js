import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import qs from "query-string";

export default function Auth() {
  const { search } = useLocation();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function getToken() {
      const { code } = qs.parse(search);

      if (!code) {
        hasError(true);
      }

      const response = await axios.post(
        "https://github.com/login/oauth/access_token",
        {
          code
        }
      );

      console.log(response);
    }

    getToken();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return "Auth yeee";
}
