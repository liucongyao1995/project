<template>
  <div class="home">
    <!-- 头部 -->
    <div class="back">
      <!-- 标识 -->
      <div class="flex">
        <!-- 图片 -->
        <div>
          <img src="@/assets/1.jpg" alt="" class="img">
        </div>
        <div class="flexCo">
          <p class="white font20">烽火调查</p>
          <p class="gry font12">让商业更透明</p>
        </div>
      </div>
      <van-search placeholder="请输入公司名称/关键字" v-model="value" />
      <!-- 查法人。。。。 -->
      <van-grid>
        <van-grid-item icon="photo-o" text="查法人"  class="white"/>
        <van-grid-item icon="photo-o" text="查老赖" class="white"/>
        <van-grid-item icon="photo-o" text="查判决书" class="white"/>
        <van-grid-item icon="photo-o" text="查商标" class="white"/>
      </van-grid>
    </div>
   <!-- 测试报告 -->
   <div style="padding:16px">
     <div>测试报告</div>
      <van-row type="flex" justify="space-between" style='margin-top:8px'>
        <van-col span="6" style='padding:16px;background-color:#fff;width:100px;box-shadow:0 0 1px #969799;'>
          <div class="flexCo" style="justify-content:center">
            <div><img src="@/assets/1.jpg" alt="" class="img"></div>
            <div class="font12 fontCenter">企业调查</div>
          </div>
        </van-col>
        <van-col span="6" style='padding:16px;background-color:#fff;width:100px;box-shadow:0 0 1px #969799;'>
          <div class="flexCo" style="justify-content:center">
            <div><img src="@/assets/1.jpg" alt="" class="img"></div>
            <div class="font12 fontCenter">金融调查</div>
          </div>
        </van-col>
        <van-col span="6" style='padding:16px;background-color:#fff;width:100px;box-shadow:0 0 1px #969799;'>
          <div class="flexCo" style="justify-content:center">
            <div><img src="@/assets/1.jpg" alt="" class="img"></div>
            <div class="font12 fontCenter" >专项调查</div>
          </div>
        </van-col>
      </van-row>
   </div>
   <!-- 查产品 -->
   <div style="padding:16px">
     <div>查产品</div>
      <van-row type="flex" justify="space-between" style=';background-color:#fff;margin-top:8px;box-shadow:0 0 1px #969799;'>
        <van-col span="6" style='padding:16px;background-color:#fff;width:100px'>
          <div class="flexCo" style="justify-content:center">
            <div><img src="@/assets/1.jpg" alt="" class="img"></div>
            <div class="font12 fontCenter">企业调查</div>
          </div>
        </van-col>
        <van-col span="6" style='padding:16px;background-color:#fff;width:100px'>
          <div class="flexCo" style="justify-content:center">
            <div><img src="@/assets/1.jpg" alt="" class="img"></div>
            <div class="font12 fontCenter">企业调查</div>
          </div>
        </van-col>
        <van-col span="6" style='padding:16px;background-color:#fff;width:100px'>
          <div class="flexCo" style="justify-content:center">
            <div><img src="@/assets/1.jpg" alt="" class="img"></div>
            <div class="font12 fontCenter">金融调查</div>
          </div>
        </van-col>
        <van-col span="6" style='padding:16px;background-color:#fff;width:100px'>
          <div class="flexCo" style="justify-content:center">
            <div><img src="@/assets/1.jpg" alt="" class="img"></div>
            <div class="font12 fontCenter" >专项调查</div>
          </div>
        </van-col>
      </van-row>
   </div>
   <!-- 我的应用 -->
    <div style="padding:16px">
     <div>我的应用</div>
      <van-row type="flex" justify="space-between"  style='margin-top:8px'>
        <van-col span="6" style='padding:16px;background-color:#fff;width:100px'>
          <div class="flexCo" style="justify-content:center">
            <div><img src="@/assets/1.jpg" alt="" class="img"></div>
            <div class="font12 fontCenter">企业调查</div>
          </div>
        </van-col>
        <van-col span="6" style='padding:16px;background-color:#fff;width:100px'>
          <div class="flexCo" style="justify-content:center">
            <div><img src="@/assets/1.jpg" alt="" class="img"></div>
            <div class="font12 fontCenter">金融调查</div>
          </div>
        </van-col>
        <van-col span="6" style='padding:16px;background-color:#fff;width:100px'>
          <div class="flexCo" style="justify-content:center">
            <div><img src="@/assets/1.jpg" alt="" class="img"></div>
            <div class="font12 fontCenter" >专项调查</div>
          </div>
        </van-col>
      </van-row>
   </div>
   <!-- 今日资讯 -->
  <div style="padding:16px">
    <div>今日资讯</div>
    <van-row type="flex" justify="space-between">
      <van-col span="6" style='padding:16px;background-color:#fff;width:100px'>
        <div class="flexCo" style="justify-content:center">
          <div><img src="@/assets/1.jpg" alt="" class="img"></div>
          <div class="font12 fontCenter">企业调查</div>
        </div>
      </van-col>
      <van-col span="6" style='padding:16px;background-color:#fff;width:100px'>
        <div class="flexCo" style="justify-content:center">
          <div><img src="@/assets/1.jpg" alt="" class="img"></div>
          <div class="font12 fontCenter">金融调查</div>
        </div>
      </van-col>
      <van-col span="6" style='padding:16px;background-color:#fff;width:100px'>
        <div class="flexCo" style="justify-content:center">
          <div><img src="@/assets/1.jpg" alt="" class="img"></div>
          <div class="font12 fontCenter" >专项调查</div>
        </div>
      </van-col>
    </van-row>
   </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
      value:'' 
    }
  }
}
</script>
<style lang="scss" scoped>
  .home{
    // padding: 16px;
    background-color: #f7f8fa;
    .img{
        width: 100%;
        height: 40px;
      }
     .fontCenter{
       text-align: center;
     }
    .white{
      color: #fff;
    }
    .gry{
      color:#ccc;
    }
    .font20{
      font-size: 20px;
    }
    .font12{
      font-size: 12px;
    }
    .back{
      background-image: url('../assets/2.jpg');
      padding: 16px;
    }
    .flex{
      display: flex;
      width: 100%;
    
      .img{
        width: 40px;
        height: 4 0px;
      }
      .flexCo{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        >p{
          margin: 0;
        }
      }
    }
  }
</style>
<style lang="scss">
.van-field__left-icon{
      color: blue;
}
.van-search{
  padding: 0;
  border-radius: 4px;
}
.van-search__content{
  background-color: transparent;
}
.van-field__control{
  background-color: transparent;
}
.van-grid-item__content{
  background-color: transparent;
}
.van-grid-item__content::after{
  border: 0;
}
.van-grid-item__text{
  color: #fff;
}
</style>