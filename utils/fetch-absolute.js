exports.fetchAbsolute = (fetch) => {
  return (baseUrl) =>
    (url, ...otherParams) =>
      url.startsWith("/")
        ? fetch(baseUrl + url, ...otherParams)
        : fetch(url, ...otherParams);
};
