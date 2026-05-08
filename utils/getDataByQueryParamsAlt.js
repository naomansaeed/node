// utils/getDataByQueryParams.js
export const getDataByQueryParams = (data, queryObj) => {
  const { continent, country, is_open_to_public } = queryObj;
  
  // Start with the full dataset; filter step-by-step
  let result = data;

  // Filter by continent (case-insensitive)
  if (continent) {
    result = result.filter(dest => 
      dest.continent?.toLowerCase() === continent.toLowerCase()
    );
  }

  // Filter by country (case-insensitive)
  if (country) {
    result = result.filter(dest => 
      dest.country?.toLowerCase() === country.toLowerCase()
    );
  }

  // Filter by is_open_to_public (safe boolean conversion)
  if (is_open_to_public) {
    // Query params are always strings. Convert explicitly:
    const isOpen = is_open_to_public.toLowerCase() === 'true';
    result = result.filter(dest => dest.is_open_to_public === isOpen);
  }

  return result;
};