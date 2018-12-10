/* eslint-disable */

const amap = new AMap.Map('amap', {
  resizeEnable: true
})

const amapLocatio = {
  getMyLocatio(success, error) {
    AMap.plugin('AMap.Geolocation', function () {
      var geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：5s
        buttonPosition: 'RB',    //定位按钮的停靠位置
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
      });

      amap.addControl(geolocation);
      geolocation.getCurrentPosition(function (status, result) {
        if (status == 'complete') {
          const coord = [result.position.lng, result.position.lat]
          success(coord)
        } else {
          try {
            const center = amap.getCenter()
            if (center && center.lng && center.lat) {
              const coord = [center.lng, center.lat]
              success(coord)
            } else {
              error('获取地理位置失败')
            }
          } catch (err) {
            error(err)
          }
        }
      })
    })
  }
}



export default amapLocatio