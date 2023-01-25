import moment from "moment";

const sortArr = (arr, key) => {
    return arr.sort(function(a, b) {
        return new Date(a[key]) - new Date(b[key]);
    });
}
  
const astroAverageSize = (jsonObject) => {
    let totalSize = 0;
    for (let item of jsonObject) {
        totalSize += item.size;
    }
    return (totalSize/jsonObject.length).toFixed(2);
}
  
const getHigestSpeed = (jsonObject) => {
    let output = jsonObject.reduce((max, item) => {
        if (parseFloat(item.speed) > parseFloat(max.speed)) {
            return item;
        }
        return max;
    });
    output.speed = (Number(output.speed)).toFixed(2);
    return output;
}
  
const getLowestDistance = (jsonObject) => {
    let output = jsonObject.reduce((lowest, current) => {
        let currentDistance = parseFloat(current.distance);
        let lowestDistance = parseFloat(lowest.distance);
        return (currentDistance < lowestDistance) ? current : lowest;
    });
    output.speed = (Number(output.speed)).toFixed(2);
    return output;
}
  
export const getChartData = (repData) => {
    let chartList 	 = {"dateRow":[], astroCount:[], fastestAstro: {}, closestAstro: {}, averageSize: ''};
    let chartData 	 = [];
    let fastesAstro  = [];
    let closestAstro = [];
    let averageSize  = [];
    for (const key in repData.near_earth_objects) {
      let astroObj = {};
      astroObj.rawDate 	    = key;
      astroObj.astroidCount = repData.near_earth_objects[key].length;
      chartData.push(astroObj);
      repData.near_earth_objects[key].forEach((item, key)=>{
        fastesAstro.push({id: item.id, speed: (item.close_approach_data[0].relative_velocity.kilometers_per_hour)});
        closestAstro.push({id: item.id, distance: (item.close_approach_data[0].miss_distance.kilometers)});
        averageSize.push({id: item.id, size: (item.estimated_diameter.kilometers.estimated_diameter_max)});
      })
    }
    chartData = sortArr(chartData, 'rawDate');
    (sortArr(chartData, 'rawDate')).forEach((item, index)=>{
      chartList.dateRow.push(moment(item.rawDate).format("DD MMM"));
      chartList.astroCount.push(item.astroidCount);
    })
    chartList['averageSize']   = astroAverageSize(averageSize);
    chartList['fastestAstro']  = getHigestSpeed(fastesAstro);
    chartList['closestAstro']  = getLowestDistance(fastesAstro);
    return chartList;
}