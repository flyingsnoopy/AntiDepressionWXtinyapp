// pages/HAM/HAM.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    i:0,
    score:0,
    //0:012,1:012,2:0123,3:01234,4:性症状
    set:[3,3,3,1,1,1,3,3,3,3,3,1,1,1,3,1,0,1,3,3,1,3,3,3],
    text: ["抑郁情绪","有罪感","自杀","入睡困难（初段失眠）","睡眠不深（中段失眠）","早醒（末段失眠）","工作和兴趣","阻滞（指思维和言语缓慢，注意力难以集中，主动性减退）","激越","精神性焦虑","躯体性焦虑（指焦虑的生理症状）","胃肠道症状","全身症状","性症状（指性欲减退，月经紊乱等）","疑病","体重减轻：按病史评定","自知力","日夜变化","人格解体或现实解体（指非真实感或虚无妄想）","偏执症状","强迫症状（指强迫思维和强迫行为）","能力减退感","绝望感","自卑感"],
    textB:["只在问到时才诉述","责备自己，感到自己已连累他人","觉得活着没有意义","主诉有入睡困难，上床半小时后仍不能入睡","睡眠浅，多恶梦","有早醒，比平时早醒1小时，但能重新入睡","提问时才诉述","精神检查中发现轻度阻滞","检查时有些心神不定","问及时诉述","轻度","食欲减退，但不需他人鼓励便自行进食","四肢，背部或颈部沉重感，背痛、头痛、肌肉疼痛，全身乏力或疲倦","轻度","对身体过分关注","患者诉述可能有体重减轻","知道自己有病，表现为抑郁","轻度变化","问及时才诉述","有猜疑","问及时才诉述","仅于提问时方引出主观体验","有时怀疑“情况是否会好转”，但解释后能接受","仅在询问时诉述有自卑感（我不如他人）"],
    textC:["在访谈中自发地表达","认为自己犯了罪，或反复思考以往的过失和错误","希望自己已经死去，或常想到与死有关的事","主诉每晚均有入睡困难","半夜（晚12点钟以前）曾醒来","早醒后无法重新入睡","自发地直接或间接表达对活动、工作或学习失去兴趣，如感到没精打彩，犹豫不决，不能坚持或需强迫自己去工作或活动","精神检查中发现明显阻滞","明显心神不定或小动作多","自发地表达","中度","进食需他人催促或请求和需要应用泻药或助消化药","症状明显","重度","反复考虑健康问题","一周内体重减轻超过0.5公斤","知道自己有病，但归咎伙食太差，环境问题，工作过忙，病毒感染或需要休息","重度变化","自然诉述","有牵连观念","自发诉述","病人主动表示有能力减退感","持续感到“没有希望”，但解释后能接受","自动地诉述有自卑感"],
    textD:["不用言语也可以从表情、姿势、声音或欲哭中流露出这种情绪","认为目前的疾病，是对自己错误的惩罚，或有罪恶妄想","消极观念（自杀念头）","","","","活动时间减少或成效下降，住院病人每天参加病房劳动或娱乐不满3小时","精神检查进行困难","不能静坐，检查中曾起立","表情和言谈流露出明显忧虑","重度，上述症状严重，影响生活或需要处理","","","","有疑病妄想","","","","有虚无妄想","有关系妄想或被害妄想","","需鼓励、指导和安慰才能完成病室日常事务或个人卫生","对未来感到灰心、悲观和失望，解释后不能解除","病人主动诉述；“我一无是处”或“低人一等”"],
    textE:["病人的自发言语和非语言表达（表情，动作）几乎完全表现为这种情绪","罪恶妄想伴有指责或威胁性幻觉","有严重自杀行为","","","","因目前的疾病而停止工作，住院者不参加任何活动或者没有他人帮助便不能完成病室日常事务","完全不能回答问题（木僵）","搓手、咬手指、扯头发、咬嘴唇","明显惊恐","严重影响生活和活动","","","","伴幻觉的疑病妄想","","","","伴幻觉的虚无妄想","伴有幻觉的关系妄想或被害妄想","","穿衣、梳洗、进食、铺床或个人卫生均需他人协助","自动地反复诉述“我的病好不了啦”诸如此类的情况","自卑感达妄想的程度，例如“我是废物”或类似情况"],
    display:"",
    displayB:"",
    displayC:"",
    displayD:"",
    displayE:"",
    displaySet:0, 
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
      "display":this.data.text[this.data.i],
      "displayB":this.data.textB[this.data.i],
      "displayC":this.data.textC[this.data.i],
      "displayD":this.data.textD[this.data.i],
      "displayE":this.data.textE[this.data.i],
      "displaySet":this.data.set[this.data.i],
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
    if (this.data.i>23){
      wx.setStorageSync('score', this.data.score)
      if(this.data.score>=0&&this.data.score<8){
        wx.navigateTo({
          url: '../result/none/none',
        })
      }if(this.data.score>=8&&this.data.score<=20){
        wx.navigateTo({
          url: '../result/light/light',
        })
      }if(this.data.score>=21&&this.data.score<=34){
        wx.navigateTo({
          url: '../result/middle/middle',
        })
      }else{
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
      "display":this.data.text[this.data.i],
      "displayB":this.data.textB[this.data.i],
      "displayC":this.data.textC[this.data.i],
      "displayD":this.data.textD[this.data.i],
      "displayE":this.data.textE[this.data.i],
      "displaySet":this.data.set[this.data.i],
    })
    this.Finish()
  },
  nextStepB(){
    this.data.score++
    this.data.i++
    this.setData({
      "display":this.data.text[this.data.i],
      "displayB":this.data.textB[this.data.i],
      "displayC":this.data.textC[this.data.i],
      "displayD":this.data.textD[this.data.i],
      "displayE":this.data.textE[this.data.i],
      "displaySet":this.data.set[this.data.i],
    })
    this.Finish()
  },
  nextStepC(){
    this.data.score = this.data.score + 2
    this.data.i++
    this.setData({
      "display":this.data.text[this.data.i],
      "displayB":this.data.textB[this.data.i],
      "displayC":this.data.textC[this.data.i],
      "displayD":this.data.textD[this.data.i],
      "displayE":this.data.textE[this.data.i],
      "displaySet":this.data.set[this.data.i],
    })
    this.Finish()
  },
  nextStepD(){
    this.data.score = this.data.score + 3
    this.data.i++
    this.setData({
      "display":this.data.text[this.data.i],
      "displayB":this.data.textB[this.data.i],
      "displayC":this.data.textC[this.data.i],
      "displayD":this.data.textD[this.data.i],
      "displayE":this.data.textE[this.data.i],
      "displaySet":this.data.set[this.data.i],
    })
    this.Finish()
  },
  nextStepE(){
    this.data.score = this.data.score + 4
    this.data.i++
    this.setData({
      "display":this.data.text[this.data.i],
      "displayB":this.data.textB[this.data.i],
      "displayC":this.data.textC[this.data.i],
      "displayD":this.data.textD[this.data.i],
      "displayE":this.data.textE[this.data.i],
      "displaySet":this.data.set[this.data.i],
    })
    this.Finish()
  },
})