# NYC Chillmap

Welcome to the NYC Chillmap project! 🌳🛋️🗽

New York City is famous for its towering skyscrapers, bustling streets, and vibrant culture. However, amidst the concrete jungle, many overlook the peaceful spots that offer a breath of fresh air, scenic views, and moments of semi-solitude. The NYC Chillmap aims to highlight these hidden gems, making it easier for residents and visitors alike to find serene spots in the city that never sleeps.

## 📍 What is the NYC Chillmap?

Imagine a map of New York City, not as a heatmap showing activity or congestion, but as a Chillmap. In this Chillmap:
	•	Darker regions indicate areas rich in green spaces, places to rest, fewer rats, and lower noise pollution.
	•	Lighter regions represent the typical hustle and bustle with more concrete and noise.

The Chillmap helps you discover peaceful neighborhoods, beautiful parks, and quiet corners of NYC where you can relax and unwind.

## 🌿 Key Features

	•	Interactive Map: Explore the Chillmap in your browser and hover over any grid point to see detailed information about that area.
	•	Chill Score: Each area is assigned a Chill Score based on various factors that contribute to its peacefulness.
	•	Comprehensive Data: Combines multiple datasets to provide a holistic view of NYC’s serene spots.

## 📊 Datasets Used

To create the Chillmap, we integrated and cleaned the following five datasets:
	1.	City Bench Locations: Geo-spatial data of all benches in NYC, indicating places to sit and relax.
	2.	GreenThumb Garden: Information on 550 community gardens across the city.
	3.	2015 Street Tree Census: Details on tree types and their locations throughout NYC.
	4.	311 Service Requests (2010-Present): Specifically focusing on noise pollution, rat sightings, and other related issues.
	5.	Green Streets Program: Data on initiatives that transform unused road areas into green spaces, beautify neighborhoods, reduce temperatures, and calm traffic.

Each dataset includes two additional fields: id and grid_id, which help map the data to specific areas on the Chillmap.

## 🧮 How is the Chill Score Calculated?

The Chill Score determines how peaceful and green a particular area is. It’s calculated using the following formula:

`Chill Score = 
  (Number of 311 Noise/Rat Reports * -0.01) +
  (Number of Benches * 0.01) + 
  (Number of Community Gardens * 0.5) +
  (Number of Trees * 0.01) +
  (Number of Green Streets Initiatives * 0.5)`

Negative Impact: More noise pollution and rat sightings decrease the Chill Score.
Positive Impact: More benches, gardens, trees, and green street initiatives increase the Chill Score.

Areas with higher Chill Scores are darker on the Chillmap, indicating more serene and green environments.

🗂️ Data Structure

	•	Grid ID Mapping: Each grid_id corresponds to a specific area on the map, detailed in df_grid.csv. This file contains the geometry of each grid and its Chill Score.
	•	Chunked Data: To manage large datasets efficiently, the 311 service requests and tree data are chunked.
	•	Full Data: For those interested in a comprehensive view, the full_data dataset includes all metadata and rows, allowing you to merge everything into one extensive dataset.

## 🖥️ How to Use the Chillmap

Check out the interactive Chillmap by opening the nyc_map.html file in your browser. Here’s what you can do:
	•	Hover Over Areas: Move your cursor over any grid point to see the number of benches, trees, gardens, and more in that zone.
	•	Discover New Spots: Find areas with high Chill Scores to enjoy some peace and tranquility in the heart of NYC.
