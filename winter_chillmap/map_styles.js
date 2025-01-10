// Base style for all map tiles
const MAP_TILE_STYLE = {
  fillOpacity: 0.9, // Start transparent
  weight: 0,
  color: "#000000",
};

// Hover style
const MAP_TILE_HOVER_STYLE = {
  fillOpacity: 0.8, // Become visible on hover
  weight: 2,
  color: "#000000",
};

// Selected style (after click)
const MAP_TILE_SELECTED_STYLE = {
  fillOpacity: 0, // Stay transparent when selected
  weight: 3,
  color: "#000000",
};

// Zoom settings for click action
const ZOOM_OPTIONS = {
  maxZoom: 50, // Adjust this value based on your needs
  padding: [50, 50], // Adds some padding around the zoomed area
  duration: 1, // Slower zoom
  animate: true,
  easeLinearity: 0.5, // Even smoother easing
};

export {
  MAP_TILE_STYLE,
  MAP_TILE_HOVER_STYLE,
  MAP_TILE_SELECTED_STYLE,
  ZOOM_OPTIONS,
};
