import FeatureToogle from '../config/featureToggle.json';
import OfertaModel from '../model/OfertaModel';

export function loadOffers(): Promise<OfertaModel[]> {

  const payload = {
    method: 'GET',
    headers: getHeaders()
  };

  return fetch('http://20.81.94.224:3003/store', payload)
    .then(response => response.json());
}

function getHeaders(): Headers {
  const token = localStorage.getItem('token');
  const headers = new Headers();

  headers.append('Accept', 'application/json')
  headers.append('Content-type', 'application/json')

  if (FeatureToogle.security) {
    headers.append('Authorization', `Bearer ${token}`)
  }

  return headers;
}
