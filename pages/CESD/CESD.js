// pages/CESD/CESD.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    i:0,
    score:0,
    text: ["你会因为以前一些不在意的事情而心生困扰","你不想吃饭，胃口不好","即使有家人和朋友的帮助，你依然无法摆脱坏心情","你觉得自己和其他人一样优秀","你做事时，经常无法集中精力","你感觉心情郁闷","你觉得做任何事情都非常费力","你对未来充满了希望","你认为自己过去的生活很失败","你感到恐惧","你睡眠不佳","你非常幸福","你比平时说话少","你感觉孤独","你觉得人们对你不友好","你很享受生活","你经常因不明原因地痛哭","你感觉很伤心","你觉得人们不喜欢你","你感觉自己无法进步"],
    display:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.data.score = 0
    this.data.i = 0
    this.setData({
      "display":this.data.text[this.data.i]
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  Finish(){
    if (this.data.i>19){
      wx.setStorageSync('score', this.data.score)
      if(this.data.score>=0&&this.data.score<=15){
        wx.navigateTo({
          url: '../result/none/none',
        })
      }if(this.data.score>=16&&this.data.score<=20){
        wx.navigateTo({
          url: '../result/light/light',
        })
      }if(this.data.score>=21&&this.data.score<=25){
        wx.navigateTo({
          url: '../result/middle/middle',
        })
      }if(this.data.score>=25&&this.data.score<=60){
        wx.navigateTo({
          url: '../result/heavy/heavy',
        })
      }  
    }
  },
  //事件处理函数
  nextStepA(){
    if (this.data.i == 3||this.data.i == 7||this.data.i == 11||this.data.i == 15){
      this.data.score = this.data.score + 3
    }else{
      this.data.score = this.data.score + 0
    }
    this.data.i++
    this.setData({
      "display":this.data.text[this.data.i]
    })
    this.Finish()
  },
  nextStepB(){
    if (this.data.i == 3||this.data.i == 7||this.data.i == 11||this.data.i == 15){
      this.data.score = this.data.score + 2
    }else{
      this.data.score = this.data.score + 1
    }
    this.data.i++
    this.setData({
      "display":this.data.text[this.data.i]
    })
    this.Finish()
  },
  nextStepC(){
    if (this.data.i == 3||this.data.i == 7||this.data.i == 11||this.data.i == 15){
      this.data.score = this.data.score + 1
    }else{
      this.data.score = this.data.score + 2
    }
    this.data.i++
    this.setData({
      "display":this.data.text[this.data.i]
    })
    this.Finish()
  },
  nextStepD(){
    if (this.data.i == 3||this.data.i == 7||this.data.i == 11||this.data.i == 15){
      this.data.score = this.data.score + 0
    }else{
      this.data.score = this.data.score + 3
    }
    this.data.i++
    this.setData({
      "display":this.data.text[this.data.i]
    })
    this.Finish()
  },
})