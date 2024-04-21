/* eslint-disable no-unused-vars */

import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: "AIzaSyCyzjatpKmQMcC9Pxgh8X1LkhBmgzsTMyo",
  },
});
