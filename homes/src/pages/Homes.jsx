import React from 'react';

import { API } from '../data/api.js';

export default function Homes() {
  const [homes, setHomes] = React.useState([]);

  React.useEffect(() => {
    API.getHomePlans()
      .then((homes) => setHomes(homes))
      .catch((error) => console.error(error));
  }, []);

  return <div>{JSON.stringify(homes)}</div>;
}
