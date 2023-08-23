// pages/SD/SD.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    i:0,
    score:0,
    text: ["你是否一直感到伤心或悲哀？","你是否感到前景渺茫？","你是否觉得自己没有价值或自以为是一个失败者？","你是否觉得力不从心或自叹比不上别人？","你是否对任何事都自责？","你是否在做决定时犹豫不决？","这段时间你是否一直处于愤怒和不满状态？","你对事业、家庭、爱好或朋友是否丧失了兴趣？","你是否感到一蹶不振，做事情毫无动力？","你是否以为自己已衰老或失去魅力？","你是否感到食欲不振？或情不自禁地暴饮暴食？","你是否患有失眠症？或整天感到体力不支，昏昏欲睡？","你是否丧失了对性的兴趣？","你是否经常担心自己的健康？","你是否认为生存没有价值，或生不如死？"],
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
    if (this.data.i>14){
      wx.setStorageSync('score', this.data.score)
      if(this.data.score>=0&&this.data.score<=4){
        wx.navigateTo({
          url: '../result/none/none',
        })
      }if(this.data.score>=5&&this.data.score<=10){
        wx.navigateTo({
          url: '../result/seldom/seldom',
        })
      }if(this.data.score>=11&&this.data.score<=20){
        wx.navigateTo({
          url: '../result/light/light',
        })
      }if(this.data.score>=21&&this.data.score<=30){
        wx.navigateTo({
          url: '../result/middle/middle',
        })
      }if(this.data.score>=31&&this.data.score<=45){
        wx.navigateTo({
          url: '../result/heavy/heavy',
        })
      }  
    }

  },
  //事件处理函数
  nextStepA(){
    this.data.i++
    this.setData({
      "display":this.data.text[this.data.i]
    })
    this.Finish()
  },
  nextStepB(){
    this.data.score++
    this.data.i++
    this.setData({
      "display":this.data.text[this.data.i]
    })
    this.Finish()
  },
  nextStepC(){
    this.data.score = this.data.score + 2
    this.data.i++
    this.setData({
      "display":this.data.text[this.data.i]
    })
    this.Finish()
  },
  nextStepD(){
    this.data.score = this.data.score + 3
    this.data.i++
    this.setData({
      "display":this.data.text[this.data.i]
    })
    this.Finish()
  },
})