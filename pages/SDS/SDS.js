// pages/SDS/SDS.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    i:0,
    score:0,
    text: ["我觉得闷闷不乐，情绪低沉","我觉得一天之中早晨最好","我一阵阵哭出来或觉得想哭","我晚上睡眠不好","我吃的跟平常一样多","我与异性亲密接触时和以往一样感觉愉快","我发觉我的体重在下降","我有便秘的苦恼","我心跳比平时快","我无缘无故地感到疲乏","我的头脑跟平常一样清楚","我觉得经常做的事情并没有困难","我觉得不安而平静不下来","我对将来抱有希望","我比平常容易生气激动","我觉得作出决定是容易的","我觉得自己是个有用的人，有人需要我","我的生活过得很有意思","我认为如果我死了别人会生活得好些","平常感兴趣的事我仍然照样感兴趣"],
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
  //检测列表是否完成
  Finish(){
    if (this.data.i>19){
      var fScore = this.data.score*1.5
      if(fScore>=53&&fScore<=62){
        wx.navigateTo({
          url: '../result/light/light',
        })
      }else if(fScore>=63&&fScore<=72){
          wx.navigateTo({
            url: '../result/middle/middle',
          })
      }else if(fScore>=73){
          wx.navigateTo({
            url: '../result/heavy/heavy',
          })
      }else{
          wx.navigateTo({
            url: '../result/none/none',
          })
      }
    }
  },
  //事件处理函数
  nextStepA(){
    if (this.data.i == 0||this.data.i == 2||this.data.i == 3||this.data.i == 6||this.data.i == 7||this.data.i == 8||this.data.i == 9||this.data.i == 12||this.data.i == 14||this.data.i == 18){
      this.data.score = this.data.score + 1
    }else{
      this.data.score = this.data.score + 4
    }
    this.data.i++
    this.setData({
      "display":this.data.text[this.data.i]
    })
    this.Finish()
  },
  nextStepB(){
    if (this.data.i == 0||this.data.i == 2||this.data.i == 3||this.data.i == 6||this.data.i == 7||this.data.i == 8||this.data.i == 9||this.data.i == 12||this.data.i == 14||this.data.i == 18){
      this.data.score = this.data.score + 2
    }else{
      this.data.score = this.data.score + 3
    }
    this.data.i++
    this.setData({
      "display":this.data.text[this.data.i]
    })
    this.Finish()
  },
  nextStepC(){
    if (this.data.i == 0||this.data.i == 2||this.data.i == 3||this.data.i == 6||this.data.i == 7||this.data.i == 8||this.data.i == 9||this.data.i == 12||this.data.i == 14||this.data.i == 18){
      this.data.score = this.data.score + 3
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
    if (this.data.i == 0||this.data.i == 2||this.data.i == 3||this.data.i == 6||this.data.i == 7||this.data.i == 8||this.data.i == 9||this.data.i == 12||this.data.i == 14||this.data.i == 18){
      this.data.score = this.data.score + 4
    }else{
      this.data.score = this.data.score + 1
    }
    this.data.i++
    this.setData({
      "display":this.data.text[this.data.i]
    })
    this.Finish()
  },
})