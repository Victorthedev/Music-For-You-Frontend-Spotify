export const setTokens = (accessToken, refreshToken, expiresIn) => {
  localStorage.setItem('spotify_access_token', accessToken);
  localStorage.setItem('spotify_refresh_token', refreshToken);
  localStorage.setItem('spotify_token_expiry', Date.now() + expiresIn * 1000);
};

export const getAccessToken = () => {
  return localStorage.getItem('spotify_access_token');
};

export const getRefreshToken = () => {
  return localStorage.getItem('spotify_refresh_token');
};

export const isTokenExpired = () => {
  const expiry = localStorage.getItem('spotify_token_expiry');
  return expiry && Date.now() > parseInt(expiry);
};